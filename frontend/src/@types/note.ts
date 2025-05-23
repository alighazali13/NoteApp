import type { TAccount } from "./auth";

export type TNote = {
    title: string;
    note : string;
    color: string;
}

export type TNoteList = {
    id: string;
    account: TAccount;
    title: string;
    color: string;
    created_at: Date;
    edited_at: Date;
};

export type TNoteDetail = {
    id: string;
    title: string;
    note: string;
    color: string;
    created_at: Date;
    edited_at: Date;
};

export type TNoteSchema = {
    id: string | undefined;
    title : string;
    note : string;
}