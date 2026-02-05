import { Phone, PhoneOutgoing } from 'lucide-react';

export function LastCallCard() {
  return (
    <div className="flex flex-col flex-1 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden w-full">
      {/* Call Header */}
      <div className="flex items-center justify-between px-4 py-3 w-full">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[var(--primary)]" />
          <span className="font-secondary text-sm font-semibold text-[var(--foreground)]">
            Last Call
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[var(--radius-pill)] bg-[var(--color-success)]">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-success-foreground)]" />
          <span className="font-secondary text-[11px] font-medium text-[var(--color-success-foreground)]">
            Completed
          </span>
        </div>
      </div>

      {/* Call Content */}
      <div className="flex items-center gap-4 px-4 py-3 w-full border-t border-[var(--border)]">
        <div className="flex flex-col gap-1 flex-1">
          <span className="font-secondary text-[13px] font-medium text-[var(--foreground)]">
            January 15, 2025 at 10:30 AM
          </span>
          <span className="font-secondary text-xs text-[var(--muted-foreground)]">
            Duration: 12 min 34 sec
          </span>
        </div>
        <button className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-[var(--radius-m)] bg-[var(--secondary)]">
          <PhoneOutgoing className="w-3.5 h-3.5 text-[var(--foreground)]" />
          <span className="font-secondary text-xs font-medium text-[var(--foreground)]">
            Call Again
          </span>
        </button>
      </div>
    </div>
  );
}
