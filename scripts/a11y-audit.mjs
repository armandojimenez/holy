// Automated WCAG 2 A/AA audit for every localized landing route.
// Playwright is shared with the Holy screenshot studio so this site and the
// executable visual specification are tested with the same browser runtime.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const STUDIO = path.resolve(REPO, '../../tools/holy-screenshots');
const AXE = path.join(REPO, 'node_modules/axe-core/axe.min.js');
const { chromium } = await import(
  path.join(STUDIO, 'node_modules/playwright/index.mjs')
);
const { LOCALES } = await import(path.join(REPO, 'src/i18n/index.mjs'));

const ORIGIN = process.env.QA_ORIGIN ?? 'http://127.0.0.1:4321';
const OUT = path.join(REPO, 'qa-sweep', 'a11y-report.json');
const route = (locale) => `${ORIGIN}/holy/${locale === 'en' ? '' : `${locale}/`}`;
const alive = await fetch(route('en')).then((response) => response.ok).catch(() => false);

if (!alive) {
  console.error(`No Holy dev server at ${ORIGIN} — run \`npm run dev\` first.`);
  process.exit(1);
}

const browser = await chromium.launch();
const report = {};
let failures = 0;

try {
  for (const locale of LOCALES) {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      reducedMotion: 'reduce',
      isMobile: true,
      hasTouch: true,
    });
    const page = await context.newPage();
    await page.goto(route(locale), { waitUntil: 'networkidle' });
    await page.addScriptTag({ path: AXE });
    const result = await page.evaluate(async () => {
      const audit = await globalThis.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
      });
      return audit.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      }));
    });
    report[locale] = result;
    if (result.length) failures += 1;
    console.log(locale, result.length ? `FAIL: ${result.map((v) => v.id).join(', ')}` : 'clean');
    await context.close();
  }
} finally {
  await browser.close();
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(report, null, 2));
console.log(failures ? `${failures} locale(s) failed -> ${OUT}` : 'all locales pass WCAG 2 A/AA automation');
process.exit(failures ? 1 : 0);
