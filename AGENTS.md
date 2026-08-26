# Communities with Charan

## Next.js 16

This project uses Next.js 16. Key differences from older versions: `cookies()` is async, and middleware may eventually migrate to `proxy.ts`.

## Project-specific notes

- **Public site** — home, blog (`content/blog/*.mdx`), resources, and projects are the main product.
- **Blog** — powered by `@inkform/framework`; no extra MDX config needed.
- **Auth** — Supabase scaffold exists (login, dashboard stub) but is optional for local dev of public pages.
- **Images** — placeholder images use `placehold.co`; swap for real assets before production.
- **Port** — defaults to `3000` via `next dev`.

For shared workspace conventions, see the root `AGENTS.md` in the devsforfun monorepo (if cloned from there).
