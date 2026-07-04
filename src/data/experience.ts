export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  location?: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: 'Feb 2026 – Present',
    role: 'IT Manager Assistant Dev',
    org: 'Day to Day Discount Center',
    location: 'Bahrain',
    highlights: [
      'Architect and ship the six-project codename fleet on Cloudflare Workers, D1, R2, and Zero Trust',
      'Production storefront (daytodaybh.com), branch signage fleet, HR appraisal platform, asset CDN pipeline',
      'Branch camera intelligence tooling and airgapped raffle systems across retail locations',
      'End-to-end ownership: APIs, React frontends, TV/Android deployments, production support',
    ],
  },
  {
    period: 'Sep – Dec 2025',
    role: 'Career transition',
    org: 'Relocation preparation',
    location: 'India',
    highlights: [
      'Prepared for international move and next career chapter after PwC',
      'Upskilled in cloud-native tooling, homelab infrastructure, and full-stack development',
    ],
  },
  {
    period: 'Sep 2024 – Aug 2025',
    role: 'Senior ServiceNow Developer — HRSD',
    org: 'PwC US',
    location: 'Bangalore',
    highlights: [
      'Led HR Service Delivery implementation for a US enterprise — migration of HR processes to ServiceNow',
      'Designed and supported 11 integrations: email, REST API, file-based, and ServiceNow-to-ServiceNow',
      'Built virtual assistants reducing manual HR support effort by 35%',
      'Customized Service Portal, catalog items, case management; mentored junior developers',
    ],
  },
  {
    period: 'Dec 2022 – Sep 2024',
    role: 'ServiceNow Developer — Hardware Asset Management',
    org: 'PwC US',
    location: 'Bangalore',
    highlights: [
      'Hardware Asset Management workflows for internal laptop provisioning',
      'Automated new-hire issuance, replacements, and asset returns on termination',
      'Integrated ServiceNow with third-party laptop provisioning and delivery vendor APIs',
      'Refactored integrations during vendor transition; optimized flows and notifications',
    ],
  },
  {
    period: 'Apr 2020 – Dec 2022',
    role: 'ServiceNow Developer — CyberFrontDoor',
    org: 'Infosys',
    location: 'Bangalore',
    highlights: [
      'Fully customized scoped applications, portal widgets, and ITSM modules for Australian client',
      'Business rules, client scripts, ACLs, scheduled jobs, script includes, record producers',
      'Dashboards, reports, update-set migrations; guided junior developers',
    ],
  },
  {
    period: 'Nov 2019 – Apr 2020',
    role: 'IT Support Engineer — CyberFrontDoor',
    org: 'Infosys',
    location: 'Bangalore',
    highlights: [
      'Device care management on ServiceNow CSM/ITSM for Australian client',
      'Custom service portal widgets (AngularJS, HTML5, JavaScript)',
      'Incident resolution, fix scripts, testing, and production support',
    ],
  },
];

export const EDUCATION = {
  degree: 'B.Tech Computer Science & Engineering',
  school: 'Saintgits College of Engineering',
  period: '2015 – 2019',
  detail: 'CGPA 7.74',
};