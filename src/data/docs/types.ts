export type DocSection = {
  id: string;
  title: string;
  summary?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectDoc = {
  slug: string;
  codename: string;
  tagline: string;
  accent: string;
  audience: string;
  liveUrl?: string;
  liveLabel?: string;
  stack: string[];
  inPlainTerms: string;
  sections: DocSection[];
};