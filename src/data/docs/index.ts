import type { ProjectDoc } from './types';
import { aeroDoc } from './aero';
import { beaconDoc } from './beacon';
import { forgeDoc } from './forge';
import { irisDoc } from './iris';
import { meritDoc } from './merit';
import { onyxDoc } from './onyx';

export const PROJECT_DOCS: ProjectDoc[] = [
  onyxDoc,
  forgeDoc,
  aeroDoc,
  irisDoc,
  beaconDoc,
  meritDoc,
];

export const DOCS_BY_SLUG = Object.fromEntries(
  PROJECT_DOCS.map((d) => [d.slug, d]),
) as Record<string, ProjectDoc>;

export function getDocBySlug(slug: string): ProjectDoc | undefined {
  return DOCS_BY_SLUG[slug];
}

export type { DocSection, ProjectDoc } from './types';