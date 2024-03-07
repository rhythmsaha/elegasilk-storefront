import React, { useState } from "react";
import { INavItem } from "./Sidebar";
import { HiChevronRight } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export interface SidebarMenuItemProps {
    menuItem: INavItem;
    parent?: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
    menuItem,
    parent,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const hasSubmenu = menuItem.subMenu && menuItem.subMenu.length > 0;
    const hasSubmenuProp =
        menuItem.hasSubmenu === "GROUPED" || menuItem.hasSubmenu === "SINGLE";

    const handleClickLink = () => {
        if (menuItem.path) {
            return router.push(menuItem.path);
        } else if (hasSubmenu) {
            setIsOpen((val) => !val);
        }
    };

    return (
        <div>
            <button
                onClick={handleClickLink}
                className={`${parent && "border-b border-gray-800"} ${
                    parent ? "px-6 py-4 bg-gray-900 text-gray-300" : "px-6 py-4"
                } ${isOpen && hasSubmenuProp && "bg-gray-900 !text-white"} ${
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

export default SidebarMenuItem;
