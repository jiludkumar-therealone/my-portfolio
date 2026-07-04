import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CAREER_ARC, LEARNING, PROFILE, SIDE_PROJECT } from '../data/about';
import { scrollToSection } from '../utils/scrollToSection';
import { EDUCATION, EXPERIENCE } from '../data/experience';
import { FLEET, HOMELAB, SHARED_INFRA } from '../data/fleet';
import { CERTIFICATIONS, SKILL_GROUPS } from '../data/skills';
import { AnimateIn } from '../components/AnimateIn';
import { ExperienceCard } from '../components/ExperienceCard';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';

const GITHUB = 'https://github.com/jiludkumar-therealone';
const LINKEDIN = 'https://linkedin.com/in/jilu-d-kumar';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToSection(hash), 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-dvh">
      <Header />

      <main>
        {/* Hero */}
        <section className="section-pad hero-bg border-b border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 hero-enter">
            <p className="section-label">Portfolio</p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-ink-secondary font-medium max-w-2xl">
              {PROFILE.title} at {PROFILE.org}
            </p>
            <p className="mt-3 prose-body max-w-2xl">{PROFILE.tagline}</p>
            <p className="mt-2 text-sm text-ink-muted">{PROFILE.location}</p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-primary text-center rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent-dark"
              >
                View projects
              </a>
              <a
                href="#experience"
                className="btn-secondary text-center rounded-xl border border-border-strong bg-surface-raised px-6 py-3 text-sm font-semibold text-ink hover:border-accent/40"
              >
                Work history
              </a>
              <a
                href="https://daytodaybh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center rounded-xl border border-border-strong bg-surface-raised px-6 py-3 text-sm font-semibold text-ink-secondary hover:border-accent/40"
              >
                Live storefront 
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-pad scroll-mt-nav">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimateIn>
              <p className="section-label">About</p>
              <h2 className="section-title">{CAREER_ARC.headline}</h2>
            </AnimateIn>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
              <AnimateIn delay={80} className="space-y-5">
                {CAREER_ARC.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="prose-body">
                    {p}
                  </p>
                ))}
              </AnimateIn>

              <div className="space-y-5">
                <AnimateIn delay={160}>
                  <div className="card card-interactive p-5 md:p-6">
                    <p className="section-label text-[10px]">Education</p>
                    <h3 className="mt-2 font-bold text-ink">{EDUCATION.degree}</h3>
                    <p className="text-sm text-ink-secondary mt-1">{EDUCATION.school}</p>
                    <p className="text-sm text-ink-muted mt-2">
                      {EDUCATION.period} | {EDUCATION.detail}
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delay={240}>
                  <div className="card card-interactive p-5 md:p-6 border-accent/20 bg-accent-light/20">
                    <p className="section-label text-[10px]">On the horizon</p>
                    <h3 className="mt-2 font-bold text-ink">{SIDE_PROJECT.name}</h3>
                    <p className="text-sm text-ink-secondary mt-2 leading-relaxed">{SIDE_PROJECT.note}</p>
                    <a
                      href={SIDE_PROJECT.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-accent hover:underline underline-offset-4"
                    >
                      worldwaystoursandtravels.com 
                    </a>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section-pad scroll-mt-nav bg-surface-muted/60 border-y border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimateIn>
              <p className="section-label">Experience</p>
              <h2 className="section-title">Work history</h2>
              <p className="mt-3 prose-body max-w-2xl">
                Five years of enterprise ServiceNow delivery at Infosys and PwC, then relocation to
                Bahrain to build retail platform systems end-to-end.
              </p>
            </AnimateIn>

            <div className="mt-8 space-y-4">
              {EXPERIENCE.map((entry, i) => (
                <AnimateIn key={entry.period + entry.role} delay={i * 70}>
                  <ExperienceCard entry={entry} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & certifications */}
        <section id="skills" className="section-pad scroll-mt-nav">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimateIn>
              <p className="section-label">Skills</p>
              <h2 className="section-title">Technical toolkit</h2>
            </AnimateIn>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SKILL_GROUPS.map((group, i) => (
                <AnimateIn key={group.category} delay={i * 60}>
                  <div className="card card-interactive p-5 h-full">
                    <h3 className="text-sm font-bold text-ink">{group.category}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-chip rounded-md bg-surface-muted px-2 py-1 text-xs text-ink-secondary border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}

              <AnimateIn delay={SKILL_GROUPS.length * 60} className="sm:col-span-2 lg:col-span-1">
                <div className="card card-interactive p-5 h-full">
                  <h3 className="text-sm font-bold text-ink">Currently learning</h3>
                  <ul className="mt-3 space-y-2">
                    {LEARNING.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink-secondary">
                        <span className="text-accent shrink-0 font-bold">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={100} className="mt-10">
              <h3 className="text-lg font-bold text-ink">Certifications</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="card card-interactive p-5">
                  <p className="text-xs uppercase tracking-widest text-ink-muted mb-3 font-semibold">
                    Mainline
                  </p>
                  <ul className="space-y-2">
                    {CERTIFICATIONS.mainline.map((c) => (
                      <li key={c} className="text-sm text-ink-secondary flex gap-2">
                        <span className="text-accent font-bold">+</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card card-interactive p-5">
                  <p className="text-xs uppercase tracking-widest text-ink-muted mb-3 font-semibold">
                    ServiceNow micro-certifications
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {CERTIFICATIONS.micro.map((c) => (
                      <span
                        key={c}
                        className="skill-chip rounded-md bg-surface-muted px-2 py-1 text-xs text-ink-secondary border border-border"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-pad scroll-mt-nav bg-surface-muted/60 border-y border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimateIn>
              <p className="section-label">Day to Day fleet</p>
              <h2 className="section-title">Codename projects</h2>
              <p className="mt-3 prose-body max-w-2xl">
                Six production systems I architect and maintain for Day to Day Discount Center -
                from Cloudflare edge to branch LAN tooling.
              </p>
            </AnimateIn>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {FLEET.map((p, i) => (
                <AnimateIn key={p.codename} delay={i * 80}>
                  <ProjectCard project={p} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Shared infra */}
        <section className="section-pad">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimateIn>
              <p className="section-label">Infrastructure</p>
              <h2 className="section-title">Cloudflare backbone</h2>
            </AnimateIn>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {SHARED_INFRA.map((item, i) => (
                <AnimateIn key={item.label} delay={i * 60}>
                  <div className="card card-interactive p-4 text-center h-full">
                    <p className="text-xs uppercase tracking-widest text-accent font-bold">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink break-all">{item.value}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Homelab */}
        <section id="homelab" className="section-pad scroll-mt-nav bg-surface-muted/60 border-t border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <AnimateIn>
              <p className="section-label">Personal infra</p>
              <h2 className="section-title">Hypernova homelab</h2>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="mt-6 card card-interactive p-6 md:p-8">
                <p className="text-accent text-xl font-bold">{HOMELAB.domain}</p>
                <p className="mt-3 prose-body max-w-2xl">
                  Three Ubuntu VMs on Oracle Cloud Always Free -{' '}
                  <strong className="text-ink font-semibold">Orion</strong>,{' '}
                  <strong className="text-ink font-semibold">Argus</strong>, and{' '}
                  <strong className="text-ink font-semibold">Apollo</strong> - running Dockerized
                  self-hosted services. Tailscale mesh is live; Headscale is on my learning path.
                </p>

                <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-3">
                  {HOMELAB.vms.map((vm, i) => (
                    <AnimateIn key={vm.name} delay={160 + i * 80}>
                      <div className="vm-tile rounded-xl border border-border bg-surface-muted px-4 py-4 text-center">
                        <p className="text-base font-bold text-accent">{vm.name}</p>
                        <p className="mt-1 text-xs text-ink-muted uppercase tracking-wide font-medium">
                          {vm.os}
                        </p>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="skill-chip rounded-full border border-border bg-surface-muted px-3 py-1 text-sm text-ink-secondary font-medium">
                    {HOMELAB.platform}
                  </span>
                  {HOMELAB.stack.map((t) => (
                    <span
                      key={t}
                      className="skill-chip rounded-full border border-border bg-surface-muted px-3 py-1 text-sm text-ink-secondary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {HOMELAB.learning.map((t) => (
                    <span
                      key={t}
                      className="skill-chip rounded-full border border-accent/30 bg-accent-light px-3 py-1 text-sm text-accent-dark font-medium"
                    >
                      {t} (learning)
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Contact */}
        <section className="section-pad border-t border-border">
          <AnimateIn className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-ink">Get in touch</h2>
            <p className="mt-3 text-ink-secondary text-sm md:text-base">
              Open to platform engineering and internal tools opportunities.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-primary rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent-dark"
              >
                {PROFILE.email}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary rounded-xl border border-border-strong px-6 py-3 text-sm font-semibold text-ink-secondary hover:border-accent/40"
              >
                LinkedIn 
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary rounded-xl border border-border-strong px-6 py-3 text-sm font-semibold text-ink-secondary hover:border-accent/40"
              >
                GitHub 
              </a>
            </div>
          </AnimateIn>
        </section>
      </main>

      <footer className="border-t border-border py-8 bg-surface-raised">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-muted">
          <p>Copyright {new Date().getFullYear()} {PROFILE.name}</p>
          <p>
            <a href="https://portfolio.hypernova-prime.in" className="text-accent hover:underline font-medium">
              portfolio.hypernova-prime.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
