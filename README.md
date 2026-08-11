# electro199.github.io

Personal portfolio/blog built with [Astro](https://astro.build), deployed to GitHub Pages at the root domain.

## SEO features included

- Canonical URLs, Open Graph, and Twitter card meta tags ([BaseHead.astro](src/components/BaseHead.astro))
- Auto-generated `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt` pointing at the sitemap ([public/robots.txt](public/robots.txt))
- RSS feed at `/rss.xml`
- Content authored in Markdown under `src/content/blog/` (posts) and `src/content/projects/` (portfolio)

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview the build locally                  |

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

## TODO before going live

- Fill in tagline/bio/skills placeholders in [src/pages/index.astro](src/pages/index.astro)
- Replace placeholder description in [src/consts.ts](src/consts.ts)
- Replace the `your-email@example.com` / LinkedIn / X placeholders in [Header](src/components/Header.astro), [Footer](src/components/Footer.astro), and [index.astro](src/pages/index.astro)
- Replace `public/favicon.svg` / `favicon.ico`
- Replace the placeholder entries in `src/content/projects/` and `src/content/blog/` with real content
