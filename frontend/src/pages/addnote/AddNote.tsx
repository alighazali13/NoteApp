import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { apiCreateNote } from "../../services/NoteService";
import MasterPage from "../../components/layout/masterPage";
import Button from "../../components/ui/button";
import TextArea from "../../components/ui/textarea";
import { useRedirect } from "../../utils/func/navigate/redirect";
import { handleNoteColor } from "../../utils/func/note/randomizeColor";

function AddNote() {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const [noteContent, setNoteContent] = useState<string>("");
    const [noteTitle, setNoteTitle] = useState<string>("");
    const redirect = useRedirect();

    const autoResize = (el: any) => {
        el.style.height = "auto"; // reset
        el.style.height = el.scrollHeight + "px"; // set to scroll height
    };

    const sendData = () => {
        const data = {
            title: noteTitle,
            note: noteContent,
            color: handleNoteColor(),
        };
        const addNote = async () => {
            try {
                await apiCreateNote(data);
            } catch (error) {
                console.error(`Error adding new note`);
            }
        };
        addNote();
        redirect({address:'/notes'});
    };

    return (
        <>
            <MasterPage>
                <TextArea
                    wrapper={true}
                    className="text-4xl bg-transparent p-2"
                    ref={titleRef}
                    onInput={(e) => autoResize(e.target)}
                    placeholder="Title"
                    onChange={(e) => setNoteTitle(e.target.value)}
                    wrapperProps={{className:"pt-[8rem] mt-2 px-2"}}
                />
                <TextArea
                    wrapper={true}
                    className="text-base p-4"
                    ref={contentRef}
                    onInput={(e) => autoResize(e.target)}
                    placeholder="Type something ..."
                    onChange={(e) => setNoteContent(e.target.value)}
                    wrapperProps={{className:"pt-2 px-2 overflow-y-auto flex-1"}}
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

export default AddNote;
