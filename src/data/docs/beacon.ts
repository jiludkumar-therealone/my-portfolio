import type { ProjectDoc } from './types';

export const beaconDoc: ProjectDoc = {
  slug: 'beacon',
  codename: 'BEACON',
  tagline: 'Branch digital signage',
  accent: '#22d3ee',
  audience: 'Branch staff, IT operators, graphics team',
  liveUrl: 'https://signage.daytodaybh.com',
  liveLabel: 'Live player',
  stack: ['Vanilla JS', 'Cloudflare Worker', 'R2', 'Tizen / Android TV'],
  inPlainTerms:
    'BEACON replaces USB sticks on branch TVs. Upload videos and images through a web portal; branch screens automatically play them in a loop — fullscreen, no cursor, no buttons. Works on Samsung Tizen TVs, Android TV, and browsers.',
  sections: [
    {
      id: 'overview',
      title: 'What BEACON replaces',
      paragraphs: [
        'Day to Day branches used to copy promotion videos onto USB drives for each TV. BEACON centralizes content: one upload updates every screen that polls the cloud playlist.',
      ],
    },
    {
      id: 'components',
      title: 'Three parts working together',
      bullets: [
        'Player (signage.daytodaybh.com) — fullscreen kiosk loop on TVs and tablets',
        'Upload portal — staff upload, preview, reorder, and delete media (Zero Trust gated)',
        'Cloudflare Worker API — presigned uploads, file listing, playlist generation',
      ],
    },
    {
      id: 'flow',
      title: 'How content flows',
      paragraphs: [
        'Upload portal requests a presigned URL → file goes direct to R2 (signage-media/) → Worker builds playlist from bucket listing + .order.json → Player fetches playlist over HTTPS and streams from cdn.daytodaybh.com.',
        'Playlist refreshes on a timer without interrupting a video already playing.',
      ],
    },
    {
      id: 'playback',
      title: 'Playback behavior',
      bullets: [
        'True kiosk mode: black background, hidden cursor, no visible UI',
        'Hybrid player: HTML5 video (H.265 preferred) + image slides',
        'Typical loop: image → video → image → video…',
        'Robust error recovery if a file fails to load',
        'iframe embed mode (?embed=1) for AERO web fallback when catalog is empty',
      ],
    },
    {
      id: 'fleet',
      title: 'Device fleet',
      paragraphs: [
        'Deployed on Samsung Tizen TVs and Android TV devices across branches. Same web player codebase; Tizen packaging for Samsung app distribution where needed.',
      ],
    },
    {
      id: 'storage',
      title: 'Storage & CDN',
      bullets: [
        'R2 bucket: daytoday-assets/signage-media/',
        'Public CDN: cdn.daytodaybh.com',
        'CI deploys Worker + static assets on push to main',
      ],
    },
  ],
};