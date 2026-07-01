import { ui, defaultLang, type Lang, type UIKey } from './ui';

/**
 * Astro's configured `base` (e.g. '/' at a domain root, or '/cmc-cybersecurity'
 * when deployed as a GitHub Pages project site). May or may not have a trailing
 * slash depending on how `base` was set — normalize both directions below.
 */
const RAW_BASE = import.meta.env.BASE_URL;
const BASE_NO_TRAILING = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;
const BASE_WITH_TRAILING = BASE_NO_TRAILING === '' ? '/' : `${BASE_NO_TRAILING}/`;

/** Remove the configured base prefix from a pathname, e.g. for lang/route parsing. */
export function stripBase(pathname: string): string {
  if (BASE_NO_TRAILING && pathname.startsWith(BASE_NO_TRAILING)) {
    const rest = pathname.slice(BASE_NO_TRAILING.length);
    return rest === '' ? '/' : rest;
  }
  return pathname;
}

/** Prefix an absolute app-root path (e.g. '/images/foo.jpg') with the configured base. */
export function withBase(path: string): string {
  const rel = path.replace(/^\/+/, '');
  return BASE_WITH_TRAILING + rel;
}

/** Detect language from a URL pathname (e.g. /en/services -> 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = stripBase(url.pathname).split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

/** Returns a translator bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a localized, base-aware path. VI is the default locale (no prefix);
 * EN is prefixed with /en.
 *   localePath('/services', 'vi') -> '/services' (or '/base/services')
 *   localePath('/services', 'en') -> '/en/services' (or '/base/en/services')
 */
export function localePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '');
  const localized = lang === 'en' ? (clean === '/' ? '/en/' : `/en${clean}`) : clean;
  return withBase(localized);
}

/** Swap the current path to the other language, preserving the page. */
export function alternatePath(url: URL, target: Lang): string {
  let path = stripBase(url.pathname);
  if (path.startsWith('/en')) path = path.slice(3) || '/';
  return localePath(path, target);
}
