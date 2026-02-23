# minions-publishing

**Platform credentials, publish queue, and post receipts**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-publishing/sdk minions-sdk

# Python
pip install minions-publishing

# CLI (global)
npm install -g @minions-publishing/cli
```

---

## CLI

```bash
# Show help
publishing --help
```

---

## Python SDK

```python
from minions_publishing import create_client

client = create_client()
```

---

## Project Structure

```
minions-publishing/
  packages/
    core/           # TypeScript core library (@minions-publishing/sdk on npm)
    python/         # Python SDK (minions-publishing on PyPI)
    cli/            # CLI tool (@minions-publishing/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [publishing.minions.help](https://publishing.minions.help)
- Blog: [publishing.minions.blog](https://publishing.minions.blog)
- App: [publishing.minions.wtf](https://publishing.minions.wtf)

---

## License

[MIT](LICENSE)
