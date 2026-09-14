/**
 * Prefixes a root-relative static asset path (e.g. "/img/hero-1.webp") with the
 * configured base path (see vite.config.ts / react-router.config.ts BASE_PATH).
 *
 * Needed because GitHub Pages project sites are served under /<repo-name>/, but a plain
 * `src="/img/x.webp"` always resolves against the domain root - only react-router's own
 * <Link>/routes pick up the basename automatically. Use this for every hardcoded image,
 * favicon, or other public/ asset path.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}
