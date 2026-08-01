// Syncs the landing's shared content from its two sources of truth:
//   - holy-screenshots (the expert-reviewed marketing copy modules, HX7)
//   - holy_app (the real app assets: fonts, images, quote corpus)
// Copied output is COMMITTED to this repo, so CI builds never need the
// sibling repos. Run after any deck-copy or corpus change:  npm run sync
//
// Landing-only strings do NOT live here — they extend the deck modules in
// src/i18n/<locale>.mjs and are authored/reviewed in this repo.
//
// CONTENT RULE: every rendered verse resolves from Holy's localized,
// identity-stable runtime corpus and gets its localized Scripture citation
// from the corresponding citation sidecar.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const STUDIO = path.resolve(REPO, '../../tools/holy-screenshots');
const APP = path.resolve(REPO, '../../flutter/holy_app');

for (const [name, p] of [['holy-screenshots studio', STUDIO], ['holy_app', APP]]) {
  if (!fs.existsSync(p)) {
    console.error(`sync needs the ${name} sibling repo at ${p} — clone it first.`);
    process.exit(1);
  }
}

const COPY_SRC = path.join(STUDIO, 'config/copy');
const COPY_DST = path.join(REPO, 'src/data/copy');
const APP_DST = path.join(REPO, 'public/app');

// Remove only generated asset roots so a re-sync cannot leave Motiv art
// behind. Every removed file is reproducible from the two sources above.
for (const generated of [
  COPY_DST,
  APP_DST,
  path.join(REPO, 'public/img/tool'),
  path.join(REPO, 'public/img/family'),
  path.join(REPO, 'public/og'),
]) {
  fs.rmSync(generated, { recursive: true, force: true });
}
fs.rmSync(path.join(REPO, 'public/favicon.ico'), { force: true });

// Tool/site locale code → app asset folder (short store codes everywhere;
// the app ships its Portuguese corpus as pt-BR).
const APP_LOCALE = { es: 'es-419', pt: 'pt-BR' };
const appLocale = (l) => APP_LOCALE[l] ?? l;

// The hero notification stack cycles through these (quote + author, exactly
// how Holy notifies). Order = display order in the loop. Short entries
// only — every translation must hold two lines in the 158px card slot
// (scripts/qa-sweep.mjs measures every payload entry per locale).
const HERO_CARD_SPECS = [
  { category: 'holy_verses', id: 16 },
  { category: 'holy_verses', id: 68 },
  { category: 'holy_verses', id: 10 },
];
// The quiet lock-screen widget line under the clock.
const PILL_SPEC = { category: 'christian_affirmations', id: 16 };

// Feature-section data resolved at sync time so pages never fetch corpus.
const CATEGORY_KEYS = [
  'holy_verses',
  'faith',
  'hope',
  'pray',
  'gratitude',
  'jesus',
  'forgiveness',
  'love',
];
const QUOTE_CARD_SPEC = { category: 'holy_verses', id: 18 };
const WIDGET_SPECS = {
  medium: { category: 'holy_verses', id: 16 },
  smallDark: { category: 'holy_verses', id: 18 },
  smallPink: { category: 'holy_verses', id: 68 },
  medium2: { category: 'holy_verses', id: 77 },
};
const SHARE_SPEC = { category: 'holy_verses', id: 68 };
const PRACTICE_SPEC = { category: 'holy_verses', id: 75 };
const DARK_SPEC = { category: 'holy_verses', id: 55 };
// The interstitial bands are localized Scripture from the same corpus.
const BAND_SPECS = [
  { category: 'holy_verses', id: 55 },
  { category: 'holy_verses', id: 40 },
  { category: 'holy_verses', id: 67 },
  { category: 'holy_verses', id: 24 },
];

const manifest = { syncedAt: new Date().toISOString(), sources: {}, files: [] };

function copyFile(src, dst) {
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
  manifest.files.push(path.relative(REPO, dst));
}

function copyGlob(srcDir, dstDir, filter = () => true) {
  for (const f of fs.readdirSync(srcDir)) {
    if (filter(f) && fs.statSync(path.join(srcDir, f)).isFile()) {
      copyFile(path.join(srcDir, f), path.join(dstDir, f));
    }
  }
}

const readJson = (p) =>
  fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null;

const dig = (obj, dotPath) =>
  dotPath.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

// Match the screenshot studio's Scripture presentation cleanup exactly.
// The runtime corpus intentionally preserves source-edition punctuation;
// marketing surfaces remove whole-verse wrappers and translator brackets
// without changing the words of the verse.
function cleanScriptureForMarketing(text, locale) {
  let cleaned = text.normalize('NFC').trim().replace(/\[([^\]]+)\]/gu, '$1');
  const wrapped = cleaned.match(/^\((.*)\)([.,;]?)$/u);
  if (wrapped) cleaned = `${wrapped[1]}${wrapped[2]}`;
  for (const [open, close] of [['‘', '’'], ["'", "'"], ['“', '”'], ['"', '"']]) {
    if (cleaned.startsWith(open) && cleaned.endsWith(close)) {
      cleaned = cleaned.slice(open.length, -close.length).trim();
      break;
    }
  }
  cleaned = cleaned.trim().replace(/[;,]\s*$/u, '.');
  cleaned = cleaned.replace(/^(\p{Ll})/u, (first) =>
    first.toLocaleUpperCase(appLocale(locale))
  );
  return cleaned;
}

// ── 1. Deck copy modules (reviewed marketing strings, all 11 locales) ──
copyGlob(COPY_SRC, COPY_DST, (f) => f.endsWith('.js'));
manifest.sources.copy = path.relative(REPO, COPY_SRC);

// ── 2. App assets, keeping the /app/* URL shape the deck components use ──
// Fonts land in a gitignored cache; the web-delivery step below subsets
// them to woff2 in public/fonts so the site never ships raw TTFs.
const APP_ASSETS = path.join(APP, 'assets');
const FONT_CACHE = path.join(HERE, '.cache/fonts');
copyGlob(path.join(APP_ASSETS, 'fonts'), FONT_CACHE, (f) =>
  /^(Poppins-(Regular|Bold)|PlayfairDisplay-Regular|ZillaSlabHighlight-Regular)\.ttf$/.test(f)
);
manifest.files = manifest.files.filter((f) => !f.startsWith('scripts/'));

// The dove + script wordmarks + the approved Holy app icon.
copyFile(
  path.join(APP_ASSETS, 'images/svgIcons/paloma.svg'),
  path.join(APP_DST, 'images/svgIcons/paloma.svg')
);
copyFile(
  path.join(APP_ASSETS, 'images/svgIcons/paloma_widget.svg'),
  path.join(APP_DST, 'images/svgIcons/paloma_widget.svg')
);
copyFile(
  path.join(APP_ASSETS, 'images/svgIcons/holy_alt_light copy.svg'),
  path.join(APP_DST, 'images/svgIcons/holy_alt_light.svg')
);
copyFile(
  path.join(APP_ASSETS, 'images/svgIcons/holy_alt_dark.svg'),
  path.join(APP_DST, 'images/svgIcons/holy_alt_dark.svg')
);
copyFile(
  path.join(STUDIO, 'assets/holy/app-icon.png'),
  path.join(APP_DST, 'images/icons/alternate_app_icons/default.png')
);
for (const file of ['icon-512.png', 'icon-192.png', 'apple-touch-icon.png', 'favicon-32.png']) {
  copyFile(
    path.join(STUDIO, 'assets/holy/app-icon.png'),
    path.join(REPO, `public/${file}`)
  );
}
copyFile(
  path.join(APP_ASSETS, 'images/svgIcons/paloma.svg'),
  path.join(REPO, 'public/favicon.svg')
);

// Category tiles the categories section shows.
for (const key of CATEGORY_KEYS) {
  copyFile(
    path.join(APP_ASSETS, `images/backgrounds/categories_bg/${key}.jpg`),
    path.join(APP_DST, `images/backgrounds/categories_bg/${key}.jpg`)
  );
}

// Card-theme artwork: the image themes the theme gallery shows, plus the
// widgets section's sky wallpaper (all real theme_bg art).
const THEME_BG_KEYS = [
  'holy_bg_green',
  'holy_bg_gold',
  'holy_bg_redish',
  'holy_bg_blue',
  'holy_bg_crema',
  'holy_bg_black',
  'holy_bg_pinky',
  'holy_bg_white',
  'bottom_flower',
  'candle',
  'book',
  'hands',
];
for (const key of THEME_BG_KEYS) {
  copyFile(
    path.join(APP_ASSETS, `images/backgrounds/theme_bg/${key}.jpg`),
    path.join(APP_DST, `images/backgrounds/theme_bg/${key}.jpg`)
  );
}
for (const file of ['instagram.png', 'facebook.png', 'twitter.png', 'whatsapp.png']) {
  copyFile(
    path.join(APP_ASSETS, `images/icons/${file}`),
    path.join(APP_DST, `images/icons/${file}`)
  );
}
manifest.sources.app = path.relative(REPO, APP_ASSETS);

// Studio art: the Holy lock/share wallpapers and the 10 family store icons.
const TOOL_ASSETS = path.join(STUDIO, 'assets');
copyFile(
  path.join(TOOL_ASSETS, 'wallpapers/holy-lock.png'),
  path.join(REPO, 'public/img/tool/holy-lock.png')
);
copyFile(
  path.join(TOOL_ASSETS, 'wallpapers/holy-share.png'),
  path.join(REPO, 'public/img/tool/holy-share.png')
);
copyGlob(path.join(TOOL_ASSETS, 'family'), path.join(REPO, 'public/img/family'), (f) => f.endsWith('.png'));
manifest.sources.tool = path.relative(REPO, TOOL_ASSETS);

// Downscale the copied art to ~2x its rendered size (the sources are
// masters, megabytes big). sips ships with macOS; sync always runs there.
const downscale = (rel, px) => {
  try {
    execFileSync('sips', ['-Z', String(px), path.join(REPO, rel)], { stdio: 'ignore' });
  } catch {
    console.warn(`downscale skipped (no sips?): ${rel}`);
  }
};
downscale('public/img/tool/holy-lock.png', 900);
downscale('public/img/tool/holy-share.png', 900);
downscale('public/icon-512.png', 512);
downscale('public/icon-192.png', 192);
downscale('public/apple-touch-icon.png', 180);
downscale('public/favicon-32.png', 32);
for (const f of fs.readdirSync(path.join(REPO, 'public/img/family'))) {
  downscale(`public/img/family/${f}`, 180);
}
for (const file of ['instagram.png', 'facebook.png', 'twitter.png', 'whatsapp.png']) {
  downscale(`public/app/images/icons/${file}`, 104);
}

// ── 2b. Web delivery formats. Output is committed, so when a converter is
// missing on this machine the step warns and the repo keeps whatever was
// last generated; CI and fresh clones still build.

// Heavy art to webp (components reference the .webp paths). The category
// tiles render ~200 CSS px wide, so 480 is a comfortable 2x.
const toWebp = (rel, { px, quality = 82 } = {}) => {
  const src = path.join(REPO, rel);
  if (px) downscale(rel, px);
  try {
    execFileSync('cwebp', ['-quiet', '-q', String(quality), src, '-o', src.replace(/\.(png|jpg)$/, '.webp')]);
    fs.unlinkSync(src);
    const i = manifest.files.indexOf(rel);
    const webpRel = rel.replace(/\.(png|jpg)$/, '.webp');
    if (i === -1) manifest.files.push(webpRel);
    else manifest.files[i] = webpRel;
  } catch {
    // No converter: drop the fresh source copy when a committed .webp
    // already serves the path, so public/ never holds both.
    const webpRel = rel.replace(/\.(png|jpg)$/, '.webp');
    if (fs.existsSync(path.join(REPO, webpRel))) {
      fs.unlinkSync(src);
      const i = manifest.files.indexOf(rel);
      if (i !== -1) manifest.files[i] = webpRel;
      console.warn(`webp skipped (no cwebp?): kept committed ${webpRel}`);
    } else {
      // Components reference the .webp path — without a committed webp the
      // site would ship 404 images, so this is fatal, not a warning.
      console.error(`FATAL: cannot produce ${webpRel} and no committed copy exists (install cwebp).`);
      process.exit(1);
    }
  }
};
toWebp('public/img/tool/holy-lock.png', { quality: 86 });
toWebp('public/img/tool/holy-share.png', { quality: 86 });
for (const key of CATEGORY_KEYS) {
  toWebp(`public/app/images/backgrounds/categories_bg/${key}.jpg`, { px: 480 });
}
for (const key of THEME_BG_KEYS) {
  toWebp(`public/app/images/backgrounds/theme_bg/${key}.jpg`, {
    px: key === 'book' ? 900 : 480,
    quality: 86,
  });
}

// Fonts: subset TTF -> woff2, Latin + Latin-ext (every Latin-script locale
// incl. tr/pl); ja/ko glyphs come from the system stacks in global.css.
// Keep FONT_UNICODES in sync with the unicode-range in global.css.
const FONT_UNICODES =
  'U+0000-00FF,U+0100-024F,U+0259,U+02BB-02BC,U+02C6,U+02DA,U+02DC,' +
  'U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,' +
  'U+2000-206F,U+2074,U+20A0-20CF,U+2113,U+2122,U+2191,U+2193,U+2212,' +
  'U+2215,U+2C60-2C7F,U+A720-A7FF,U+FEFF,U+FFFD';
// Homebrew's fontTools ships without the brotli codec woff2 needs; the
// ~/.venvs/fonts venv (fonttools + brotli) is the working install on this
// machine. PYFTSUBSET overrides both.
const VENV_SUBSET = path.join(process.env.HOME ?? '', '.venvs/fonts/bin/pyftsubset');
const pyftsubset =
  process.env.PYFTSUBSET ?? (fs.existsSync(VENV_SUBSET) ? VENV_SUBSET : 'pyftsubset');
fs.mkdirSync(path.join(REPO, 'public/fonts'), { recursive: true });
for (const f of fs.readdirSync(FONT_CACHE)) {
  const dstRel = `public/fonts/${f.replace(/\.ttf$/, '.woff2')}`;
  try {
    execFileSync(pyftsubset, [
      path.join(FONT_CACHE, f),
      `--output-file=${path.join(REPO, dstRel)}`,
      '--flavor=woff2',
      '--layout-features=*',
      `--unicodes=${FONT_UNICODES}`,
    ], { stdio: 'ignore' });
    manifest.files.push(dstRel);
  } catch {
    console.warn(`font subset skipped (no pyftsubset? set PYFTSUBSET): kept ${dstRel}`);
  }
}

// ── 3. Generated per-locale data (tiny, so pages never fetch corpus) ──
const { LOCALE_COPY } = await import(
  pathToFileURL(path.join(COPY_DST, 'index.js')).href
);

// Full verse record { text, author? } by stable id: localized runtime
// corpus + localized Scripture citation, with English as a safety fallback.
function quote(locale, category, id) {
  const key = String(id);
  const localeKey = appLocale(locale);
  const contentRoot = path.join(APP_ASSETS, 'content');
  const own = readJson(path.join(contentRoot, localeKey, `${category}.json`))?.records?.[key];
  const en = readJson(path.join(contentRoot, 'en', `${category}.json`))?.records?.[key];
  const rawText = own ?? en;
  if (!rawText) return null;
  const citationKey = `${category}.${key}`;
  const ownCitation = readJson(
    path.join(contentRoot, localeKey, 'scripture-citations.json')
  )?.records?.[citationKey];
  const enCitation = readJson(
    path.join(contentRoot, 'en', 'scripture-citations.json')
  )?.records?.[citationKey];
  return {
    text: cleanScriptureForMarketing(rawText, locale),
    author: ownCitation ?? enCitation ?? null,
  };
}

const mustQuote = (locale, spec) => {
  const q = quote(locale, spec.category, spec.id);
  if (!q?.text) throw new Error(`quote unresolved for ${locale}: ${JSON.stringify(spec)}`);
  return q;
};

// Runtime UI strings deep-merged with any reviewed screenshot-copy overlay.
function deepMerge(base, over) {
  if (over == null) return base;
  if (Array.isArray(over) || Array.isArray(base)) return over;
  if (base == null || typeof over !== 'object' || typeof base !== 'object') return over;
  const out = { ...base };
  for (const [k, v] of Object.entries(over)) out[k] = deepMerge(base[k], v);
  return out;
}

const appTCache = {};
const appT = (locale) =>
  (appTCache[locale] ??= deepMerge(
    readJson(path.join(APP_ASSETS, `translations/runtime/${appLocale(locale)}.json`)) ?? {},
    LOCALE_COPY[locale]?.ui ?? null
  ));

function ui(locale, dotPath, fallback) {
  const v = dig(appT(locale), dotPath);
  if (typeof v === 'string') return v;
  const en = dig(appT('en'), dotPath);
  return typeof en === 'string' ? en : fallback;
}

// Hero cards: the notification cycler's payload.
const heroCards = {};
for (const [locale, copy] of Object.entries(LOCALE_COPY)) {
  heroCards[locale] = {
    appName: copy.ui?.app_name ?? appT(locale)?.app_name ?? 'Holy',
    whens: copy.reminders?.whens ?? LOCALE_COPY.en.reminders.whens,
    pill: mustQuote(locale, PILL_SPEC).text,
    cards: HERO_CARD_SPECS.map((spec) => mustQuote(locale, spec)),
  };
}
const genPath = path.join(REPO, 'src/data/generated/hero-cards.json');
fs.mkdirSync(path.dirname(genPath), { recursive: true });
fs.writeFileSync(genPath, JSON.stringify(heroCards, null, 2) + '\n');
manifest.files.push(path.relative(REPO, genPath));

// Per-locale section data: localized quotes + the app-UI strings the
// feature devices display.
const sections = {};
for (const locale of Object.keys(LOCALE_COPY)) {
  sections[locale] = {
    categoriesTitle: ui(locale, 'categories', 'Categories'),
    categories: CATEGORY_KEYS.map((key) => ({
      key,
      title: ui(locale, `${key}.title`, key),
    })),
    card: {
      quote: mustQuote(locale, QUOTE_CARD_SPEC),
      label: ui(locale, `${QUOTE_CARD_SPEC.category}.title`, 'Holy Verses'),
    },
    widgets: {
      medium: mustQuote(locale, WIDGET_SPECS.medium).text,
      smallDark: mustQuote(locale, WIDGET_SPECS.smallDark).text,
      smallPink: mustQuote(locale, WIDGET_SPECS.smallPink).text,
      medium2: mustQuote(locale, WIDGET_SPECS.medium2).text,
    },
    themes: {
      title: ui(locale, 'themes', 'Choose your art'),
      make: ui(locale, 'make_theme', 'Create custom theme'),
    },
    share: {
      quote: mustQuote(locale, SHARE_SPEC),
      story: ui(locale, 'share.story', 'Story'),
      square: ui(locale, 'share.square', 'Square'),
      save: ui(locale, 'share.save_image', 'Save image'),
      copy: ui(locale, 'share.copy_text', 'Copy text'),
      more: ui(locale, 'share.more', 'More'),
    },
    myown: {
      title: ui(locale, 'my_own.title', 'My Verses'),
      add: ui(locale, 'my_own.add', 'Add'),
      dialogTitle: ui(locale, 'my_own.add_dialog_title', 'Add a new verse'),
      save: ui(locale, 'my_own.save', 'Save'),
    },
    practice: {
      quote: mustQuote(locale, PRACTICE_SPEC),
      day: ui(locale, 'magic_center.practice.day', 'Day'),
      night: ui(locale, 'magic_center.practice.night', 'Night'),
    },
    dark: { quote: mustQuote(locale, DARK_SPEC) },
    bands: BAND_SPECS.map((spec) => mustQuote(locale, spec)),
  };
}
const sectionsPath = path.join(REPO, 'src/data/generated/sections.json');
fs.writeFileSync(sectionsPath, JSON.stringify(sections, null, 2) + '\n');
manifest.files.push(path.relative(REPO, sectionsPath));

// ── 4. Localized OG art from the studio exports: each locale's Play
// feature graphic is its og:image, and a real store screenshot feeds the
// MobileApplication schema (downscaled; crawlers are the only audience). ──
const EXPORTS = path.join(STUDIO, 'exports');
for (const locale of Object.keys(LOCALE_COPY)) {
  copyFile(
    path.join(EXPORTS, `play-feature/${locale}/01-feature.png`),
    path.join(REPO, `public/og/${locale}.png`)
  );
  const shots = fs.readdirSync(path.join(EXPORTS, `apple-6.9/${locale}`)).sort();
  copyFile(
    path.join(EXPORTS, `apple-6.9/${locale}`, shots[0]),
    path.join(REPO, `public/og/screenshot-${locale}.png`)
  );
  downscale(`public/og/screenshot-${locale}.png`, 1200);
}

fs.writeFileSync(
  path.join(REPO, 'sync-manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n'
);
console.log(`synced ${manifest.files.length} files from studio + app`);
