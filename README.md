# pedant-studios-docs

Documentation hub for the [Pedant Studios](https://pedantstudios.com) product portfolio. Powered by [Docusaurus 3](https://docusaurus.io/).

Published at: **[docs.pedantstudios.com](https://docs.pedantstudios.com)**

## Structure

```
docs/
  intro.md                # Pedant Studios overview
  webcenter/              # WebCenter product docs
    overview.md
    getting-started/
    features/
    admin/
    troubleshooting/
```

Each product gets its own top-level directory under `docs/`. Add new products by creating a new directory with an `_category_.json` file and content pages.

## Local development

```bash
npm install
npm start                 # http://localhost:3000
```

## Build

```bash
npm run build             # outputs to ./build
npm run serve             # serve the production build locally
```

## Deployment

Deploys automatically to Vercel on every push to `main`.

- **Production:** docs.pedantstudios.com
- **Vercel project:** pedant-studios-docs

## Contributing

Pull requests welcome. The "Edit this page" link at the bottom of each doc page goes straight to the source on GitHub.

## License

Documentation is © Pedant Studios LLC. Code (Docusaurus config and theme) is MIT.
