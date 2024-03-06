import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import NAV_LINKS from "@/lib/NavLinks";
import { Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { RiDropdownList } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import {
    HiChevronDoubleDown,
    HiChevronDown,
    HiChevronRight,
    HiChevronUp,
} from "react-icons/hi2";

interface Props {}

export interface INavItem {
    _id: string;
    title: string;
    status?: boolean;
    hasSubmenu?: "GROUPED" | "SINGLE" | "NONE";
    path?: string;
    subMenu?: INavItem[];
}

export interface SidebarMenuItemProps {
    menuItem: INavItem;
    parent?: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    menuItem,
    parent,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubmenu = menuItem.subMenu && menuItem.subMenu.length > 0;
    const hasSubmenuProp =
        menuItem.hasSubmenu === "GROUPED" || menuItem.hasSubmenu === "SINGLE";

    return (
        <div>
            <button
                onClick={() => hasSubmenu && setIsOpen((val) => !val)}
                className={`${parent && "border-b border-gray-800"} ${
                    parent ? "px-6 py-4 bg-gray-900 text-gray-300" : "px-6 py-4"
                } ${isOpen && hasSubmenuProp && "bg-gray-950 !text-white"} ${
                    isOpen && !parent ? "font-medium" : ""
                } w-full text-left flex items-center justify-between`}
            >
                {menuItem.title}
                {hasSubmenu && (
                    <span
                        className={`${
                            isOpen && "rotate-90 transition duration-100"
                        }`}
                    >
                        <HiChevronRight />
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && hasSubmenu && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.1 }}
                        className={`overflow-hidden text-sm ${
                            parent
                                ? "bg-gray-950 text-gray-300"
                                : "bg-slate-950 pl-4"
                        } `}
                    >
                        {menuItem.subMenu?.map((subMenuItem, index) => (
                            <SidebarMenuItem
                                key={index}
                                menuItem={subMenuItem}
                                parent={false}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Sidebar = (props: Props) => {
    const closeSidebar = useSidebarStore((state) => state.closeSidebar);

    return (
        <aside className="fixed inset-0 bg-gray-900 z-30">
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

            <div className="">
                {NAV_LINKS.map((menuItem) => (
                    <SidebarMenuItem
                        key={menuItem._id}
                        menuItem={menuItem}
                        parent
                    />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
