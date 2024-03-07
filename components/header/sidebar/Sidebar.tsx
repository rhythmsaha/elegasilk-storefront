import { useSidebarStore } from "@/store/sidebar/useSidebarStore";
import React, { useEffect } from "react";
import Image from "next/image";
import {
    AiOutlineClose,
    AiOutlineHeart,
    AiOutlineLogout,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import NAV_LINKS from "@/lib/NavLinks";
import { motion } from "framer-motion";
import SidebarMenuItem from "./SidebarMenuItem";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";
import { useAuthStore } from "@/store/auth/useAuthStore";
import { useRouter } from "next/router";

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
    const AuthStatus = useAuthStore((state) => state.authStatus);
    const isAuthenticated = AuthStatus === "AUTHENTICATED";
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    useEffect(() => {
        // Close the sidebar whenever a route change completes
        const handleRouteChange = () => {
            closeSidebar();
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        // Clean up the event listener when the component is unmounted
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router, closeSidebar]);

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

                    {isAuthenticated && (
                        <div className="">
                            <Link href="" className="sidebar-item">
                                <AiOutlineHeart className="mr-2 text-lg" />
                                Wishlist
                            </Link>

                            <Link href="" className="sidebar-item">
                                <IoBagCheckOutline className="mr-2 text-lg" />
                                My Orders
                            </Link>

                            <Link href="" className="sidebar-item">
                                <AiOutlineUser className="mr-2 text-lg" />
                                My Account
                            </Link>

                            <button
                                className="flex w-full items-center px-6 py-4 bg-gray-900 text-gray-300 border-b border-gray-800"
                                onClick={logout}
                            >
                                <AiOutlineLogout className="mr-2 text-lg" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>

                <div className="p-4">
                    {isAuthenticated ? (
                        <div className="text-gray-300 text-sm capitalize">
                            Welcome, {user?.firstName} {user?.lastName}
                        </div>
                    ) : (
                        <>
                            <div className="text-gray-300 mb-4 max-w-96">
                                Not a Member Yet? Join Elegasilk for great
                                discounts and exclusive member benefits &
                                offers.
                            </div>

                            <Link
                                href="/login"
                                className="sidebar-auth-item bg-white text-gray-900"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="sidebar-auth-item bg-gray-900 text-white mt-3"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
