import type { Config } from '@react-router/dev/config'

// This branch is a static-only marketing site: no server, no database, nothing dynamic
// at request time. `ssr: false` builds a plain SPA bundle, and `prerender: true` additionally
// renders every route to static HTML at build time (in build/client) so it works with zero
// JS too and can be hosted as-is on GitHub Pages.
// Must match vite.config.ts's `base` (both default from the same BASE_PATH env var) - this
// is what makes client-side <Link> navigation resolve to the right URL once deployed.
const basePath = process.env.BASE_PATH ?? '/DanceUnitedWeb/'

export default {
  ssr: false,
  prerender: true,
  appDirectory: './src',
  basename: basePath,
} satisfies Config
