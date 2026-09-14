import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// GitHub Pages serves a project (non-custom-domain) site under /<repo-name>/, so every
// asset URL and route link needs that prefix baked in. Set BASE_PATH="/" at build time
// instead if this ever moves to a custom domain or a `<user>.github.io` root pages repo.
const basePath = process.env.BASE_PATH ?? '/DanceUnitedWeb/'

export default defineConfig({
  base: basePath,
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      // Docker Desktop on Windows doesn't forward inotify events across the bind mount,
      // so without polling, file edits on the host never trigger HMR inside the container.
      usePolling: true,
      interval: 300,
    },
  },
})
