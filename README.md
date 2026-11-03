# Just my personal website

## Deployments

[![Deploy Now Status](https://github.com/hunsalz/hunsalz.de/actions/workflows/deploy-to-ionos.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/deploy-to-ionos.yaml)
[![GitHub Pages Status](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml/badge.svg)](https://github.com/hunsalz/hunsalz.de/actions/workflows/gh-pages.yaml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/337fbe9c-ddb6-4757-97e9-a974035e8955/deploy-status)](https://app.netlify.com/projects/hunsalz-de/deploys)
[![Vercel Status](https://img.shields.io/static/v1?label=Vercel&message=Deployed&color=black&logo=vercel)](https://vercel.com/markus-hunsalzs-projects/hunsalz-de)

## Online coding

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

## Development requirements

Use Node.js 22.23.4 or newer (deployment workflows use Node.js 24).

The `minimatch@^10` override pins lint tooling to 11.0.1 to fix
[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
Remove the override once ESLint and TypeScript ESLint accept a patched version.
