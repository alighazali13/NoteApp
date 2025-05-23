import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { apiGetNoteDetails, apiUpdateNote } from "../../services/NoteService";
import MasterPage from "../../components/layout/masterPage";
import { useRedirect } from "../../utils/func/navigate/redirect";
import TextArea from "../../components/ui/textarea";
import Button from "../../components/ui/button";

function Note() {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const params = useParams();
    const [noteContent, setNoteContent] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const redirect = useRedirect();

    const autoResize = (el: any) => {
        el.style.height = "auto"; // reset
        el.style.height = el.scrollHeight + "px"; // set to scroll height
    };

    useEffect(() => {
        const fetchNote = async () => {
            try {
                if (!params.id) return;
                const result = await apiGetNoteDetails(params.id);
                setNoteContent(result?.note);
                setNoteTitle(result?.title);
            } catch (error) {
                console.error("Error fetching note details");
            }
        };
        fetchNote();
    }, [params.id]);
    
    useEffect(() => {
        if (titleRef.current) {
            autoResize(titleRef.current);
        }
        if (contentRef.current) {
            autoResize(contentRef.current);
        }
    }, [noteTitle, noteContent]);

    const sendData = () => {
        const data = {
            id: params.id,
            title: noteTitle,
            note: noteContent,
        };
        const updateNote = async () => {
            try {
                await apiUpdateNote(data);
            } catch (error) {
                console.error(`Error updating note ${params.id}`);
            }
        };
        updateNote();
        redirect({address:'/notes'})
    };

    return (
        <>
            <MasterPage>
                <TextArea
                    wrapper={true}
                    className="text-4xl bg-transparent p-2 "
                    ref={titleRef}
                    onInput={(e) => autoResize(e.target)}
                    placeholder="Title"
                    onChange={(e) => setNoteTitle(e.target.value)}
                    wrapperProps={{className:"pt-[8rem] mt-2 px-2"}}
                    value={noteTitle}
                />
                <TextArea
                    wrapper={true}
                    className="text-base p-4"
                    ref={contentRef}
                    onInput={(e) => autoResize(e.target)}
                    placeholder="Type something ..."
                    onChange={(e) => setNoteContent(e.target.value)}
                    wrapperProps={{className:"pt-2 px-2 overflow-y-auto flex-1"}}
                    value={noteContent}
                />
                <Button
                    wrapper={false}
                    onClick={sendData}
                    icon={
                        <FaCheck className="bg-[#252525] text-[4rem] p-4 rounded-full" />
                    }
                    className="btn fixed bottom-10 right-5 flex items-center justify-center shadow-[0px_0px_6px_1px_rgba(22,22,22,1)] rounded-full z-20"
                />
            </MasterPage>
        </>
    );
}

export default Note;
