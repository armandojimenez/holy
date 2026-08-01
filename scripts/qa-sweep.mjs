// Visual QA sweep across every locale (Believe S5 method; run it after any
// sync or copy change, against a dev server on :4321):
//   node scripts/qa-sweep.mjs [--all]
// Override the dev-server origin when port 4321 is occupied:
//   QA_ORIGIN=http://127.0.0.1:4322 node scripts/qa-sweep.mjs
// By default audits PUBLISHED_LOCALES; --all audits all 11 built locales
// (pre-publication gate for the localization session).
// For each locale at 6 widths it audits, in the real rendered page:
//   - horizontal document overflow (with the offending elements)
//   - the hero h1: every authored title line (.line span) must render as
//     exactly ONE line — a re-wrap means the font outgrew the column
//   - EVERY hero notification card in the cycler payload (text + author),
//     measured against the 158px slot pitch (taller cards overlap)
//   - fixed in-device text boxes (widgets, quote cards, dialog, practice
//     quote): rendered content must fit its box
// and saves full-page desktop + mobile screenshots for eyeball review.
// Playwright comes from the studio repo (same sibling convention as
// sync-content.mjs); output goes to qa-sweep/ (gitignored).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const STUDIO = path.resolve(REPO, '../../tools/holy-screenshots');
const { chromium } = await import(
  path.join(STUDIO, 'node_modules/playwright/index.mjs')
);

const i18n = await import(path.join(REPO, 'src/i18n/index.mjs'));
const requested = process.env.QA_LOCALES?.split(',').map((l) => l.trim()).filter(Boolean);
const LOCALES = requested?.length
  ? requested
  : process.argv.includes('--all')
    ? i18n.LOCALES
    : i18n.PUBLISHED_LOCALES;
const OUT = path.join(REPO, 'qa-sweep');
fs.mkdirSync(OUT, { recursive: true });
const ORIGIN = process.env.QA_ORIGIN ?? 'http://localhost:4321';

const SHOT_VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const AUDIT_ONLY = [
  { name: 'xs', width: 320, height: 700 },
  { name: 'narrow', width: 360, height: 780 },
  { name: 'mid', width: 700, height: 900 },
  { name: 'twocol', width: 1200, height: 900 },
];

const url = (l) => `${ORIGIN}/holy/${l === 'en' ? '' : l + '/'}`;

const AUDIT_FN = `(() => {
  const out = { docOverflow: null, wideEls: [], heroTitle: [], heroCards: [], boxes: [] };
  for (const sp of document.querySelectorAll('.hero h1 .line')) {
    const r = document.createRange();
    r.selectNodeContents(sp);
    const frags = r.getClientRects().length;
    if (frags > 1) out.heroTitle.push({ text: sp.textContent, frags });
  }
  const de = document.documentElement;
  if (de.scrollWidth > de.clientWidth + 1) {
    out.docOverflow = { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth };
    const path = (el) => {
      const bits = [];
      for (let e = el; e && e !== document.body && bits.length < 4; e = e.parentElement) {
        bits.unshift(e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.split(' ').filter(Boolean).slice(0, 2).join('.') : ''));
      }
      return bits.join(' > ');
    };
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width && (r.right > de.clientWidth + 1 || r.left < -1)) {
        out.wideEls.push({ sel: path(el), left: Math.round(r.left), right: Math.round(r.right) });
      }
      if (out.wideEls.length >= 15) break;
    }
  }
  const stack = document.querySelector('[data-hero-stack]');
  if (stack && stack.dataset.cards) {
    const data = JSON.parse(stack.dataset.cards);
    const tmpl = stack.querySelector('template');
    const probe = tmpl.content.firstElementChild.cloneNode(true);
    probe.style.visibility = 'hidden';
    probe.style.transition = 'none';
    stack.append(probe);
    data.cards.forEach((card, i) => {
      probe.querySelector('[data-body]').textContent = card.text;
      probe.querySelector('[data-author]').textContent = card.author ? '  -' + card.author : '';
      probe.querySelector('[data-when]').textContent = data.whens[i % data.whens.length];
      const h = probe.offsetHeight;
      // slot pitch is 158 design units; the standard 2-line card is ~162.
      // 3-line cards land ~199 and visibly overlap: flag past 2-line height.
      if (h > 162) out.heroCards.push({ i, h, body: card.text });
    });
    probe.remove();
  }
  // Fixed in-device text boxes: content must fit. The quote-card and share
  // q-boxes center with flex; overflowing children spill symmetrically, so
  // compare child height against the box.
  for (const sel of ['.widget', '.dlg-input', '.q-box']) {
    for (const el of document.querySelectorAll(sel)) {
      const over = el.scrollHeight - el.clientHeight;
      if (over > 4) out.boxes.push({ sel, over, text: el.textContent.slice(0, 40) });
    }
  }
  return out;
})()`;

const alive = await fetch(`${ORIGIN}/holy/`).then((r) => r.ok).catch(() => false);
if (!alive) {
  console.error(`No Holy dev server at ${ORIGIN} — run \`npm run dev\` first.`);
  process.exit(1);
}

const browser = await chromium.launch();
const report = {};
let failures = 0;

try {
for (const l of LOCALES) {
  report[l] = {};
  for (const vp of [...SHOT_VIEWPORTS, ...AUDIT_ONLY]) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      reducedMotion: 'reduce',
      deviceScaleFactor: vp.name === 'mobile' ? 2 : 1,
      isMobile: vp.name === 'mobile' || vp.name === 'narrow',
      hasTouch: vp.name === 'mobile' || vp.name === 'narrow',
    });
    const page = await ctx.newPage();
    await page.goto(url(l), { waitUntil: 'networkidle' });
    await page.evaluate('document.fonts.ready.then(() => {})');
    await page.waitForTimeout(350);
    const audit = await page.evaluate(AUDIT_FN);
    report[l][vp.name] = audit;
    if (vp.name === 'desktop' || vp.name === 'mobile') {
      // Walk the page so loading="lazy" images (family icons etc.) actually
      // load before the full-page stitch, then wait for every decode.
      await page.evaluate(`new Promise((res) => {
        let y = 0;
        const step = () => {
          y += 600;
          scrollTo(0, y);
          if (y < document.body.scrollHeight) setTimeout(step, 40);
          else { scrollTo(0, 0); setTimeout(res, 120); }
        };
        step();
      })`);
      await page.waitForFunction('[...document.images].every((i) => i.complete)', { timeout: 10000 }).catch(() => {});
      await page.screenshot({ path: path.join(OUT, `${l}-${vp.name}.png`), fullPage: true });
    }
    await ctx.close();
  }
  const flags = Object.entries(report[l])
    .flatMap(([v, a]) => [
      a.docOverflow ? `${v}:doc-overflow` : null,
      a.heroTitle.length ? `${v}:h1-wrap×${a.heroTitle.length}` : null,
      a.heroCards.length ? `${v}:hero×${a.heroCards.length}` : null,
      a.boxes.length ? `${v}:box×${a.boxes.length}` : null,
    ])
    .filter(Boolean);
  if (flags.length) failures += 1;
  console.log(l, flags.length ? 'FLAGS: ' + flags.join(' ') : 'clean');
}
} finally {
  await browser.close();
}
fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
console.log(failures ? `${failures} locale(s) flagged -> ${OUT}/report.json` : 'all clean');
process.exit(failures ? 1 : 0);
