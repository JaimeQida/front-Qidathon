import type { Note } from "../../services/notes"

interface NoteListProps {
  notes: Note[]
  isLoading?: boolean
}

function formatNoteDate(dateStr: string): string {
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  } catch {
    return dateStr
  }
}

export function NoteList({ notes, isLoading }: NoteListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 py-2">
        <div className="h-12 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-12 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-12 animate-pulse rounded-lg bg-gray-100" />
      </div>
    )
  }

  if (!notes?.length) {
    return (
      <p className="py-4 text-center text-sm text-gray-500">
        No hay notas. Añade una con el formulario de abajo.
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-2 overflow-y-auto">
      {notes.map((note) => (
        <li
          key={note.id}
          className="rounded-lg border border-gray-200 bg-white p-3 text-left"
        >
          <p className="text-sm text-gray-900">{note.text}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span>{formatNoteDate(note.date)}</span>
            {note.sender && (
              <>
                <span>·</span>
                <span>{note.sender}</span>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
