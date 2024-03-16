import React from "react";
import { Header } from "../header";
import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import Sidebar from "../header/sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import BrandLogo from "../header/BrandLogo";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Footer from "../footer/Footer";

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    return (
        <>
            <Header />
            <main className="h-page-main">{children}</main>
            <Footer />
            <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
        </>
    );
};

export default MainLayout;
