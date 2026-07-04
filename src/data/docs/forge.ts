import type { ProjectDoc } from './types';

export const forgeDoc: ProjectDoc = {
  slug: 'forge',
  codename: 'FORGE',
  tagline: 'Enterprise asset command & CDN pipeline',
  accent: '#f59e0b',
  audience: 'Marketing, graphics, QA admins, and developers',
  liveUrl: 'https://forge.daytodaybh.com',
  liveLabel: 'Admin dashboard (Zero Trust)',
  stack: ['Next.js 16', 'Cloudflare Pages', 'D1', 'R2', 'Zero Trust'],
  inPlainTerms:
    'FORGE is the backstage of the Day to Day website. Graphics teams upload flyers and product photos here; FORGE cleans, labels, approves, and publishes them to the cloud so the public storefront (AERO) can load them fast — without bloating the website code.',
  sections: [
    {
      id: 'philosophy',
      title: 'Why FORGE exists',
      paragraphs: [
        'Heavy images and videos should never be baked into the storefront app. FORGE separates media from code: forge.daytodaybh.com handles all uploads, processing, and delivery; daytodaybh.com stays a lightweight app that simply asks FORGE what to show.',
        'This is called strict asset decoupling — the storefront is a "dumb terminal" that polls APIs and renders what FORGE publishes.',
      ],
    },
    {
      id: 'pipeline',
      title: 'Three-stage asset pipeline',
      summary: 'Files move through three vaults. Nothing goes live by accident.',
      paragraphs: [
        'Every file progresses through intake → classification → production. Each stage uses a separate R2 bucket path so raw uploads never overwrite live storefront media.',
      ],
      bullets: [
        'Stage 1 — Intake vault (unlabeled-assets): Raw uploads from graphics. Sorted by type: images, promo-images, videos.',
        'Stage 2 — Classified vault (labeled-assets): QA assigns barcodes or promo IDs. Files are renamed and copied here.',
        'Stage 3 — Live edge (website-assets): Approved media only. This is what customers see on daytodaybh.com.',
      ],
    },
    {
      id: 'delivery',
      title: 'Edge delivery & optimization',
      paragraphs: [
        'Assets stay as raw binaries in R2 during ingestion. Optimization happens at the edge: WebP/AVIF conversion and resizing via Next.js Image Optimization so phones on Bahraini networks get small, fast payloads.',
        'The storefront maps barcodes and SKUs to CDN URLs through a bucket listing API — no hard-coded image lists in the website.',
      ],
    },
    {
      id: 'campaigns',
      title: 'Campaign composer',
      paragraphs: [
        'Marketing designs branch-specific layouts in FORGE\'s Campaign Composer. One database row can hold layouts for Jannusan, Abu Saiba, and Hamad Town inside a single JSON "triple-branch matrix".',
        'Each branch can have its own ticker, hero carousel, side billboards, and footer assets. AERO reads this matrix and renders the correct layout per branch.',
      ],
      bullets: [
        'layout_matrix in D1 stores per-branch promo slots',
        'Branch visibility: ["ALL"] means every branch sees the campaign',
        'Live status badges in FORGE are read-only — admins must save a campaign to change what AERO shows',
      ],
    },
    {
      id: 'database',
      title: 'D1 database tables',
      bullets: [
        'product_catalog — master inventory; target_branches JSON controls which branches see each product image',
        'storefront_campaigns — campaign layouts from the composer',
        'asset_audit_logs — immutable trail: who uploaded, classified, deployed, or removed each asset',
      ],
    },
    {
      id: 'security',
      title: 'Access & security',
      paragraphs: [
        'FORGE admin is gated behind Cloudflare Zero Trust. Role-based access controls who can upload, classify, or deploy. Credentials live in the enterprise vault — never in documentation or client code.',
      ],
    },
  ],
};