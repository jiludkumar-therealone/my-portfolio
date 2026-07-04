import type { Project } from '../data/fleet';
import { Badge } from './Badge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-5 md:p-6 flex flex-col h-full transition hover:shadow-md hover:border-border-strong">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-mono text-lg font-bold" style={{ color: project.accent }}>
              {project.codename}
            </h3>
            {project.node && (
              <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">
                {project.node}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-semibold text-ink">{project.tagline}</p>
        </div>
        <Badge kind={project.visibility} />
      </div>

      <p className="text-sm leading-relaxed text-ink-secondary flex-1">{project.description}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-ink-secondary">
            <span className="text-accent shrink-0 font-bold">·</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface-muted px-2 py-0.5 font-mono text-[10px] text-ink-muted border border-border"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            {project.urlLabel ?? 'Visit'} ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ink-muted hover:text-ink transition"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}