// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages project site under the user domain: the repo name IS the
  // path. BASE in src/config.mjs mirrors `base` here — change both together.
  site: 'https://armandojimenez.dev',
  base: '/holy',
  output: 'static',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      // Emits xhtml:link alternates per published locale folder (en at
      // /holy/, the rest at /holy/<locale>/). KEEP IN SYNC WITH
      // PUBLISHED_LOCALES in src/i18n/index.mjs — a locale flips live in
      // both places when its app update ships (full 21-locale map: pt is
      // pt-BR, rest map to themselves).
      i18n: {
        defaultLocale: 'en',
        locales: {
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
        },
      },
    }),
  ],
});
