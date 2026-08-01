// JSON-LD builders. Pages assemble their graph from these and hand it to
// Base via the `schemas` prop. Every claim here must match what the page
// visibly shows. Store ratings deliberately stay out of this graph: Apple
// and Google expose separate totals, so combining them would misattribute
// the source. The FAQPage mirrors the rendered FAQ.
import {
  APP_NAME,
  SITE_NAME,
  APP_STORE_URL,
  PLAY_STORE_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from '../config.mjs';
import { HREFLANG, PUBLISHED_LOCALES } from '../i18n/index.mjs';

const SITE = 'https://armandojimenez.dev/holy';
export const ORG_ID = `${SITE}/#organization`;
export const APP_ID = `${SITE}/#app`;

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE}/`,
  logo: `${SITE}/icon-512.png`,
  founder: { '@type': 'Person', name: 'Armando Jiménez' },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL, APP_STORE_URL, PLAY_STORE_URL],
});

export const mobileApp = ({ description, url, image, screenshot }) => ({
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': APP_ID,
  name: APP_NAME,
  description,
  url,
  image,
  operatingSystem: 'iOS, iPadOS, Android',
  // Matches Holy's current Apple "Reference" and Google "Books &
  // Reference" categories; Lifestyle remains its secondary Apple category.
  applicationCategory: 'ReferenceApplication',
  installUrl: [APP_STORE_URL, PLAY_STORE_URL],
  downloadUrl: [APP_STORE_URL, PLAY_STORE_URL],
  // A real App Store screenshot (studio export), not the og banner.
  screenshot: screenshot ?? `${SITE}/og/screenshot-en.png`,
  sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  // The app's true language list: only locales the shipped app supports.
  inLanguage: PUBLISHED_LOCALES.map((l) => HREFLANG[l]),
  author: { '@id': ORG_ID },
});

export const webSite = ({ url }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url,
  publisher: { '@id': ORG_ID },
});

export const faqPage = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
