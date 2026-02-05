import { useState, useRef, useCallback, useEffect } from "react"
import { Pencil } from "lucide-react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getNotes, createNote } from "../../services/notes"

const SAVE_DELAY_MS = 1500

interface PersonalNotesProps {
  caseId?: string
  sender?: string
}

function getLatestNoteText(notes: { text: string; date: string }[]): string {
  if (notes.length === 0) return ""
  const sorted = [...notes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return sorted[0].text
}

export function PersonalNotes({
  caseId = "CASE-001",
  sender = "user@local",
}: PersonalNotesProps) {
  const [userText, setUserText] = useState("")
  const [hasEdited, setHasEdited] = useState(false)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const latestTextRef = useRef("")

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

  const scheduleSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      saveTimeoutRef.current = null
      const text = latestTextRef.current.trim()
      if (!text) return
      saveMutation.mutate({
        case_id: caseId,
        text,
        date: new Date().toISOString().slice(0, 10),
        sender,
      })
    }, SAVE_DELAY_MS)
  }, [caseId, sender, saveMutation])

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    }
  }, [])

  const displayValue = hasEdited
    ? userText
    : (notes?.length ? getLatestNoteText(notes) : "")

  const handleChange = (value: string) => {
    setHasEdited(true)
    setUserText(value)
    latestTextRef.current = value
    scheduleSave()
  }

  return (
    <div className="flex flex-col h-[320px] rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Notes Header */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 w-full">
        <div className="flex items-center gap-2">
          <Pencil className="w-4 h-4 text-[#7C9070]" />
          <span className="text-sm font-semibold text-[#2D2D2D]">Personal Notes</span>
        </div>
        <span
          className={`text-[11px] ${saveMutation.isError ? "text-red-600" : "text-[#7C9070]"
            }`}
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

      {/* Notes Content */}
      <div className="flex flex-col h-full p-5 border-t-2 border-transparent">
        <div className="flex flex-col gap-1.5 h-full w-full border border-transparent">
          <div className="flex items-center gap-2 w-full border border-transparent" />
          <div
            className={`flex flex-col gap-2 h-full px-4 py-2 rounded-[var(--radius-m)] bg-white border ${saveMutation.isError ? "border-red-500" : "border-[var(--input)]"
              }`}
          >
            <textarea
              className="w-full h-full resize-none text-sm text-[#2D2D2D] bg-transparent border-none outline-none disabled:opacity-70"
              placeholder={isLoading ? "Cargando notas..." : "Write your notes here..."}
              value={displayValue}
              onChange={(e) => handleChange(e.target.value)}
              disabled={isLoading}
              aria-label="Notas personales"
            />
          </div>
        </div>
      </div>

      {/* Card Actions (disabled) */}
      <div className="flex items-center gap-2 h-[68px] px-6 border-t border-transparent opacity-0" />
    </div>
  )
}
