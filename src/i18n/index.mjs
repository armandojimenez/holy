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
import fil from './fil.mjs';
import hi from './hi.mjs';
import ro from './ro.mjs';
import nl from './nl.mjs';
import cs from './cs.mjs';
import hr from './hr.mjs';
import hu from './hu.mjs';
import sl from './sl.mjs';
import sv from './sv.mjs';
import nb from './nb.mjs';

const LANDING = { en, es, pt, de, fr, it, ja, ko, id, tr, pl, fil, hi, ro, nl, cs, hr, hu, sl, sv, nb };

export const LOCALES = Object.keys(LOCALE_COPY); // Wave 1 (11) + Wave 2 (10)

export { PUBLISHED_LOCALES } from './published.mjs';

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
  fil: 'fil',
  hi: 'hi',
  ro: 'ro',
  nl: 'nl',
  cs: 'cs',
  hr: 'hr',
  hu: 'hu',
  sl: 'sl',
  sv: 'sv',
  nb: 'nb',
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
  fil: 'fil_PH',
  hi: 'hi_IN',
  ro: 'ro_RO',
  nl: 'nl_NL',
  cs: 'cs_CZ',
  hr: 'hr_HR',
  hu: 'hu_HU',
  sl: 'sl_SI',
  sv: 'sv_SE',
  nb: 'nb_NO',
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
  fil: 'Filipino',
  hi: 'हिन्दी',
  ro: 'Română',
  nl: 'Nederlands',
  cs: 'Čeština',
  hr: 'Hrvatski',
  hu: 'Magyar',
  sl: 'Slovenščina',
  sv: 'Svenska',
  nb: 'Norsk',
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
