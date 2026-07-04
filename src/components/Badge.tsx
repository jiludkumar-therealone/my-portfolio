const STYLES = {
  public: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  gated: 'bg-amber-50 text-amber-800 border-amber-200',
  internal: 'bg-violet-50 text-violet-700 border-violet-200',
  airgap: 'bg-teal-50 text-teal-700 border-teal-200',
} as const;

const LABELS = {
  public: 'Public live',
  gated: 'Zero Trust',
  internal: 'Branch LAN',
  airgap: 'Airgapped',
} as const;

export function Badge({ kind }: { kind: keyof typeof STYLES }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ${STYLES[kind]}`}
    >
      {LABELS[kind]}
    </span>
  );
}