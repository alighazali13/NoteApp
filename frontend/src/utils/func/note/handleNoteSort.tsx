import type { TNoteList } from "../../../@types/note";

export const handleNoteListSorting = (a: TNoteList, b: TNoteList) => {
    // جدیدترین زمان بین created_at و edited_at برای هر نوت
    const aEdited = a.edited_at ? new Date(a.edited_at) : new Date(0);
    const bEdited = b.edited_at ? new Date(b.edited_at) : new Date(0);
    const aCreated = new Date(a.created_at);
    const bCreated = new Date(b.created_at);

    const aLatest = aEdited > aCreated ? aEdited : aCreated;
    const bLatest = bEdited > bCreated ? bEdited : bCreated;

    // مرتب‌سازی نزولی: جدیدترین اول
    return bLatest.getTime() - aLatest.getTime();
};
