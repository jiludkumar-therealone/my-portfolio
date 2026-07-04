import type { ProjectDoc } from './types';

export const irisDoc: ProjectDoc = {
  slug: 'iris',
  codename: 'IRIS',
  tagline: 'Branch camera intelligence',
  accent: '#fb7185',
  audience: 'IT field ops, branch technicians, security admins',
  stack: ['Python', 'Flask', 'SQLite', 'Scapy', 'vis-network'],
  inPlainTerms:
    'IRIS helps IT discover and map Dahua security cameras and NVRs on branch networks. A field laptop scans the local LAN, finds devices, detects duplicates or clones, and draws an interactive topology map — no cloud required during the scan.',
  aiSummary:
    'Field LAN tool for Dahua camera/NVR discovery. Python/Flask, ARP + port 37777 scan, topology maps, SQLite ledger baselines. Runs on branch outpost laptops only.',
  sections: [
    {
      id: 'overview',
      title: 'Why IRIS exists',
      paragraphs: [
        'Day to Day branches run Dahua IP cameras and NVRs on local networks. IRIS is a field tool that runs on outpost laptops (e.g. Outpost14, Outpost28) to inventory devices, track IP changes, and visualize how cameras connect to recorders.',
      ],
    },
    {
      id: 'discovery',
      title: 'Discovery methods',
      bullets: [
        'Subnet ARP scan across branch LAN segments',
        'TCP port 37777 deep hunt — Dahua proprietary discovery',
        'OUI lookup to identify Dahua hardware by MAC prefix',
        'SNMP queries where available for model metadata',
      ],
    },
    {
      id: 'nvr',
      title: 'NVR channel extraction',
      paragraphs: [
        'When an NVR is found, IRIS extracts channel assignments — which camera feeds map to which recorder inputs. This helps technicians verify coverage after installs or IP migrations.',
      ],
    },
    {
      id: 'topology',
      title: 'Topology maps',
      paragraphs: [
        'Results render in vis-network interactive graphs: cameras, NVRs, and switches as nodes with relationship edges. Clone detection flags duplicate IPs or suspicious device fingerprints.',
      ],
    },
    {
      id: 'ledger',
      title: 'Ledger baseline',
      paragraphs: [
        'Each branch maintains a SQLite ledger baseline. After network changes, a new scan diffs against the ledger so IT sees what moved, disappeared, or was added — without re-walking the store with a clipboard.',
      ],
    },
    {
      id: 'deployment',
      title: 'Field deployment',
      bullets: [
        'Offline-first Flask app on Windows field laptops',
        'Deploy scripts for themed console launch at branches',
        'Internal use only — not exposed to public internet',
      ],
    },
  ],
};