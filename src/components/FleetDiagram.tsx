export function FleetDiagram() {
  return (
    <div className="rounded-2xl border border-hyper-border bg-hyper-panel/60 p-6 md:p-8 font-mono text-xs md:text-sm overflow-x-auto">
      <pre className="text-hyper-muted leading-relaxed whitespace-pre min-w-[320px]">
{`                    ┌─────────────────┐
                    │      FORGE      │
                    │  Asset Command  │
                    │   Node 3 · D1   │
                    └────────┬────────┘
                             │ publishes
           ┌─────────────────┼─────────────────┐
           ▼                 ▼                 ▼
    ┌────────────┐   ┌────────────┐   ┌────────────┐
    │    AERO    │   │   BEACON   │   │  cdn.day   │
    │ Storefront │   │  Signage   │   │ todaybh.com│
    │  Node 2    │   │  Player    │   │  (shared)  │
    └────────────┘   └────────────┘   └────────────┘

    ┌────────────┐   ┌────────────┐   ┌────────────┐
    │    ONYX    │   │    IRIS    │   │   MERIT    │
    │   Raffle   │   │  Cameras   │   │  HR Eval   │
    │  (airgap)  │   │ (branch)   │   │  (Workers) │
    └────────────┘   └────────────┘   └────────────┘`}
      </pre>
    </div>
  );
}