import type { ProjectDoc } from './types';

export const onyxDoc: ProjectDoc = {
  slug: 'onyx',
  codename: 'ONYX',
  tagline: 'MOIC-compliant raffle engine',
  accent: '#34d399',
  audience: 'Store operators, auditors, compliance officers',
  stack: ['Flask', 'Vue / Vite', 'SQLite', 'Airgap LAN'],
  inPlainTerms:
    'ONYX runs in-store prize draws fairly and legally. Before the event, customer purchase data is exported to a sealed file and the database is disconnected. During the live draw, random winners are picked cryptographically — and if anyone tampers with the file, the whole system locks down.',
  aiSummary:
    'Airgapped MOIC-compliant raffle system. CSV extraction, SHA-256 sealing, live integrity watchdog, cryptographic draws, admin + audience UIs. Isolated from cloud fleet.',
  sections: [
    {
      id: 'overview',
      title: 'System overview',
      paragraphs: [
        'ONYX is an airgapped raffle system built for MOIC (Ministry of Industry and Commerce) regulations. It uses a decoupled admin console and public audience display, designed so live events survive network outages and database failures.',
        'Philosophy: pre-draw data extraction and airgap — the live event never queries SQL Server.',
      ],
    },
    {
      id: 'airgap',
      title: 'Data airgap pipeline',
      bullets: [
        'Read-only ODBC extraction from legacy SQL Server with parameterized date filters',
        'Query scanner blocks INSERT, DROP, DELETE, TRUNCATE before execution',
        'Records export to a UTF-8 CSV flat file; database connection is severed immediately',
        'Live event runs entirely from in-memory data loaded from the verified CSV',
      ],
    },
    {
      id: 'tickets',
      title: 'Ticket allocation',
      paragraphs: [
        'Tickets = floor(Total_Spend / Ticket_Unit_Price). Example: 10.722 BHD at 5.000 BHD per ticket = 2 entries.',
        'Each ticket adds the customer\'s index to a probability pool array. More spend = more entries, but duplicate prevention ensures one prize per person per event.',
      ],
    },
    {
      id: 'security',
      title: 'Cryptographic security',
      paragraphs: [
        'Two layers prevent insider tampering with the dataset before or during a draw.',
      ],
      bullets: [
        'Layer 1 — Static sealing: SHA-256 hash of CSV at extraction, stored in a hidden manifest. Load rejected if hash mismatch.',
        'Layer 2 — Live watchdog: background thread polls file hash every 3 seconds during locked events',
        'OS-level entropy (not weak pseudo-random) for winner selection',
        'Emergency protocol: global tamper alert, audience curtain overlay, operator lockout, emergency purge of corrupted data',
      ],
    },
    {
      id: 'frontend',
      title: 'Admin & audience displays',
      bullets: [
        'Administrative Command Center — draw controls, inventory, session stats, safety thresholds',
        'Public Display Node — polls backend state, countdown timer, 3D draw animation, synced effects',
        'Vue frontend polls /api/state every ~1s for finite-state-machine sync across screens',
      ],
    },
    {
      id: 'backend',
      title: 'Backend architecture',
      paragraphs: [
        'Python Flask + Waitress WSGI. In-memory DATA_CACHE and EVENT_SESSION dictionaries give O(1) draw performance. Chunked SHA-256 hashing handles large CSVs without memory spikes.',
      ],
    },
  ],
};