import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import React, { useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import NAV_LINKS from "@/lib/NavLinks";
import { motion } from "framer-motion";
import SidebarMenuItem from "./SidebarMenuItem";

export interface INavItem {
    _id: string;
    title: string;
    status?: boolean;
    hasSubmenu?: "GROUPED" | "SINGLE" | "NONE";
    path?: string;
    subMenu?: INavItem[];
}

const Sidebar = () => {
    const closeSidebar = useSidebarStore((state) => state.closeSidebar);
    const isOpen = useSidebarStore((state) => state.isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900 z-30 h-screen overflow-y-auto"
        >
            <div className="flex flex-col h-full">
                <header className="relative flex items-center border-b border-gray-900 justify-center h-16 bg-gray-950">
                    <Image
                        src="/logo_white.svg"
                        alt="Logo"
                        width={250}
                        height={46}
                        className="w-20"
                    />

                    <button
                        onClick={closeSidebar}
                        className="absolute right-4 top-0 bottom-0 flex items-center justify-center"
                    >
                        <AiOutlineClose className="text-2xl text-white" />
                    </button>
                </header>
                <div className="flex-1">
                    {NAV_LINKS.map((menuItem) => (
                        <SidebarMenuItem
                            key={menuItem._id}
                            menuItem={menuItem}
                            parent
                        />
                    ))}
                </div>

                <div className="p-4 text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus est veniam non incidunt quam harum unde illum
                    libero iste. Animi non fugit nobis odit veritatis dolore
                    quas nemo aliquid pariatur.
                </div>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
