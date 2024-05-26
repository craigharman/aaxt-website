# AAXT Website

This is the marketing and documentation website for [AAXT](https://github.com/craigharman/aaxt). 

The website is (of course) created in AAXT with the documentation created in [Vitepress](https://vitepress.dev/).

## Development

The website can be started via:

```bash
npm run dev
```

To run the documentation:

```bash
npm run docs:dev
```

## Production

AdonisJS must be running on the server and then generate the docs (into /public/docs) via `npm run build:docs`.
