import { useCallback } from "react"
import { Pencil } from "lucide-react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getNotes, createNote } from "../../services/notes"
import { AddNoteArea } from "./AddNoteArea"
import { NoteList } from "./NoteList"

interface PersonalNotesProps {
  caseId?: string
  sender?: string
}

export function PersonalNotes({
  caseId = "CASE-001",
  sender = "user@local",
}: PersonalNotesProps) {
  const queryClient = useQueryClient()

  const { data: notes, isLoading } = useQuery({
    queryKey: ["notes", caseId],
    queryFn: () => getNotes(caseId),
    enabled: !!caseId,
  })

  const saveMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes", caseId] })
    },
  })

  const handleAddNote = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      saveMutation.mutate({
        case_id: caseId,
        text: trimmed,
        date: new Date().toISOString().slice(0, 10),
        sender,
      })
    },
    [caseId, sender, saveMutation]
  )

  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Header - fijo arriba */}
      <div className="flex shrink-0 items-center justify-between gap-3 px-5 py-4 w-full border-b border-transparent">
        <div className="flex items-center gap-2">
          <Pencil className="w-4 h-4 text-[#7C9070]" />
          <span className="text-sm font-semibold text-[#2D2D2D]">Personal Notes</span>
        </div>
        <span
          className={`text-[11px] ${saveMutation.isError ? "text-red-600" : "text-[#7C9070]"}`}
        >
          {saveMutation.isError
            ? (saveMutation.error instanceof Error
              ? saveMutation.error.message
              : "Error al guardar")
            : saveMutation.isPending
              ? "Guardando..."
              : "Auto-saved"}
        </span>
      </div>

      {/* Lista de notas - con scroll */}
      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        <NoteList notes={notes ?? []} isLoading={isLoading} />
      </div>

      {/* AddNoteArea - fijo abajo */}
      <div className="shrink-0 border-t border-[var(--border)]">
        <AddNoteArea onAddNote={handleAddNote} />
      </div>
    </div>
  )
}
