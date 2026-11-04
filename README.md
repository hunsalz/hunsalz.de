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

This repository compares independent build and deployment pipelines across providers.
Each provider builds from the source on `main`, using the committed lockfile; build
output is not shared between providers.

[![Validation](https://github.com/hunsalz/hunsalz.de/actions/workflows/ci.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/ci.yaml)
[![GitHub Pages](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml)
[![IONOS](https://github.com/hunsalz/hunsalz.de/actions/workflows/hunsalz.de-orchestration.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/hunsalz.de-orchestration.yaml)
[![Netlify](https://api.netlify.com/api/v1/badges/337fbe9c-ddb6-4757-97e9-a974035e8955/deploy-status)](https://app.netlify.com/projects/hunsalz-de/deploys)

- Pull requests to `main` run lint, Astro type checks, and a production build.
- GitHub Pages publishes the exact artifact produced by validation on `main`.
- IONOS runs the same checks before uploading its deployment artifact.
- Vercel independently installs dependencies with `npm ci`, runs `npm run build`,
  and publishes `dist` from its own source checkout. The root `vercel.json` records
  these settings. [Deployment status](https://vercel.com/markus-hunsalzs-projects/hunsalz-de)
  is available in the dashboard.
- Netlify also builds from its own source checkout using its provider configuration.

The `gh-pages` branch is generated output for GitHub Pages only. Vercel deployments
are disabled on this branch: `public/vercel.json` is copied into the generated site
with `git.deploymentEnabled: false`. Source branches continue to receive independent
Vercel builds and previews using the root configuration.

## Online editors

- [StackBlitz](https://stackblitz.com/github/hunsalz/hunsalz.de)
- [CodeSandbox](https://codesandbox.io/p/github/hunsalz/hunsalz.de/main)
- [GitHub Codespaces](https://codespaces.new/hunsalz/hunsalz.de)

## Dependency maintenance and fonts

Dependabot groups minor and patch updates for UnoCSS, ESLint, formatting, fonts,
and GitHub Actions. Major upgrades remain individual pull requests.

Open Sans 400 and Overpass 800 are bundled from the OFL-1.1-licensed
`@fontsource` packages. Only the Latin subsets are imported. Astro emits local,
versioned font assets, so font loading needs no third-party requests at build time
or in visitors' browsers. Font packages and their licenses are pinned by the lockfile.

## Protecting main

The importable ruleset is stored in [`.github/rulesets/main.json`](.github/rulesets/main.json).
An administrator must import it in [Settings → Rules → Rulesets](https://github.com/hunsalz/hunsalz.de/settings/rules).
The file alone does not activate protection.

The rule requires a pull request, the GitHub Actions check
`validate / Lint, types, and build`, an up-to-date branch, and resolved review threads.
It blocks deletion and force pushes. No reviewer approval is required, so the owner
can merge their own pull requests once checks pass. No bypass actors are configured.
Pull requests and production validation use the same reusable workflow and check name.
