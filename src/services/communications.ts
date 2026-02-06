import { api } from "../lib/axios"

export interface WhatsAppChat {
  id: string
  case_id: string
  sender?: string
  text?: string
  created_at?: string
  is_own?: boolean
  [key: string]: unknown
}

export interface CreateWhatsAppChatPayload {
  case_id: string
  text: string
  date: string
  sender: string
}

export async function getWhatsAppChats(caseId: string): Promise<WhatsAppChat[]> {
  const { data } = await api.get<WhatsAppChat[]>("/api/whatsapp-chats", {
    params: { case_id: caseId },
  })
  return data
}

export async function createWhatsAppChat(
  payload: CreateWhatsAppChatPayload
): Promise<WhatsAppChat> {
  const { data } = await api.post<WhatsAppChat>("/api/whatsapp-chats", payload)
  return data
}
