import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimateIn } from '../components/AnimateIn';
import { Header } from '../components/Header';
import { Badge } from '../components/Badge';
import { getDocBySlug, PROJECT_DOCS } from '../data/docs';
import { FLEET } from '../data/fleet';

export default function DocPage() {
  const { slug = '' } = useParams();
  const doc = getDocBySlug(slug);
  const fleet = FLEET.find((p) => p.codename.toLowerCase() === slug);

  useEffect(() => {
    document.title = doc
      ? `${doc.codename} — Documentation · Jilu Dileep Kumar`
      : 'Not found · Portfolio';
    return () => {
      document.title = 'Jilu Dileep Kumar · Portfolio';
    };
  }, [doc]);

  if (!doc) {
    return (
      <div className="min-h-dvh">
        <Header />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-ink">Documentation not found</h1>
          <p className="mt-3 text-ink-secondary">No guide exists for &quot;{slug}&quot;.</p>
          <Link to="/" className="mt-6 inline-block text-accent font-semibold hover:underline">
            ← Back to portfolio
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-dvh">
      <Header />

      <main>
        <section
          className="section-pad border-b border-border"
          style={{
            background: `linear-gradient(135deg, ${doc.accent}12 0%, var(--color-surface) 55%)`,
          }}
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-ink-muted hover:text-accent transition"
            >
              ← All projects
            </Link>

            <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-sm font-bold tracking-widest" style={{ color: doc.accent }}>
                  {doc.codename}
                </p>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
                  {doc.tagline}
                </h1>
                <p className="mt-3 text-sm text-ink-muted">Written for: {doc.audience}</p>
              </div>
              {fleet && <Badge kind={fleet.visibility} />}
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {doc.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-surface-raised border border-border px-2 py-1 font-mono text-[10px] text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {doc.liveUrl && (
              <a
                href={doc.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-block rounded-xl px-5 py-2.5 text-sm font-bold text-white"
                style={{ backgroundColor: doc.accent }}
              >
                {doc.liveLabel ?? 'Live site'} ↗
              </a>
            )}
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <nav className="card p-4 doc-toc">
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-3">
                    On this page
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#plain-terms" className="text-ink-secondary hover:text-accent transition">
                        In plain terms
                      </a>
                    </li>
                    {doc.sections.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="text-ink-secondary hover:text-accent transition">
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <hr className="my-4 border-border" />
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-muted mb-2">
                    Other projects
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {PROJECT_DOCS.filter((d) => d.slug !== doc.slug).map((d) => (
                      <li key={d.slug}>
                        <Link
                          to={`/docs/${d.slug}`}
                          className="text-ink-muted hover:text-accent transition font-mono text-xs"
                        >
                          {d.codename}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              <article className="doc-prose min-w-0">
                <AnimateIn>
                  <div id="plain-terms" className="card p-6 md:p-8 border-accent/25 bg-accent-light/15 scroll-mt-24">
                    <p className="section-label text-[10px]">In plain terms</p>
                    <p className="mt-3 text-base md:text-lg text-ink leading-relaxed">{doc.inPlainTerms}</p>
                  </div>
                </AnimateIn>

                {doc.sections.map((section, i) => (
                  <AnimateIn key={section.id} delay={i * 50}>
                    <section id={section.id} className="mt-10 scroll-mt-24">
                      <h2 className="text-xl md:text-2xl font-bold text-ink">{section.title}</h2>
                      {section.summary && (
                        <p className="mt-2 text-sm font-medium text-accent">{section.summary}</p>
                      )}
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((p) => (
                          <p key={p.slice(0, 48)} className="prose-body">
                            {p}
                          </p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-4 space-y-2.5">
                          {section.bullets.map((b) => (
                            <li key={b} className="flex gap-3 text-sm text-ink-secondary leading-relaxed">
                              <span
                                className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: doc.accent }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  </AnimateIn>
                ))}

                <AnimateIn delay={200} className="mt-12 pt-8 border-t border-border flex flex-wrap gap-3">
                  <Link
                    to="/#projects"
                    className="btn-secondary rounded-xl border border-border-strong px-5 py-2.5 text-sm font-semibold text-ink"
                  >
                    ← Back to projects
                  </Link>
                  {doc.liveUrl && (
                    <a
                      href={doc.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary rounded-xl px-5 py-2.5 text-sm font-bold text-white"
                      style={{ backgroundColor: doc.accent }}
                    >
                      Open live ↗
                    </a>
                  )}
                </AnimateIn>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 bg-surface-raised">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-xs text-ink-muted text-center">
          <Link to="/" className="text-accent hover:underline font-mono">
            portfolio.hypernova-prime.in
          </Link>
        </div>
      </footer>
    </div>
  );
}