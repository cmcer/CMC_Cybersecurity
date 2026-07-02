/**
 * Vite's configured `base` (e.g. '/' at a domain root, or '/cmc-cybersecurity/'
 * on GitHub Pages). Vite always guarantees a trailing slash here.
 */
const BASE_URL = import.meta.env.BASE_URL;

/**
 * Prefix an absolute app-root asset path (e.g. '/images/foo.jpg') with the
 * configured base, so images/fonts/etc. resolve correctly regardless of
 * whether the app is served from a domain root or a GitHub Pages subpath.
 */
export function withBase(path: string): string {
  const rel = path.replace(/^\/+/, '');
  return BASE_URL + rel;
}
