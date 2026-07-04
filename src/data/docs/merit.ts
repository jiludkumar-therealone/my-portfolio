import type { ProjectDoc } from './types';

export const meritDoc: ProjectDoc = {
  slug: 'merit',
  codename: 'MERIT',
  tagline: 'Employee performance appraisal',
  accent: '#a78bfa',
  audience: 'HR, supervisors, managers, branch admins',
  liveUrl: 'https://hr.pa.daytodaybh.com',
  liveLabel: 'HR portal (Zero Trust)',
  stack: ['React 19', 'Workers', 'D1', 'R2', 'Cloudflare Access'],
  inPlainTerms:
    'MERIT is the internal HR appraisal system. HR uploads the employee roster from Excel; supervisors and managers fill evaluation forms online; HR reviews and prints reports. Photos and documents live on secure cloud storage behind company login.',
  sections: [
    {
      id: 'overview',
      title: 'Purpose',
      paragraphs: [
        'MERIT digitizes the annual (or cycle-based) performance appraisal process for Day to Day staff across branches. It replaces paper forms and scattered spreadsheets with one gated web app.',
      ],
    },
    {
      id: 'workflow',
      title: 'Evaluation workflow',
      bullets: [
        'HR imports roster from Excel — upsert by employee ID',
        'L1 evaluator (supervisor) completes first review',
        'L2 evaluator (manager) completes second review',
        'HR finalizes and generates printable reports',
        'Branch routing sends each employee to the correct evaluator chain',
      ],
    },
    {
      id: 'auth',
      title: 'Authentication',
      paragraphs: [
        'Protected by Cloudflare Access (Zero Trust). PIN-based login with 24-hour sessions for field supervisors on tablets. Dev and production user tables are managed separately.',
      ],
    },
    {
      id: 'data',
      title: 'Data & storage',
      bullets: [
        'Cloudflare D1 — employee records, evaluation scores, evaluator assignments',
        'R2 — employee photos and generated report assets',
        'Workers API — serverless backend at hr.pa.daytodaybh.com',
        'Date-of-joining normalized to ISO format for reporting consistency',
      ],
    },
    {
      id: 'features',
      title: 'Key features',
      bullets: [
        'Evaluator provisioning by branch and role',
        'PWA-friendly for mobile completion in branches',
        'Bulk roster updates without duplicate employee rows',
        'Printable PDF-style reports for HR records',
      ],
    },
  ],
};