export type Project = {
  codename: string;
  node?: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  url?: string;
  urlLabel?: string;
  visibility: 'public' | 'gated' | 'internal' | 'airgap';
  github?: string;
  accent: string;
};

export const FLEET: Project[] = [
  {
    codename: 'FORGE',
    node: 'Node 3',
    tagline: 'Enterprise asset command & CDN pipeline',
    description:
      'Central nervous system for retail media. Three-stage graphics pipeline — ingest, barcode labeling, campaign deploy — into shared R2 and D1. Powers the live storefront catalog.',
    stack: ['Next.js 16', 'Cloudflare Pages', 'D1', 'R2', 'Zero Trust'],
    highlights: [
      'Stage 1→3 asset lifecycle with RBAC',
      'Smart-merge catalog uploads (batch D1 writes)',
      'Campaign layout_matrix composer for branch promos',
      'Presigned R2 uploads + recycle bin',
    ],
    visibility: 'gated',
    github: 'https://github.com/daytoday-hypermarket/daytoday-project-forge',
    accent: '#f59e0b',
  },
  {
    codename: 'AERO',
    node: 'Node 2',
    tagline: 'Production storefront & PWA',
    description:
      'Public e-commerce experience for daytodaybh.com. Consumes Forge live catalog and campaign APIs. Branch-aware promos, mobile CRED-style browsing, BEACON signage fallback when catalog is empty.',
    stack: ['React 19', 'Vite 7', 'Tailwind', 'PWA', 'Cloudflare Pages'],
    highlights: [
      'Forge-driven catalog + campaign matrix',
      'Desktop dashboard + mobile-native UX',
      'i18n EN/AR, branch selector',
      'Signage embed fallback via BEACON',
    ],
    url: 'https://daytodaybh.com',
    urlLabel: 'Live storefront',
    visibility: 'public',
    github: 'https://github.com/daytoday-hypermarket/day-to-day-landing-page',
    accent: '#ef3842',
  },
  {
    codename: 'BEACON',
    tagline: 'Branch digital signage',
    description:
      'Fullscreen HTML5 player for in-store TVs and tablets. Upload portal pushes media to R2; worker builds dynamic playlists. Embeddable in AERO when promotions are offline.',
    stack: ['Vanilla JS', 'Cloudflare Worker', 'R2', 'Tizen / Android TV'],
    highlights: [
      'Auto-refresh playlist from signage-media/',
      'Upload portal with reorder & purge',
      'iframe embed mode for web fallback',
      'Samsung + Android TV fleet',
    ],
    url: 'https://signage.daytodaybh.com',
    urlLabel: 'Live player',
    visibility: 'public',
    github: 'https://github.com/jiludkumar-therealone/tizen-signage-player',
    accent: '#22d3ee',
  },
  {
    codename: 'MERIT',
    tagline: 'Employee performance appraisal',
    description:
      'HR roster import, L1/L2 evaluator workflows, photo CDN, printable reports. Cloudflare Workers + D1 + R2 on a Zero-Trust-gated subdomain.',
    stack: ['React 19', 'Workers', 'D1', 'R2', 'Cloudflare Access'],
    highlights: [
      'Excel roster upsert by employee ID',
      'Supervisor → Manager → HR pipeline',
      'Branch routing & evaluator provisioning',
      'PWA-friendly PIN auth (24h sessions)',
    ],
    visibility: 'gated',
    github: 'https://github.com/daytoday-hypermarket/employee-performance-eval-system',
    accent: '#a78bfa',
  },
  {
    codename: 'ONYX',
    tagline: 'MOIC-compliant raffle engine',
    description:
      'Airgapped live-draw system for in-store raffles. Sealed CSV manifest, cryptographic draws, admin command center + audience display. Deliberately isolated from the cloud fleet.',
    stack: ['Flask', 'Vue / Vite', 'SQLite', 'Airgap LAN'],
    highlights: [
      'SHA-256 sealed pre-draw manifests',
      'SystemRandom cryptographic draws',
      'Watchdog file-integrity polling',
      'MOIC compliance workflow',
    ],
    visibility: 'airgap',
    github: 'https://github.com/jiludkumar-therealone/onyx-enterprise',
    accent: '#34d399',
  },
  {
    codename: 'IRIS',
    tagline: 'Branch camera intelligence',
    description:
      'Dahua IPCam / NVR discovery across branch LANs. ARP + TCP 37777 deep hunt, clone detection, vis-network topology maps. Field laptops at branch outposts.',
    stack: ['Python', 'Flask', 'SQLite', 'Scapy', 'vis-network'],
    highlights: [
      'Subnet scanner with OUI + SNMP',
      'NVR channel extraction',
      'Ledger baseline for IP migrations',
      'Outpost14 / Outpost28 field nodes',
    ],
    visibility: 'internal',
    github: 'https://github.com/jiludkumar-therealone/iris-enterprise',
    accent: '#fb7185',
  },
];

export const SHARED_INFRA = [
  { label: 'R2', value: 'daytoday-assets' },
  { label: 'CDN', value: 'cdn.daytodaybh.com' },
  { label: 'D1', value: 'forge-acl' },
  { label: 'Edge', value: 'Cloudflare Workers + Pages' },
];

export const HOMELAB = {
  domain: 'hypernova-prime.in',
  platform: 'Oracle Cloud Always Free',
  vms: [
    { name: 'Orion', os: 'Ubuntu' },
    { name: 'Argus', os: 'Ubuntu' },
    { name: 'Apollo', os: 'Ubuntu' },
  ],
  stack: ['Docker', 'Traefik', 'Self-hosted apps', 'Tailscale'],
  learning: ['Headscale'],
};