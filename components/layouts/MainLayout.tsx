import React from "react";
import { Header } from "../header";
import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import Sidebar from "../header/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import BrandLogo from "../header/BrandLogo";

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

            <footer className="bg-gray-950 text-center text-white p-10">
                <main className="max-w-screen-2xl mx-auto w-11/12">
                    <section>
                        <BrandLogo white />
                        <div>Address: Park Street Kolkata</div>
                    </section>
                    <section></section>
                    <section></section>
                    <section></section>
                </main>
            </footer>
        </>
    );
};

export default MainLayout;
