export type SkillGroup = {
  category: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Platform & edge',
    skills: [
      'Cloudflare Workers & Pages',
      'D1 & R2',
      'Zero Trust / Access',
      'REST APIs',
      'Docker',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React 19', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'PWA'],
  },
  {
    category: 'Backend & scripting',
    skills: ['Python', 'Flask', 'Node.js', 'SQLite', 'Bash'],
  },
  {
    category: 'Infrastructure & ops',
    skills: [
      'Linux / Ubuntu',
      'Tailscale mesh',
      'Oracle Cloud',
      'Self-hosted services',
      'Branch LAN tooling',
    ],
  },
  {
    category: 'Enterprise background',
    skills: [
      'ServiceNow ITSM / HRSD / HAM',
      'Integration Hub',
      'Flow Designer',
      'Service Portal widgets',
      'ITIL processes',
    ],
  },
];

export const CERTIFICATIONS = {
  mainline: [
    'ServiceNow Certified System Administrator',
    'ServiceNow CIS — Discovery',
    'ITIL v4 Foundation',
    'Infosys Certified ServiceNow Administrator',
  ],
  micro: [
    'Integration Hub',
    'Flow Designer',
    'Performance Analytics',
    'Predictive Intelligence',
    'Virtual Agent',
    'Automated Test Framework',
  ],
};