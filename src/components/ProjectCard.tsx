import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/fleet';
import { Badge } from './Badge';

const INTERNAL = new Set(['FORGE', 'MERIT']);

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate();
  const docPath = `/docs/${project.codename.toLowerCase()}`;
  const showLive = project.url && !INTERNAL.has(project.codename);

  const openDoc = () => navigate(docPath);

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openDoc}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDoc();
        }
      }}
      className="card card-interactive p-5 md:p-6 flex flex-col h-full hover:border-border-strong cursor-pointer group"
      aria-label={`${project.codename} documentation`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-bold" style={{ color: project.accent }}>
              {project.codename}
            </h3>
            {project.node && (
              <span className="text-xs text-ink-muted uppercase tracking-wide font-medium">
                {project.node}
              </span>
            )}
          </div>
          <p className="mt-1 text-base font-semibold text-ink">{project.tagline}</p>
        </div>
        <Badge kind={project.visibility} />
      </div>

      <p className="text-base leading-relaxed text-ink-secondary flex-1">{project.description}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-[15px] text-ink-secondary">
            <span className="text-accent shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface-muted px-2.5 py-1 text-xs text-ink-secondary border border-border font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-4 items-center justify-between">
        <span className="text-sm font-bold text-accent group-hover:underline underline-offset-4">
          Read documentation
        </span>
        {showLive && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-semibold text-ink-secondary hover:text-accent transition"
          >
            {project.urlLabel ?? 'Visit'} (external)
          </a>
        )}
      </div>
    </article>
  );
}