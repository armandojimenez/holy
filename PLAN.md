# Holy landing (HX8) working spec

Static Astro site for `https://armandojimenez.dev/holy/`, built from the
approved Holy HX7 screenshot system and the interaction rhythm of the Motiv
landing. All screens, verses, citations, colors, icons and marketing copy are
Holy-native.

## Scope

- GitHub Pages project base: `/holy`
- Published locale routes: `en`, `es`, `pt-BR`, `de`, `fr`, `it`, `ja`, `ko`,
  `id`, `tr`, `pl`
- Real localized runtime Scripture content and citations from `holy_app`
- Approved HX7 headlines, app screens, animations and family proof
- Canonical App Store and Google Play links for Holy
- Canonical legal links, with Spanish pages for `es` and the approved English
  fallback for the other translated routes
- Direct support email with copy-to-clipboard confirmation

## Migration topology

1. Build and owner-review this `/holy` project locally.
2. After approval, create/publish the public `armandojimenez/holy` repository.
3. Convert `armandojimenez/holy_landing` to lightweight redirect stubs:
   `/holy_landing/` to `/holy/`, and legacy legal paths to their canonical
   `/apps/holy/` destinations. Preserve query strings and fragments.
4. Keep the legacy project online as a compatibility layer for shipped app
   versions and old links.
5. Update future app builds to use `/holy/` as the website URL.

## Release gate

Nothing is deployed until the owner approves desktop and mobile renders. Before
publishing: run the Astro build, the all-locale QA sweep, link/SEO validators,
independent design/copy/conversion reviews and legacy redirect checks.
