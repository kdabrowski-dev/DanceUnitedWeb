# Dance United - Marketing Site

A fully static marketing site for Dance United - no server, no database, no login. Built with
React Router v7 in prerendered/SPA mode and deployed as plain HTML/CSS/JS, meant to be hosted on
GitHub Pages.

> The full application (accounts, bookings, admin panel, etc.) lives in a separate repo:
> [DanceUnitedFull](https://github.com/kdabrowski-dev/DanceUnitedFull). This repo only ever
> contains the public marketing site.

## Editing content

Everything that would normally come from a database is instead a plain data file under
`packages/app/src/content/`. Edit these directly and redeploy - there's no admin panel:

- `content/schedule.ts` - the weekly class schedule shown on `/schedule`
- `content/pricing.ts` - the pricing packages shown on `/pricing`
- `content/team.ts` - the trainers shown on `/team`

Photos live under `packages/app/public/`:

- `public/img/` - homepage hero images, founder photo
- `public/trainers/` - trainer headshots (referenced from `content/team.ts`)
- `public/gallery/<camps|classes|tournaments|studio>/` - drop a `.webp` file in here and it
  shows up on `/gallery` automatically, no code change needed
- `public/logos/` - site logo

Non-webp photos (`.png`/`.jpg`) can be converted in place with:

```bash
pnpm --filter app convert-images
```

Everything else (About, Contact info, Terms, Privacy) is plain JSX in
`packages/app/src/routes/*.tsx` - edit the text directly.

## Local development

```bash
pnpm install
pnpm --filter app dev
```

Or via Docker:

```bash
pnpm dev
```

## Building for deployment

```bash
pnpm --filter app build
```

Output goes to `packages/app/build/client/` - upload that folder as-is to any static host.

### GitHub Pages base path

GitHub Pages serves a project site (this repo, without a custom domain) under
`/DanceUnitedWeb/`, so every asset and route link is built with that prefix baked in by default.
If you set up a custom domain or move this to a `<user>.github.io` root pages repo, build with:

```bash
BASE_PATH=/ pnpm --filter app build
```

Pushing to `main` deploys automatically via `.github/workflows/deploy-pages.yml`, which reads the
same `BASE_PATH` convention (override it with a `BASE_PATH` repository variable if needed).
