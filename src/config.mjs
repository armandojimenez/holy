// Store + social endpoints, one place.

// GitHub Pages project-site path — mirrors `base` in astro.config.mjs.
// Every root-relative URL on the site goes through asset() / localeUrl()
// so the base lives in exactly two files.
export const BASE = '/holy';
export const asset = (path) => `${BASE}${path}`;

export const SITE_NAME = 'Holy';
export const APP_NAME = 'Holy - Daily Bible Verses';

// Shown on the proof strip. Keep the storefront values separate and verify
// them again immediately before deployment. Rating totals intentionally do
// not appear in JSON-LD because each store reports its own attributed count.
export const RATING = { ios: '4.9', android: '4.9' };

export const APP_STORE_ID = '1622726073';
export const APP_STORE_URL =
  'https://apps.apple.com/app/holy-daily-bible-verses/id1622726073';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=dev.armandojimenez.holy';

// Store links carry the page language as a display hint. On phones both
// native stores ignore the URL's locale and open the user's own storefront
// in the device language, so conversion always auto-routes; these params
// only shape the WEB view (desktop, or in-browser previews). Play takes hl;
// the App Store takes l on top of its geo-picked storefront (verified for
// the Believe landing 2026-07; same mechanics).
const PLAY_HL = {
  en: 'en',
  es: 'es',
  pt: 'pt_BR',
  de: 'de',
  fr: 'fr',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  id: 'id',
  tr: 'tr',
  pl: 'pl',
};
const APPLE_L = {
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
export const storeUrls = (locale) => ({
  ios: APPLE_L[locale] ? `${APP_STORE_URL}?l=${APPLE_L[locale]}` : APP_STORE_URL,
  android: `${PLAY_STORE_URL}&hl=${PLAY_HL[locale] ?? 'en'}`,
});

export const INSTAGRAM_URL = 'https://www.instagram.com/holydailybibleverses';
export const FACEBOOK_URL = 'https://www.facebook.com/holydailybibleverses';
export const HELP_EMAIL = 'helpholy@believeaffirmations.com';

const LEGAL = {
  en: {
    privacy: 'https://armandojimenez.dev/apps/holy/privacy-policy.html',
    terms: 'https://armandojimenez.dev/apps/holy/terms.html',
  },
  es: {
    privacy: 'https://armandojimenez.dev/apps/holy/privacy-policy-es.html',
    terms: 'https://armandojimenez.dev/apps/holy/terms-es.html',
  },
};

// HX8A owner-approved English fallback for locales without a translated
// policy page. Spanish uses the reviewed es-419 pages.
export const legalUrls = (locale) => LEGAL[locale] ?? LEGAL.en;
