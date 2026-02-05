import { api } from "../lib/axios"

export interface CreateNotePayload {
    case_id: string
    text: string
    date: string
    sender: string
}

export interface Note {
    id: string
    case_id: string
    text: string
    date: string
    sender: string
    created_at?: string
}

export async function getNotes(caseId: string): Promise<Note[]> {
    const { data } = await api.get<Note[]>("/api/notes", {
        params: { case_id: caseId },
    })
    return data
}

export async function createNote(payload: CreateNotePayload): Promise<Note> {
    const { data } = await api.post<Note>("/api/notes", payload)
    return data
}
