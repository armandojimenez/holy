// THE LAUNCH GATE (HX8): a locale's page publishes only once the shipped
// app actually speaks that language — the mockups show real in-app content,
// and marketing a language the download can't deliver breaks the honesty
// rule. This list drives everything: routes, hreflang cluster, og
// alternates, language selector/sheet/footer lists, the first-visit banner,
// the schema's inLanguage claim, and the FAQ's list of languages.
// TO FLIP A LOCALE LIVE — done ONLY after that language's app update is
// approved and rolling out on the stores: add it here AND to the sitemap i18n
// map in astro.config.mjs (kept in sync by hand — the config can't import
// this file), run scripts/qa-sweep.mjs, deploy. Wave 2 (fil hi ro nl cs hr hu
// sl sv nb) flips at LW10.
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
