import React from "react";
import { Header } from "../header";
import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import Sidebar from "../header/sidebar/Sidebar";

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    return (
        <>
            <Header />
            {isSidebarOpen && <Sidebar />}
            {children}
        </>
    );
};

export default MainLayout;
