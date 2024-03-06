import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import BrandLogo from "../BrandLogo";
import { useSidebarStore } from "@/store/sidebar/useSidebarStore";

const HeaderLeft = () => {
    const openSidebar = useSidebarStore((state) => state.openSidebar);

    return (
        <div className="flex items-center gap-4">
            <button className="p-2 lg:hidden" onClick={openSidebar}>
                <AiOutlineMenu className="text-2xl" />
            </button>
            <BrandLogo />
        </div>
    );
};

export default HeaderLeft;
