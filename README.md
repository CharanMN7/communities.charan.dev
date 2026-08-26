# Communities with Charan

A public journal for exploring and building communities — blog posts, curated resources, and small projects. Built with Next.js 16, Tailwind CSS v4, and MDX via `@inkform/framework`.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — only needed for auth/dashboard
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project structure

```
app/
  (public)/          # Home, blog, resources, projects
  (auth)/            # Login, register, password reset
  (authenticated)/   # Dashboard (stub)
content/
  blog/              # MDX blog posts
components/
  blog/              # Blog layout components
```

## Blog

Add posts as `.mdx` files in `content/blog/` with frontmatter:

```yaml
---
title: Post Title
date: 2026-01-15
author: Charan Manikanta Nalla
description: Short summary for SEO and cards.
coverImage: https://placehold.co/1200x675
tags:
  - communities
status: published
---
```

Posts are loaded automatically by `@inkform/framework`.

## Environment variables

See `.env.example`. Supabase credentials are only required if you use the auth/dashboard features. Public pages (home, blog, resources, projects) work without them.

## License

MIT — see [LICENSE.md](LICENSE.md).
