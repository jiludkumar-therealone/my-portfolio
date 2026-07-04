import type { Project } from '../data/fleet';
import { Badge } from './Badge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-hyper-border bg-hyper-panel/80 p-6 backdrop-blur-sm transition hover:border-white/15 hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]"
      style={{ '--accent': project.accent } as Record<string, string>}
    >
      <div
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-mono text-xl font-bold tracking-tight" style={{ color: project.accent }}>
              {project.codename}
            </h3>
            {project.node && (
              <span className="font-mono text-[10px] text-hyper-muted uppercase tracking-widest">
                {project.node}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-semibold text-white/90">{project.tagline}</p>
        </div>
        <Badge kind={project.visibility} />
      </div>

      <p className="text-sm leading-relaxed text-hyper-muted flex-1">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-xs text-white/75">
            <span className="text-hyper-cyan shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-hyper-muted border border-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-hyper-cyan hover:underline underline-offset-4"
          >
            {project.urlLabel ?? 'Visit'} ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-hyper-muted hover:text-white transition"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}