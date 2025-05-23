import React from "react";
import { MdInfoOutline, MdMenu, MdOutlineSearch } from "react-icons/md";

type TMasterPageProps = {
    children: React.ReactNode;
    showOverlay?: boolean;
};

function MasterPage({ children, showOverlay }: TMasterPageProps) {
    return (
        <>
            <div className="screen-flashback"></div>
            {showOverlay && <div className="screen-overlay"></div>}
            <div className="min-h-screen flex flex-col bg-[#252525] relative">
                {/* Fix Header */}
                <div className="fixed top-0 left-0 right-0 h-[8rem] px-5 bg-[#202020] flex justify-between items-center z-10">
                    <h1 className="text-3xl stix sm:text-4xl">Note Station</h1>
                    <div className="flex text-4xl lg:text-5xl gap-4">
                        <MdOutlineSearch className="bg-[#464545] p-2.5 rounded-xl" />
                        <MdInfoOutline className="bg-[#464545] p-2.5 rounded-xl" />
                        <MdMenu className="bg-[#464545] p-2.5 rounded-xl" />
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}

export default MasterPage;
