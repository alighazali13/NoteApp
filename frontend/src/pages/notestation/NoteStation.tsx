import { FaPlus } from "react-icons/fa";
import NoteCard from "../../components/ui/notecard";
import { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import { apiDeleteNote, apiGetNotes } from "../../services/NoteService";
import type { TNoteList } from "../../@types/note";
import { handleNoteListSorting } from "../../utils/func/note/handleNoteSort";
import bgImage from "../../assets/Notebook-rafiki.png";
import MasterPage from "../../components/layout/masterPage";
import Button from "../../components/ui/button";
import { useRedirect } from "../../utils/func/navigate/redirect";

function NoteStation() {
    const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
    const [showMenu, setShowMenu] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [notes, setNotes] = useState<TNoteList[]>([]);
    const [backgroundImage, setBackgroundImage] = useState(false);
    const redirect = useRedirect();

    const handleButtonClick = () => {
        setShowOverlay(true); 
        redirect({ address: "/note/add" });
    };
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const result = await apiGetNotes();
                result.length > 0 ? setNotes(result) : setBackgroundImage(true);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };
        fetchNotes();
        
    }, [refreshFlag]);

    const menuRef = useRef<HTMLUListElement | null>(null);
    
    // بستن منو هنگام کلیک خارج از آن
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleContextMenu = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setMenuPos({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
        setSelectedNoteId(id)
        console.log(id);
        
    };

    const handleRightClick = () => {
        if (showMenu && selectedNoteId !== null) {
            setShowMenu(false);
            const deleteNote = async () => {

                try {
                    const response = await apiDeleteNote(selectedNoteId)
                    console.log(response)
                    setTimeout(() => {
                        setRefreshFlag(prev => !prev);
                    }, 1000);
                } catch (error) {
                    console.error("Error deleting notes:", error);
                }
            }
            deleteNote()
            console.log(`note ${selectedNoteId} deleted!`)
        }
    };

    return (
        <>
            <MasterPage showOverlay={showOverlay}>
                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 pt-[9rem] pb-[6rem] px-5 overflow-y-auto space-y-5 sm:gap-x-3 text-xl text-[#131212] ">
                    {backgroundImage && <img src={bgImage} alt="" />}
                    {notes.sort(handleNoteListSorting).map((note, idx) => (
                        <div key={idx}>
                            <Link to={`/note/${note.id}`}>
                                <NoteCard
                                    text={note.title}
                                    className={note.color}
                                    onContextMenu={(e) => handleContextMenu(e, note.id)}
                                />
                            </Link>
                            {showMenu && (
                                <ul
                                    ref={menuRef}
                                    style={{
                                        position: "fixed",
                                        top: menuPos.y,
                                        left: menuPos.x,
                                        backgroundColor: "white",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        listStyle: "none",
                                        zIndex: 1000,
                                        minWidth: "150px",
                                    }}
                                >
                                    <li
                                        style={{
                                            padding: "8px",
                                            cursor: "pointer",
                                        }}
                                        onClick={handleRightClick}
                                    >
                                        Delete
                                    </li>
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <Button
                    wrapper={false}
                    onClick={handleButtonClick}
                    icon={
                        <FaPlus className="bg-[#252525] text-[4rem] p-4 rounded-full" />
                    }
                    className="btn fixed bottom-10 right-5 flex items-center justify-center shadow-[0px_0px_6px_1px_rgba(22,22,22,1)] rounded-full z-20"
                />
            </MasterPage>
        </>
    );
}

export default NoteStation;
