import type { ExperienceEntry } from '../data/experience';

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="card card-interactive p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base md:text-lg font-bold text-ink">{entry.role}</h3>
          <p className="text-sm font-medium text-accent mt-0.5">
            {entry.org}
            {entry.location && <span className="text-ink-muted"> · {entry.location}</span>}
          </p>
        </div>
        <time className="font-mono text-xs text-ink-muted whitespace-nowrap shrink-0 bg-surface-muted px-2.5 py-1 rounded-md">
          {entry.period}
        </time>
      </div>
      <ul className="space-y-2">
        {entry.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-ink-secondary leading-relaxed">
            <span className="text-accent shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}