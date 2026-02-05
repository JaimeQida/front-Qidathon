import { useState } from "react"
import { Plus } from "lucide-react"

interface AddNoteAreaProps {
  onAddNote: (text: string) => void
}

export function AddNoteArea({ onAddNote }: AddNoteAreaProps) {
  const [inputValue, setInputValue] = useState("")

  function handleClick() {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    onAddNote(trimmed)
    setInputValue("")
  }

  return (
    <div className="flex items-end gap-3 px-4 py-3 w-full border-t border-[var(--border)]">
      {/* Input Wrapper */}
      <div className="flex flex-col gap-1 flex-1">
        <label className="font-secondary text-[11px] font-medium text-[var(--muted-foreground)]">
          Add a new note
        </label>
        <input
          type="text"
          placeholder="Type your note here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
          className="h-14 px-3 py-3 w-full rounded-[var(--radius-m)] bg-[var(--background)] border border-[var(--input)] font-secondary text-[13px] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:ring-2 focus:ring-[var(--ring)]"
          aria-label="Nueva nota"
        />
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={!inputValue.trim()}
        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[var(--radius-m)] bg-[var(--primary)] cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="w-4 h-4 text-[var(--primary-foreground)]" />
        <span className="font-secondary text-[13px] font-semibold text-[var(--secondary-500)]">
          Add
        </span>
      </button>
    </div>
  )
}
