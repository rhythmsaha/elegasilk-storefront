import React from "react";
import { Header } from "../header";
import Footer from "../footer/Footer";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../header/sidebar/Sidebar";
import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import AuthGuard from "@/guards/AuthGuard";

interface Props {
    children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
    const isSidebarOpen = useSidebarStore((state) => state.isOpen);

    return (
        <AuthGuard>
            <Header />
            <main className="h-page-main">{children}</main>
            <Footer />
            <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
        </AuthGuard>
    );
};

export default AuthLayout;
