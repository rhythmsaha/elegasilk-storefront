import React from "react";
import { Header } from "../header";
import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import Sidebar from "../header/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    return (
        <>
            <Header />
            {children}
            <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
        </>
    );
};

export default MainLayout;
