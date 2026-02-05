interface NoteItemProps {
  title: string;
  date: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function NoteItem({ title, date, isActive = false, onClick }: NoteItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col gap-1 p-2.5 w-full rounded-[var(--radius-m)] text-left transition-colors cursor-pointer ${isActive
          ? 'bg-[var(--secondary)]'
          : 'bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--secondary)]'
        }`}
    >
      <span className="font-secondary text-xs font-semibold text-[var(--foreground)]">
        {title}
      </span>
      <span className="font-secondary text-[10px] text-[var(--muted-foreground)]">
        {date}
      </span>
    </button>
  );
}
