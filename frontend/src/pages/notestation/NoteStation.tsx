// https://www.figma.com/design/hFGfxq5pcrqtQYJgdT1Z5a/Notes-App-UI--Community-?node-id=0-1&p=f&t=UbyTVyK7s2mGtLC5-0

import { FaPlus } from "react-icons/fa";
import { MdInfoOutline, MdMenu, MdOutlineSearch } from "react-icons/md";
import NoteCard from "../../components/ui/notecard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NoteStation() {
    const [showOverlay, setShowOverlay] = useState(false);
    const navigate = useNavigate()
    const handleButtonClick = () => {
        setShowOverlay(true); // فقط یک بار فعال میشه، دیگه برنمی‌گرده
        setTimeout(() => {
            navigate('/note/add');
        }, 1500);
      };
    return (
        <>  
        <div className="screen-flashback"></div>
        {showOverlay && <div className="screen-overlay"></div>}
            <div className="min-h-screen flex flex-col bg-[#252525] relative">

                <div className="fixed top-0 left-0 right-0 h-[8rem] px-5 bg-[#202020] flex justify-between items-center z-10">
                    <h1 className="text-3xl stix sm:text-4xl">Note Station</h1>
                    <div className="flex text-4xl lg:text-5xl gap-4">
                        <MdOutlineSearch className="bg-[#464545] p-2.5 rounded-xl" />
                        <MdInfoOutline className="bg-[#464545] p-2.5 rounded-xl" />
                        <MdMenu className="bg-[#464545] p-2.5 rounded-xl" />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-[9rem] pb-[6rem] px-5 overflow-y-auto space-y-5 sm:gap-x-3 text-xl text-[#131212] ">
                    <NoteCard
                        text="Book Review: The Design of Everyday Things by Don Norman"
                        className="bg-[#FD99FF]"
                    />
                    <NoteCard
                        text="Animes produced by Ufotable"
                        className="bg-[#FF9E9E]"
                    />
                    <NoteCard
                        text="Mangas planned to read"
                        className="bg-[#91F48F]"
                    />
                    <NoteCard
                        text="Awesome tweets collection"
                        className="bg-[#FFF599]"
                    />
                    <NoteCard
                        text="Book Review: The Design of Everyday Things by Don Norman"
                        className="bg-[#FD99FF]"
                    />
                    <NoteCard
                        text="List of free & open source apps"
                        className="bg-[#9EFFFF]"
                    />
                    <NoteCard
                        text="Animes produced by Ufotable"
                        className="bg-[#FF9E9E]"
                    />
                    <NoteCard
                        text="Awesome tweets collection"
                        className="bg-[#FFF599]"
                    />
                    <NoteCard
                        text="Mangas planned to read"
                        className="bg-[#91F48F]"
                    />
                    <NoteCard
                        text="List of free & open source apps"
                        className="bg-[#9EFFFF]"
                    />
                </div>
                
                <button onClick={handleButtonClick} className="btn fixed bottom-10 right-5 flex items-center justify-center shadow-[0px_0px_6px_1px_rgba(22,22,22,1)] rounded-full z-20">
                    <FaPlus className="bg-[#252525] text-[4rem] p-4 rounded-full" />
                </button>
            </div>
        </>
    );
}

export default NoteStation;
