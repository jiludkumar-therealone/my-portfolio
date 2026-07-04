# Hypernova Portfolio

Personal portfolio showcasing the Day to Day enterprise fleet (FORGE, AERO, BEACON, MERIT, ONYX, IRIS) and homelab work.

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

Or connect this repo to **Cloudflare Pages** → Build command: `npm run build` → Output: `dist`.

## Custom domain (later)

Add `portfolio.hypernova-prime.in` in Cloudflare Pages → Custom domains → CNAME from `hypernova-prime.in` DNS.