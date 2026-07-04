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

### Cloudflare Pages (Git — recommended)

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | *(leave empty — do not use `wrangler deploy`)* |
| **Production branch** | `main` |

This is a **static Pages** site, not a Worker. `npm run build` is enough; Pages publishes `dist` automatically.

### Manual CLI deploy

```bash
npm run deploy
```

## Custom domain (later)

Add `portfolio.hypernova-prime.in` in Cloudflare Pages → Custom domains → CNAME from `hypernova-prime.in` DNS.