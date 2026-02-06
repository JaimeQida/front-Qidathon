import { api } from "../lib/axios"

export interface Summary {
    case_id: string
    [key: string]: unknown
}

export async function getSummary(caseId: string): Promise<Summary> {
    const { data } = await api.get<Summary>("/api/summary", {
        params: { case_id: caseId },
    })
    return data
}
