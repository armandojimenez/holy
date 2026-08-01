// Landing i18n glue. The deck's reviewed copy modules (synced into
// src/data/copy from ~/development/tools/holy-screenshots) are the shared
// source of truth; landing-only strings live in src/i18n/<locale>.mjs and
// follow the same authoring rules (reader's-companion register per brief,
// no em dashes, gender-neutral user voice, brand never translated).

import { LOCALE_COPY } from '../data/copy/index.js';
import { BASE } from '../config.mjs';
import en from './en.mjs';
import es from './es.mjs';
import pt from './pt.mjs';
import de from './de.mjs';
import fr from './fr.mjs';
import it from './it.mjs';
import ja from './ja.mjs';
import ko from './ko.mjs';
import id from './id.mjs';
import tr from './tr.mjs';
import pl from './pl.mjs';

const LANDING = { en, es, pt, de, fr, it, ja, ko, id, tr, pl };

export const LOCALES = Object.keys(LOCALE_COPY); // en es pt de fr it ja ko id tr pl

// THE LAUNCH GATE (HX8): a locale's page publishes only once the shipped
// app actually speaks that language — the mockups show real in-app content,
// and marketing a language the download can't deliver breaks the honesty
// rule. This list drives everything: routes, hreflang cluster, og
// alternates, language selector/sheet/footer lists, the first-visit banner,
// and the schema's inLanguage claim.
// TO FLIP A LOCALE LIVE — the closing reminder of each language's GX9
// publishing step, done ONLY after that language's app update is approved
// and rolling out on the stores: add it here AND to the sitemap i18n map in
// astro.config.mjs (kept in sync by hand — the config can't import this
// file), run scripts/qa-sweep.mjs, deploy.
export const PUBLISHED_LOCALES = [
  'en',
  'es',
  'pt',
  'de',
  'fr',
  'it',
  'ja',
  'ko',
  'id',
  'tr',
  'pl',
];

// The first-visit language banner shows the VISITOR'S language, so every
// page inlines this tiny map (3 short strings per locale).
export const LANG_BANNERS = Object.fromEntries(
  Object.entries(LANDING).map(([l, s]) => [l, s.langBanner])
);

// hreflang / og:locale values per app-style folder code (pt carries pt-BR).
export const HREFLANG = {
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
  de: 'de',
  fr: 'fr',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  id: 'id',
  tr: 'tr',
  pl: 'pl',
};

// og:locale wants territory-qualified codes.
export const OG_LOCALE = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
  ja: 'ja_JP',
  ko: 'ko_KR',
  id: 'id_ID',
  tr: 'tr_TR',
  pl: 'pl_PL',
};

// Language names in their own language, for the selector + footer links.
export const ENDONYMS = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  id: 'Bahasa Indonesia',
  tr: 'Türkçe',
  pl: 'Polski',
};

/// Deck copy module for a locale (heroes, whens, myown rows...).
export const deck = (locale) => LOCALE_COPY[locale] ?? LOCALE_COPY.en;

/// Landing-only strings; en until the localization session lands the rest.
export const landing = (locale) => LANDING[locale] ?? LANDING.en;

/// Joining multi-line deck strings into prose (ja has no word spaces).
export const joiner = (locale) => (locale === 'ja' ? '' : ' ');

/// Site-relative URL of a page in a locale ('' path = home). Includes the
/// GitHub Pages project base, so it is valid as an href everywhere.
export const localeUrl = (locale, path = '') =>
  locale === 'en' ? `${BASE}/${path}` : `${BASE}/${locale}/${path}`;
