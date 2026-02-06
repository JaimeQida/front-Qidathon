import { useState, useRef, useEffect, useMemo } from "react"
import { MessageCircle, Send } from "lucide-react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
    getWhatsAppChats,
    createWhatsAppChat,
    type WhatsAppChat,
} from "../../services/communications"

interface Message {
    id: string
    sender: string
    text: string
    time: string
    status: "Read" | "Sent"
    isOwn: boolean
}

function formatTime(date: Date | string) {
    const d = typeof date === "string" ? new Date(date) : date
    return d.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    })
}

const EMISOR_NAME = "Alba"
const RECEPTOR_NAME = "Laura"

function mapChatToMessage(chat: WhatsAppChat): Message {
    const sender = (chat.sender ?? "Unknown").trim()
    const isAlba = sender.toLowerCase() === EMISOR_NAME.toLowerCase()
    return {
        id: chat.id,
        sender: isAlba ? EMISOR_NAME : RECEPTOR_NAME,
        text: chat.text ?? "",
        time: chat.created_at ? formatTime(chat.created_at) : "",
        status: isAlba ? "Sent" : "Read",
        isOwn: isAlba,
    }
}

export function Communication({ caseId = "ABC-123" }: { caseId?: string }) {
    const queryClient = useQueryClient()

    const { data, isLoading, error } = useQuery({
        queryKey: ["whatsapp-chats", caseId],
        queryFn: () => getWhatsAppChats(caseId),
        enabled: !!caseId,
        refetchInterval: 1_000,
    })

    const sendMessageMutation = useMutation({
        mutationFn: createWhatsAppChat,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["whatsapp-chats", caseId] })
        },
    })

    const apiMessages = useMemo(() => {
        const list = Array.isArray(data) ? data : []
        return list.map(mapChatToMessage)
    }, [data])
    const messages = useMemo(() => [...apiMessages].reverse(), [apiMessages])
    const [inputValue, setInputValue] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const trimmed = inputValue.trim()
        if (!trimmed) return

        setInputValue("")
        sendMessageMutation.mutate({
            case_id: caseId,
            text: trimmed,
            date: "2026-02-15:09:30:11",//new Date().toISOString().slice(0, 10),
            sender: EMISOR_NAME,
        })
    }

    const badgeCount = Math.min(messages.length, 99)

    return (
        <div className="flex min-h-0 flex-col w-[340px] flex-5 shrink-0">
            <div className="flex flex-col h-full rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
                {/* Chat Header */}
                <div className="flex items-center justify-between gap-3 px-5 py-4 w-full shrink-0">
                    <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-[var(--color-primary-500)]" />
                        <span className="text-sm font-semibold text-[#2D2D2D]">Comunicación familiar</span>
                    </div>
                    <div className="flex items-center justify-center px-2 py-0.5 rounded-xl bg-[var(--color-primary-500)]">
                        <span className="text-[11px] font-semibold text-white">{badgeCount}</span>
                    </div>
                </div>

                {/* Chat Content - scroll viewport con altura fija vía absolute */}
                <div className="relative min-h-0 flex-1 border-t-2 border-transparent">
                    <div className="absolute inset-0 overflow-x-hidden overflow-y-auto">
                        <div className="flex flex-col gap-3 p-4">
                            {sendMessageMutation.isError && (
                                <p className="text-sm text-red-600 py-2">
                                    {sendMessageMutation.error instanceof Error
                                        ? sendMessageMutation.error.message
                                        : "Error al enviar el mensaje"}
                                </p>
                            )}
                            {error ? (
                                <p className="text-sm text-red-600 py-2">
                                    {error instanceof Error ? error.message : "Error al cargar la conversación"}
                                </p>
                            ) : isLoading ? (
                                <p className="text-sm text-[#8E8E93] py-2">Cargando conversación...</p>
                            ) : (
                                messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex flex-col gap-1 w-full ${msg.isOwn ? "items-end" : ""}`}
                                    >
                                        <div className={`flex items-center gap-2 ${msg.isOwn ? "flex-row-reverse" : ""}`}>
                                            <span className="text-xs font-medium text-[#2D2D2D]">{msg.sender}</span>
                                            <span className="text-xs text-[#8E8E93]">{msg.time}</span>
                                        </div>
                                        <div
                                            className={
                                                msg.isOwn
                                                    ? "rounded-[12px_4px_12px_12px] bg-[rgba(124,144,112,0.08)] px-[14px] py-[10px]"
                                                    : "rounded-[4px_12px_12px_12px] bg-[#F0F4F5] px-[14px] py-[10px]"
                                            }
                                        >
                                            <p className="text-sm text-[#2D2D2D]">{msg.text}</p>
                                        </div>
                                        <div className={`flex items-center gap-1 ${msg.isOwn ? "" : "justify-end"}`}>
                                            <span className="text-[10px] text-[#8E8E93]">{msg.status}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                </div>

                {/* Card Actions - send message */}
                <div className="flex shrink-0 items-center gap-2 h-[68px] px-6 border-t border-[#E5E7EB]">
                    <form onSubmit={handleSubmit} className="flex flex-1 items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Escribe un mensaje..."
                            className="flex-1 min-w-0 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#2D2D2D] placeholder:text-[#8E8E93] outline-none focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-[var(--color-primary-500)]"
                            aria-label="Mensaje"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || sendMessageMutation.isPending}
                            className="flex shrink-0 items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-primary-500)] text-white hover:bg-[#6B7F60] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                            aria-label="Enviar"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
