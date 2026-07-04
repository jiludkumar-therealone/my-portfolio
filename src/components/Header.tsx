import { useEffect, useState } from 'react';

const GITHUB = 'https://github.com/jiludkumar-therealone';
const LINKEDIN = 'https://linkedin.com/in/jilu-d-kumar';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#homelab', label: 'Homelab' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="header-enter sticky top-0 z-50 border-b border-border bg-surface-raised/90 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm font-bold tracking-tight text-ink shrink-0">
          Jilu<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-muted">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-ink-secondary hover:border-accent/40 hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white hover:bg-accent-dark transition"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border border-border p-2 text-ink-secondary hover:text-accent transition"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface-raised px-4 pb-5 pt-3">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-secondary hover:bg-surface-muted hover:text-accent transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg border border-border py-2.5 text-sm font-semibold text-ink-secondary"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg bg-accent py-2.5 text-sm font-semibold text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}