import type { ProjectDoc } from './types';

export const aeroDoc: ProjectDoc = {
  slug: 'aero',
  codename: 'AERO',
  tagline: 'Production storefront & PWA',
  accent: '#ef3842',
  audience: 'Customers, marketing, legal/compliance reviewers',
  liveUrl: 'https://daytodaybh.com',
  liveLabel: 'Live storefront',
  stack: ['React 19', 'Vite 7', 'Tailwind', 'PWA', 'Cloudflare Pages'],
  inPlainTerms:
    'AERO is the public Day to Day website — the digital storefront customers browse on phone or desktop. It shows products, promotions, and legal pages. It reads everything from FORGE and never edits the catalog itself.',
  aiSummary:
    'Public storefront at daytodaybh.com. React/Vite PWA, rigid promo grid, legal pages for app compliance, read-only Forge integration. Branch-aware campaigns and EN/AR support.',
  sections: [
    {
      id: 'overview',
      title: 'What AERO does',
      paragraphs: [
        'AERO is the flagship web experience for Day to Day Discount Center in Bahrain. It is a fast single-page app (SPA) built with React and Vite, deployed on Cloudflare Pages at daytodaybh.com.',
        'It also hosts official legal pages (/privacy, /terms, /about) required by app stores and Bahrain\'s Personal Data Protection Law (Law No. 30 of 2018).',
      ],
    },
    {
      id: 'layout',
      title: 'Promo matrix layout',
      summary: 'Fixed grid sizes so graphics look identical on every screen.',
      paragraphs: [
        'AERO uses a rigid CSS grid — not JavaScript resize hacks — so marketing layouts match the graphics team\'s specs pixel-for-pixel.',
      ],
      bullets: [
        'Max width 1920px',
        'Main dynamic banner: 260px height',
        'Static hero overlay: 650×260px on top of the banner',
        'Side canvases: 200×200px (top) and 200×350px (bottom)',
        'Footer: 120px height',
      ],
    },
    {
      id: 'routing',
      title: 'URL routing (for deep links)',
      paragraphs: [
        'Because AERO is a Vite SPA, sub-pages like /privacy need special handling. On load, the app reads window.location.pathname and shows the right screen. Navigation updates the URL with the History API without full page reloads.',
        'Cloudflare serves /* → index.html (HTTP 200) so direct links to /terms never 404.',
      ],
    },
    {
      id: 'forge-integration',
      title: 'How AERO talks to FORGE',
      paragraphs: [
        'FORGE is the command deck; AERO is the frontline display. AERO has no admin powers — it only fetches JSON and image URLs that FORGE published.',
      ],
      bullets: [
        'Canvas scrubber: FORGE strips EXIF metadata from uploads and converts to WebP before R2',
        'Catalog editor: FORGE rejects bad data (missing prices, empty names) so AERO never crashes on NULL values',
        'Branch matrix: FORGE sends ["ALL"] or per-branch lists; AERO shows promos accordingly',
        'Campaign dimensions: AERO applies exact CSS sizes FORGE specifies — no layout shift',
        'BEACON fallback: if the live catalog is empty, AERO can embed the signage player',
      ],
    },
    {
      id: 'compliance',
      title: 'Legal & compliance pages',
      bullets: [
        '/privacy — data rights, 30-day deletion, 10-year anonymized transaction retention for tax law',
        '/terms — terms of service',
        '/about — company information',
        'Footer split into Company and Legal columns only — no clutter links',
      ],
    },
    {
      id: 'pwa',
      title: 'Progressive Web App',
      paragraphs: [
        'AERO installs as a PWA on mobile for app-like browsing. English and Arabic (i18n), branch selector, and mobile-native UX patterns support in-store and at-home shopping.',
      ],
    },
  ],
};