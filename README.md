# Markus Hunsalz — personal website

A minimal personal website built with Astro, TypeScript, and UnoCSS.
Visit [hunsalz.de](https://hunsalz.de).

## Development

Use Node.js 24 (minimum supported version: 22.23.4).

```sh
npm ci
npm run dev
```

```sh
npm run check    # lint, Astro type checks, and production build
npm run preview  # serve the production build locally
npm run format   # format source files
```

Commit `package-lock.json` with dependency changes. CI and deployment builds use
`npm ci` to install the reviewed dependency versions.

The `minimatch@^10` override pins lint tooling to 11.0.1 to fix
[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
Remove the override once ESLint and TypeScript ESLint accept a patched version.

## Validation and deployments

[![Validation](https://github.com/hunsalz/hunsalz.de/actions/workflows/ci.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/ci.yaml)
[![GitHub Pages](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml)
[![IONOS](https://github.com/hunsalz/hunsalz.de/actions/workflows/hunsalz.de-orchestration.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/hunsalz.de-orchestration.yaml)
[![Netlify](https://api.netlify.com/api/v1/badges/337fbe9c-ddb6-4757-97e9-a974035e8955/deploy-status)](https://app.netlify.com/projects/hunsalz-de/deploys)

- Pull requests to `main` run lint, Astro type checks, and a production build.
- GitHub Pages publishes the exact artifact produced by validation on `main`.
- IONOS runs the same checks before uploading its deployment artifact.
- [Vercel deployment status](https://vercel.com/markus-hunsalzs-projects/hunsalz-de) is available in the dashboard; no static success badge is used.

The `gh-pages` branch contains the generated static site, without source dependencies.
Astro copies `public/vercel.json` to the build output so Vercel serves this branch
directly, skipping dependency installation and a second Astro build.

## Online editors

- [StackBlitz](https://stackblitz.com/github/hunsalz/hunsalz.de)
- [CodeSandbox](https://codesandbox.io/p/github/hunsalz/hunsalz.de/main)
- [GitHub Codespaces](https://codespaces.new/hunsalz/hunsalz.de)
