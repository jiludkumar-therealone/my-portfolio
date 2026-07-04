# my-portfolio

Personal portfolio showcasing the Day to Day enterprise fleet (FORGE, AERO, BEACON, MERIT, ONYX, IRIS) and homelab work.

**Repo:** `jiludkumar-therealone/my-portfolio`

## Stack

- React 19 + Vite 6 + Tailwind 4
- Cloudflare Pages

## Local dev

```bash
npm install
npm run dev
```

## Deploy (personal Cloudflare account)

```bash
npm run deploy
```

### Cloudflare Workers Builds (Git)

You connected **Workers + Git** (not classic Pages). There is no “build output directory” field — `wrangler.toml` points at `./dist`.

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Production branch** | `main` |

`wrangler.toml` uses `[assets] directory = "./dist"` so `wrangler deploy` publishes the Vite build.

### Manual CLI deploy

```bash
npm run deploy
```

## Custom domain (later)

Custom domain: `portfolio.hypernova-prime.in` (configured in `wrangler.toml` + Workers Domains & Routes).

If CI deploy fails on workers.dev, ensure `[[routes]]` + `workers_dev = false` are set (see `wrangler.toml`).