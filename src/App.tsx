import { FLEET, HOMELAB, SHARED_INFRA } from './data/fleet';
import { ProjectCard } from './components/ProjectCard';

const GITHUB = 'https://github.com/jiludkumar-therealone';

export default function App() {
  return (
    <div className="min-h-dvh grid-bg">
      <div className="glow-orb pointer-events-none fixed inset-x-0 top-0 h-[480px]" />

      <header className="relative border-b border-hyper-border/80 bg-hyper-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
          <a href="#" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-hyper-cyan">HYPERNOVA</span>
            <span className="text-hyper-muted"> / portfolio</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-xs font-semibold text-hyper-muted">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#infra" className="hover:text-white transition">Infra</a>
            <a href="#homelab" className="hover:text-white transition">Homelab</a>
          </nav>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-hyper-border px-3 py-1.5 text-xs font-semibold hover:border-hyper-cyan/40 hover:text-hyper-cyan transition"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-5 pb-20">
        {/* Hero */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-hyper-cyan mb-4">
            Enterprise systems · Full stack · Homelab
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.05]">
            Jilu Dileep Kumar
          </h1>
          <p className="mt-6 text-lg md:text-xl text-hyper-muted max-w-2xl leading-relaxed">
            I design and ship production systems for{' '}
            <span className="text-white font-semibold">Day to Day Discount Center</span> — a six-project
            codename fleet spanning Cloudflare edge, retail storefronts, branch signage, HR tooling,
            camera intelligence, and airgapped live events.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-hyper-cyan px-6 py-3 text-sm font-bold text-hyper-bg hover:bg-cyan-300 transition"
            >
              View the fleet
            </a>
            <a
              href="https://daytodaybh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-hyper-border px-6 py-3 text-sm font-semibold text-white hover:border-white/25 transition"
            >
              Live storefront ↗
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 mb-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-hyper-muted mb-2">Codename projects</h2>
          <p className="text-2xl font-bold text-white mb-8">What I&apos;ve built</p>
          <div className="grid gap-6 md:grid-cols-2">
            {FLEET.map((p) => (
              <ProjectCard key={p.codename} project={p} />
            ))}
          </div>
        </section>

        {/* Shared infra */}
        <section id="infra" className="scroll-mt-24 mb-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-hyper-muted mb-2">Shared stack</h2>
          <p className="text-2xl font-bold text-white mb-6">Cloudflare backbone</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SHARED_INFRA.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-hyper-border bg-hyper-panel/50 p-4 text-center"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-hyper-cyan">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-white break-all">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Homelab */}
        <section id="homelab" className="scroll-mt-24 mb-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-hyper-muted mb-2">Personal infra</h2>
          <p className="text-2xl font-bold text-white mb-6">Hypernova homelab</p>
          <div className="rounded-2xl border border-hyper-border bg-gradient-to-br from-hyper-panel to-hyper-bg p-8 md:p-10">
            <p className="font-mono text-hyper-cyan text-lg font-bold">{HOMELAB.domain}</p>
            <p className="mt-3 text-hyper-muted max-w-xl leading-relaxed">
              {HOMELAB.vms} Oracle Cloud Always Free VMs running Dockerized self-hosted services —
              the same operator mindset behind the Day to Day edge fleet, at personal scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[HOMELAB.platform, ...HOMELAB.stack].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-hyper-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hyper-border py-10">
        <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-hyper-muted">
          <p>
            © {new Date().getFullYear()} Jilu Dileep Kumar · React + Vite · Cloudflare Workers
          </p>
          <p className="font-mono">
            <a href="https://portfolio.hypernova-prime.in" className="text-hyper-cyan hover:underline">
              portfolio.hypernova-prime.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}