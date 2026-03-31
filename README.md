# huxiuhan.github.io

An [Astro](https://astro.build/) personal site for Hu Xiuhan, deployed to GitHub Pages.

## Development

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

The production site is generated into `dist/`.

## Content

- Homepage content lives in `src/data/home.ts`.
- Blog posts live in `src/content/blog/`.
- Static assets remain in `public/`.

## Deployment

Pushes to `master` deploy automatically to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

Make sure the repository Pages source is set to `GitHub Actions`.
