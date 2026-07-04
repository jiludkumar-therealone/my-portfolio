const STYLES = {
  public: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  gated: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  internal: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  airgap: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
} as const;

const LABELS = {
  public: 'Public live',
  gated: 'Zero Trust',
  internal: 'Branch LAN',
  airgap: 'Airgapped',
} as const;

export function Badge({ kind }: { kind: keyof typeof STYLES }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ${STYLES[kind]}`}>
      {LABELS[kind]}
    </span>
  );
}