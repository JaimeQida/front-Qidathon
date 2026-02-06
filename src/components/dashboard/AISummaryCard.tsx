import { useQuery } from "@tanstack/react-query"
import { Sparkles, RefreshCcw, Loader2 } from "lucide-react"
import { getSummary } from "../../services/summary"

interface AISummaryCardProps {
  caseId?: string
}

export function AISummaryCard({ caseId = "ABC-123" }: AISummaryCardProps) {
  const {
    data: summary,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["summary", caseId],
    queryFn: () => getSummary(caseId),
    enabled: !!caseId,
  })


  return (
    <div className="flex flex-col flex-1 max-h-[400px] rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* AI Header */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 w-full">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#9B8AA8]" />
          <span className="text-sm font-semibold text-[#2D2D2D]">
            Resumen generado por AINara
          </span>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex items-center gap-1.5 rounded-lg bg-[#7C3AED] px-3 py-1.5 text-[11px] font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-70"
        >
          {isFetching ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <RefreshCcw className="w-3.5 h-3.5" />
          )}
          Actualizar
        </button>
      </div>

      {/* AI Content - scroll cuando hay mucho texto */}
      <div className="flex flex-col  min-h-0 flex-1 overflow-y-auto border-t-2 border-transparent bg-[#F5F3FF]">
        <div className="flex flex-col gap-3 w-full p-5">
          {isLoading && (
            <div className="flex items-center justify-center gap-2 py-6">
              <Loader2 className="w-5 h-5 animate-spin text-white" />
              <span className="text-sm text-white">Cargando resumen...</span>
            </div>
          )}
          {isError && (
            <p className="text-sm text-red-100">
              {error instanceof Error ? error.message : "Error al cargar el resumen"}
            </p>
          )}
          {!isLoading && !isError && summary?.summary === null && (
            <p className="text-sm text-[#2D2D2D]">No hay resumen disponible.</p>
          )}
          <p className="text-sm text-[#2D2D2D] whitespace-pre-line">
            {formatSummaryText((summary?.summary as string) ?? "")}
          </p>
        </div>
      </div>
    </div>
  )
}

function formatSummaryText(html: string): string {
  const withoutTags = html.replace(/<[^>]*>/g, " ")
  const normalizedSpaces = withoutTags.replace(/[ \t]+/g, " ").replace(/\n\s*\n/g, "\n\n").trim()
  return decodeHtmlEntities(normalizedSpaces)
}

function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&nbsp;": " ",
    "&apos;": "'",
  }
  return text.replace(/&[#\w]+;?/g, (match) => entities[match] ?? match)
}
