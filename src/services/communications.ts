import { api } from "../lib/axios"

export interface WhatsAppChat {
    id: string
    case_id: string
    [key: string]: unknown
}

export async function getWhatsAppChats(caseId: string): Promise<WhatsAppChat[]> {
    const { data } = await api.get<WhatsAppChat[]>("/api/whatsapp-chats", {
        params: { case_id: caseId },
    })
    return data
}
