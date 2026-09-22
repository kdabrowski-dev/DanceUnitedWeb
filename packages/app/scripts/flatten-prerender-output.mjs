// react-router's prerender step writes prerendered pages nested under `basename`
// (build/client/<basename>/about/index.html) so the *content* of every page already
// links correctly to that basename. But Vite's static `public/` copy and the JS/CSS
// bundles it emits are basename-agnostic and land flat at build/client/. GitHub Pages
// (and most static hosts) serve one flat artifact, so this merges the nested folder
// back up to build/client/ after every build - the two halves need to live side by side.
import fs from 'node:fs'
import path from 'node:path'

const basePath = process.env.BASE_PATH ?? '/DanceUnitedWeb/'
const trimmed = basePath.replace(/^\/+|\/+$/g, '')

if (!trimmed) {
  process.exit(0) // Serving from the domain root - nothing was nested.
}

const clientDir = path.join(process.cwd(), 'build', 'client')
const nestedDir = path.join(clientDir, trimmed)

if (!fs.existsSync(nestedDir)) {
  process.exit(0)
}

function mergeUp(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      mergeUp(from, to)
    } else {
      fs.renameSync(from, to)
    }
  }
}

mergeUp(nestedDir, clientDir)
fs.rmSync(nestedDir, { recursive: true, force: true })
