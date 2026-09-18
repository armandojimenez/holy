import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { APP_STORE_URL, PLAY_STORE_URL } from '../src/config.mjs';
import { PUBLISHED_LOCALES } from '../src/i18n/published.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const DIST = path.join(REPO, 'dist');
const LEGACY = path.resolve(REPO, '../../landings/holy_landing');
// Every published locale, so the gate grows with the launch gate.
const locales = PUBLISHED_LOCALES;
const errors = [];
const fail = (message) => errors.push(message);
const descriptions = [];

const sections = JSON.parse(
  fs.readFileSync(path.join(REPO, 'src/data/generated/sections.json'), 'utf8')
);
const scriptureArtifacts = [];
const inspectStrings = (value, trail = []) => {
  if (typeof value === 'string') {
    if (
      /^\(.*\)[.,;]?$/u.test(value) ||
      /^[‘'“"].*[’'”"]$/u.test(value) ||
      /\[[^\]]+\]/u.test(value) ||
      /[;,]\s*$/u.test(value)
    ) {
      scriptureArtifacts.push(`${trail.join('.')}: ${value}`);
    }
    return;
  }
  if (Array.isArray(value)) value.forEach((item, index) => inspectStrings(item, [...trail, index]));
  else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) inspectStrings(item, [...trail, key]);
  }
};
inspectStrings(sections);
for (const artifact of scriptureArtifacts) fail(`scripture presentation artifact: ${artifact}`);

const routeFile = (locale) => locale === 'en'
  ? path.join(DIST, 'index.html')
  : path.join(DIST, locale, 'index.html');
const assetFile = (url) => {
  const pathname = new URL(url, 'https://armandojimenez.dev').pathname;
  if (!pathname.startsWith('/holy/')) return null;
  const rel = decodeURIComponent(pathname.slice('/holy/'.length));
  const direct = path.join(DIST, rel);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  const index = path.join(direct, 'index.html');
  return fs.existsSync(index) ? index : null;
};

for (const locale of locales) {
  const file = routeFile(locale);
  if (!fs.existsSync(file)) {
    fail(`${locale}: missing route`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const expectedCanonical = locale === 'en'
    ? 'https://armandojimenez.dev/holy/'
    : `https://armandojimenez.dev/holy/${locale}/`;
  const expectedLang = locale === 'pt' ? 'pt-BR' : locale;
  if (!html.includes(`<html lang="${expectedLang}"`)) fail(`${locale}: html lang`);

  const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)].map((m) => m[1]);
  if (titles.length !== 1) fail(`${locale}: expected one title, found ${titles.length}`);
  const title = titles[0] ?? '';
  if ([...title].length > 60) fail(`${locale}: title exceeds 60 characters`);

  const descriptionMatches = [...html.matchAll(/<meta name="description" content="([^"]+)"/g)];
  if (descriptionMatches.length !== 1) {
    fail(`${locale}: expected one description, found ${descriptionMatches.length}`);
  }
  const description = descriptionMatches[0]?.[1] ?? '';
  descriptions.push(description);
  const descriptionLength = [...description].length;
  const [descriptionMin, descriptionMax] = ['ja', 'ko'].includes(locale)
    ? [45, 100]
    : [140, 160];
  if (descriptionLength < descriptionMin || descriptionLength > descriptionMax) {
    fail(`${locale}: description length ${descriptionLength}, expected ${descriptionMin}-${descriptionMax}`);
  }

  const canonicalLinks = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  if (canonicalLinks.length !== 1 || canonicalLinks[0][1] !== expectedCanonical) {
    fail(`${locale}: canonical`);
  }
  const h1s = [...html.matchAll(/<h1(?:\s|>)/g)];
  if (h1s.length !== 1) fail(`${locale}: expected one h1, found ${h1s.length}`);
  const headingLevels = [...html.matchAll(/<h([1-6])(?:\s|>)/g)].map((m) => Number(m[1]));
  for (let i = 1; i < headingLevels.length; i += 1) {
    if (headingLevels[i] > headingLevels[i - 1] + 1) {
      fail(`${locale}: skipped heading level h${headingLevels[i - 1]} to h${headingLevels[i]}`);
    }
  }

  const requiredHead = [
    ['property', 'og:title'],
    ['property', 'og:description'],
    ['property', 'og:type'],
    ['property', 'og:url'],
    ['property', 'og:image'],
    ['property', 'og:image:width'],
    ['property', 'og:image:height'],
    ['name', 'twitter:card'],
    ['name', 'twitter:title'],
    ['name', 'twitter:description'],
    ['name', 'twitter:image'],
    ['name', 'theme-color'],
    ['name', 'viewport'],
  ];
  for (const [attribute, key] of requiredHead) {
    if (!html.includes(`<meta ${attribute}="${key}"`)) fail(`${locale}: missing ${key}`);
  }
  if (!html.includes(`<meta property="og:url" content="${expectedCanonical}"`)) fail(`${locale}: og:url`);
  if (!html.includes('<meta property="og:type" content="website"')) fail(`${locale}: og:type`);
  if (!html.includes('<meta name="twitter:card" content="summary_large_image"')) fail(`${locale}: twitter:card`);

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    if (!/\salt="[^"]*"/.test(tag)) fail(`${locale}: img missing alt: ${tag.slice(0, 100)}`);
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) {
      fail(`${locale}: img missing dimensions: ${tag.slice(0, 100)}`);
    }
  }

  const schemaBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const schemas = [];
  for (const [, json] of schemaBlocks) {
    try {
      schemas.push(JSON.parse(json));
    } catch (error) {
      fail(`${locale}: invalid JSON-LD (${error.message})`);
    }
  }
  const appSchemas = schemas.filter((schema) => schema['@type'] === 'MobileApplication');
  if (appSchemas.length !== 1) fail(`${locale}: expected one MobileApplication, found ${appSchemas.length}`);
  const app = appSchemas[0];
  if (app) {
    for (const key of ['name', 'description', 'url', 'image', 'operatingSystem', 'applicationCategory', 'offers', 'downloadUrl', 'screenshot']) {
      if (!app[key]) fail(`${locale}: MobileApplication missing ${key}`);
    }
    if (app.url !== expectedCanonical) fail(`${locale}: MobileApplication url`);
    if (app.applicationCategory !== 'ReferenceApplication') fail(`${locale}: MobileApplication category`);
    if (String(app.offers?.price) !== '0') fail(`${locale}: MobileApplication free offer`);
    if (!Array.isArray(app.downloadUrl) || !app.downloadUrl.includes(APP_STORE_URL) || !app.downloadUrl.includes(PLAY_STORE_URL)) {
      fail(`${locale}: MobileApplication downloadUrl`);
    }
    if ('aggregateRating' in app || 'review' in app) fail(`${locale}: unattributed rating/review schema`);
    for (const key of ['url', 'image', 'screenshot']) {
      if (!String(app[key] ?? '').startsWith('https://')) fail(`${locale}: MobileApplication ${key} must be absolute`);
    }
  }
  if (!html.includes(`href="${APP_STORE_URL}`)) fail(`${locale}: crawlable App Store link`);
  if (!html.includes(`href="${PLAY_STORE_URL}`)) fail(`${locale}: crawlable Google Play link`);
  if (html.includes('/motiv/')) fail(`${locale}: stale /motiv/ URL`);
  for (const code of [...locales, 'x-default']) {
    const hreflang = code === 'pt' ? 'pt-BR' : code;
    if (!html.includes(`hreflang="${hreflang}"`)) fail(`${locale}: missing hreflang ${hreflang}`);
  }
  const attrs = html.matchAll(/(?:href|src)="([^"]+)"/g);
  for (const [, url] of attrs) {
    if (url.startsWith('/holy/') && !assetFile(url)) fail(`${locale}: missing internal target ${url}`);
  }
}

if (new Set(descriptions).size !== descriptions.length) fail('meta descriptions must be unique by locale');

const sitemap = fs.readFileSync(path.join(DIST, 'sitemap-0.xml'), 'utf8');
const sitemapIndex = fs.readFileSync(path.join(DIST, 'sitemap-index.xml'), 'utf8');
const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
if (!sitemapIndex.includes('https://armandojimenez.dev/holy/sitemap-0.xml')) fail('sitemap index target');
if (!robots.includes('User-agent: *') || !robots.includes('Allow: /')) fail('robots crawl policy');
if (!robots.includes('Sitemap: https://armandojimenez.dev/holy/sitemap-index.xml')) fail('robots sitemap target');
for (const locale of locales) {
  const url = locale === 'en'
    ? 'https://armandojimenez.dev/holy/'
    : `https://armandojimenez.dev/holy/${locale}/`;
  if (!sitemap.includes(url)) fail(`sitemap: missing ${locale}`);
}

const redirects = [
  ['index.html', 'https://armandojimenez.dev/holy/'],
  ['terms/holy-terms.html', 'https://armandojimenez.dev/apps/holy/terms.html'],
  ['404.html', 'https://armandojimenez.dev/holy/'],
];
for (const [rel, destination] of redirects) {
  const file = path.join(LEGACY, rel);
  if (!fs.existsSync(file)) fail(`legacy: missing ${rel}`);
  else {
    const html = fs.readFileSync(file, 'utf8');
    if (!html.includes(destination)) fail(`legacy: ${rel} destination`);
    if (!html.includes('location.replace')) fail(`legacy: ${rel} location.replace`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`validated ${locales.length} localized routes, internal assets, sitemap and legacy redirects`);
