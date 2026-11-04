# Markus Hunsalz — personal website

A minimal personal website built with Astro, TypeScript, and UnoCSS, and a comparison
of independent build and deployment pipelines across GitHub Pages, IONOS, Netlify,
and Vercel. Visit [hunsalz.de](https://hunsalz.de).

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

Commit `package-lock.json` with dependency changes. Use `npm ci` to reproduce the
reviewed dependency versions.

## Validation and deployments

[![PR validation](https://github.com/hunsalz/hunsalz.de/actions/workflows/pull-request.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/pull-request.yaml)

Each provider independently builds the source on `main`. Build output is not shared
between providers; the committed lockfile provides a common dependency baseline.

| Provider | Build configuration | Deployment target | Status |
| --- | --- | --- | --- |
| GitHub Pages | `npm ci` → `npm run check` in GitHub Actions | Validated `dist` artifact → `gh-pages` | [![GitHub Pages](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml) |
| IONOS | `npm ci` → `npm run check` in its separate build workflow | Own `dist` artifact → IONOS Deploy Now | [![IONOS](https://github.com/hunsalz/hunsalz.de/actions/workflows/hunsalz.de-orchestration.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/hunsalz.de-orchestration.yaml) |
| Netlify | Build settings managed in Netlify | Netlify | [![Netlify](https://api.netlify.com/api/v1/badges/337fbe9c-ddb6-4757-97e9-a974035e8955/deploy-status?branch=main)](https://app.netlify.com/projects/hunsalz-de/deploys) |
| Vercel | `npm ci` → `npm run build`, configured in [`vercel.json`](vercel.json) | Own `dist` output → Vercel | [![Vercel](https://img.shields.io/github/deployments/hunsalz/hunsalz.de/Production.svg?label=Vercel&logo=vercel)](https://vercel.com/markus-hunsalzs-projects/hunsalz-de) |

Pull requests run lint, Astro type checks, and a production build. GitHub Pages and
IONOS also require these checks before publishing. Vercel's badge reflects the latest
`Production` deployment reported by its GitHub integration; badge updates may be cached.

The generated `gh-pages` branch is for GitHub Pages only. Vercel deployments are
disabled for generated output via [`public/vercel.json`](public/vercel.json);
source branches continue to receive independent Vercel builds and previews.

## Contributing

[`main` is protected](https://github.com/hunsalz/hunsalz.de/rules/26497300).
Create a branch, open a pull request, wait for `validate / Lint, types, and build`,
then merge. Branches must be up to date and review threads resolved. No reviewer
approval is required, so the owner can merge their own PRs after checks pass.
Direct pushes, force pushes, and deletion of `main` are blocked; no bypass actors
are configured. The ruleset is also recorded in [`.github/rulesets/main.json`](.github/rulesets/main.json).

## Fonts and maintenance

Open Sans Latin 400 and Overpass Latin 800 are bundled locally from OFL-1.1-licensed
`@fontsource` packages. Astro emits versioned font assets with no external font requests.

Dependabot groups compatible minor and patch updates for tooling, fonts, and GitHub
Actions. Major upgrades remain individual PRs.

Maintenance note: the `minimatch@^10` override pins lint tooling to 11.0.1 for
[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
Remove it once upstream dependencies accept a patched version.
