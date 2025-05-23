import type { TNote, TNoteDetail, TNoteList, TNoteSchema } from "../@types/note";
import { client } from "./Config";

export async function apiGetNotes(): Promise<TNoteList[]> {
    const response = await client.get<TNoteList[]>(`note/getNoteList/`);
    return response.data;
}

export async function apiGetNoteDetails(id : string): Promise<TNoteDetail> {
    const response = await client.get<TNoteDetail>(`note/getNote/${id}`);
    return response.data
}

export async function apiUpdateNote(data: TNoteSchema){
    const response = await client.patch(`note/updateNote/${data.id}`, {
        title : data.title,
        note : data.note
    })
    return response
}

export async function apiCreateNote(data:TNote) {
    const response = await client.post('note/createNote',{
        title : data.title,
        note : data.note,
        color : data.color,
    })

    return response
}

export async function apiDeleteNote(id:string) {
    const response = await client.delete(`note/deleteNote/${id}`)
    return response
}