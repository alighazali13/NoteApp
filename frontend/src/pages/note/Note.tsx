import { MdInfoOutline, MdMenu, MdOutlineSearch } from "react-icons/md";

import { useRef } from "react";
import { FaCheck } from "react-icons/fa";

function Note() {
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const autoResize = (el:any) => {
        el.style.height = "auto"; // reset
        el.style.height = el.scrollHeight + "px"; // set to scroll height
    };
    return (
        <>
            <div className="screen-flashback"></div>

            <div className="min-h-screen flex flex-col bg-[#252525] relative">
            {/* هدر */}
            <div className="fixed top-0 left-0 right-0 h-[8rem] px-5 bg-[#202020] flex justify-between items-center z-10">
                <h1 className="text-3xl stix sm:text-4xl">Note Station</h1>
                <div className="flex text-4xl lg:text-5xl gap-4">
                    <MdOutlineSearch className="bg-[#464545] p-2.5 rounded-xl" />
                    <MdInfoOutline className="bg-[#464545] p-2.5 rounded-xl" />
                    <MdMenu className="bg-[#464545] p-2.5 rounded-xl" />
                </div>
            </div>

            {/* Title */}
            <div className="pt-[8rem] mt-2 px-2">
                <textarea
                    ref={titleRef}
                    onInput={(e) => autoResize(e.target)}
                    className="w-full text-4xl  placeholder:text-[#868686] outline-none bg-transparent text-white resize-none p-2"
                    placeholder="Title"
                ></textarea>
            </div>

            {/* Main Content */}
            <div className="pt-2 px-2 overflow-y-auto flex-1">
                <textarea
                    ref={contentRef}
                    onInput={(e) => autoResize(e.target)}
                    className="w-full text-base  outline-none placeholder:text-[#868686] text-white resize-none p-4"
                    placeholder="Type something ..."
                />
            </div>

            {/* دکمه */}
            <button className="btn fixed bottom-10 right-5 flex items-center justify-center shadow-[0px_0px_6px_1px_rgba(22,22,22,1)] rounded-full z-20">
                <FaCheck className="bg-[#252525] text-[4rem] p-4 rounded-full" />
            </button>
        </div>
        </>
    );
}

export default Note;
