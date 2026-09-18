// One copy module per locale, all sharing the same nested shape (en.js is
// the reference). Adding a language = adding one file here + one import.
import en from './en.js';
import es from './es.js';
import pt from './pt.js';
import de from './de.js';
import fr from './fr.js';
import it from './it.js';
import ja from './ja.js';
import ko from './ko.js';
import id from './id.js';
import tr from './tr.js';
import pl from './pl.js';
import fil from './fil.js';
import hi from './hi.js';
import ro from './ro.js';
import nl from './nl.js';
import cs from './cs.js';
import hr from './hr.js';
import hu from './hu.js';
import sl from './sl.js';
import sv from './sv.js';
import nb from './nb.js';

// Order = export order. Locale codes match the store upload mapping; `pt`
// carries pt-BR content (the app's assets/content/pt-BR) per the l10n
// program. Locale Wave 2 (LW8) appends the ten new app locales under their
// app codes; nb ships to the stores as no / no-NO.
export const LOCALE_COPY = {
  en, es, pt, de, fr, it, ja, ko, id, tr, pl,
  fil, hi, ro, nl, cs, hr, hu, sl, sv, nb,
};

const dig = (obj, path) =>
  path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

/// Builds the multi-locale text spec resolveText() already understands:
/// t('hook.hero') → { en: '…', es: '…', pt: '…', … }
export const t = (path) => {
  const out = {};
  for (const [locale, copy] of Object.entries(LOCALE_COPY)) {
    const v = dig(copy, path);
    if (typeof v === 'string') out[locale] = v;
  }
  if (out.en == null) throw new Error(`copy path missing in en: ${path}`);
  return out;
};

/// Optional tool-side UI overrides. Holy already ships all 21 target
/// locales, so the screenshot copy modules normally leave this empty.
export const uiOverlay = (locale) => LOCALE_COPY[locale]?.ui ?? null;

/// Optional content-body overrides keyed '<category>.<id>'. The app's
/// localized content always wins when the requested record exists.
export const quoteOverlay = (locale) => LOCALE_COPY[locale]?.quotes ?? null;
