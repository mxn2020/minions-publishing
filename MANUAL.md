# Manual Setup Steps for Minions Publishing

This document lists the steps that must be completed manually after scaffolding.
Each step includes specific values for your project.

---

## 1. GitHub Repository Secrets

Go to **GitHub → mxn2020/minions-publishing → Settings → Secrets and variables → Actions** and add:

| Secret | Description | Where to get it |
|--------|-------------|-----------------|
| `NPM_TOKEN` | npm publish token | [npmjs.com → Access Tokens](https://www.npmjs.com/settings/~/tokens) |
| `PYPI_TOKEN` | PyPI API token for `minions-publishing` | [pypi.org → Account Settings → API tokens](https://pypi.org/manage/account/#api-tokens) |

> **Note**: If you share tokens across repos, you can use GitHub Organization secrets instead.

---

## 2. Netlify Sites

Create **3 Netlify sites** — one for each app:

### Web App (Playground)
- **Netlify site name**: `minions-publishing-web`
- **GitHub repo**: `mxn2020/minions-publishing`
- **Base directory**: `apps/web`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/web/dist`
- **Custom domain**: `publishing.minions.wtf`

### Documentation
- **Netlify site name**: `minions-publishing-docs`
- **GitHub repo**: `mxn2020/minions-publishing`
- **Base directory**: `apps/docs`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/docs/dist`
- **Custom domain**: `publishing.minions.help`

### Blog
- **Netlify site name**: `minions-publishing-blog`
- **GitHub repo**: `mxn2020/minions-publishing`
- **Base directory**: `apps/blog`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/blog/dist`
- **Custom domain**: `publishing.minions.blog`

---

## 3. DNS Configuration

Add CNAME records at your DNS provider:

| Record | Type | Name | Value |
|--------|------|------|-------|
| Docs | CNAME | `publishing.minions.help` | _(Netlify subdomain)_ |
| Blog | CNAME | `publishing.minions.blog` | _(Netlify subdomain)_ |
| App  | CNAME | `publishing.minions.wtf` | _(Netlify subdomain)_ |

> Get the Netlify subdomain from Netlify → Site settings → Domain management

---

## 4. npm Packages — First Publish

Before the CI publish workflow works, you need to publish initial versions manually:

```bash
# From the project root
pnpm install
pnpm run build

# Publish SDK
cd packages/core
npm publish --access public
cd ../..

# Publish CLI
cd packages/cli
npm publish --access public
cd ../..
```

Your packages:
- SDK: [`@minions-publishing/sdk`](https://www.npmjs.com/package/@minions-publishing/sdk)
- CLI: [`@minions-publishing/cli`](https://www.npmjs.com/package/@minions-publishing/cli)

---

## 5. PyPI Package — First Publish

```bash
cd packages/python

# Create virtual env
python -m venv .venv
source .venv/bin/activate

# Install build tools
pip install hatch twine

# Build
hatch build

# Upload (you'll be prompted for your PyPI token)
twine upload dist/*
```

Your package: [`minions-publishing`](https://pypi.org/project/minions-publishing/)

---

## 6. Release Please

Release Please is pre-configured. After your first merge to `main`:

1. A "Release PR" will be auto-created
2. Merging the Release PR creates a GitHub Release + git tag
3. The `publish.yml` workflow triggers on tags to publish to npm/PyPI

Verify config:
- [`release-please-config.json`](./release-please-config.json)
- [`.release-please-manifest.json`](./.release-please-manifest.json)

---

## 7. Branch Protection

Go to **GitHub → Settings → Branches → Add rule**:

- **Branch name pattern**: `main`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (select: `build-and-test`, `python-sdk`)
- ✅ Require branches to be up to date
- ❌ Do not allow force pushes

---

## 8. Add to Minions Ecosystem

Update the main [minions.dev](https://minions.dev) website to include this project:

1. Add to the plugins/projects listing page
2. Add the project color to `color_tracking.md`
3. Link documentation from the main docs

---

## Quick Reference

| Item | Value |
|------|-------|
| Project | `minions-publishing` |
| SDK (npm) | `@minions-publishing/sdk` |
| CLI (npm) | `@minions-publishing/cli` |
| Python (PyPI) | `minions-publishing` |
| GitHub | `github.com/mxn2020/minions-publishing` |
| Docs domain | `publishing.minions.help` |
| Blog domain | `publishing.minions.blog` |
| App domain | `publishing.minions.wtf` |
| Author | Mehdi Nabhani <mehdi@the-mehdi.com> |
| License | MIT |
