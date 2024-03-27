import React, { useEffect, useState } from "react";
import NavigationMenu from "./Desktop/nav_menu/NavigationMenu";
import UserMenu from "./Desktop/usermenu/UserMenu";
import { useAuthStore } from "@/store/auth/useAuthStore";
import NAV_LINKS from "@/lib/NavLinks";
import HeaderLeft from "./Desktop/HeaderLeft";
import SearchButton from "./SearchButton";
import WishListButton from "./WishListButton";
import CartButton from "./CartButton";
import useCartStore from "@/store/cart/useCartStore";
import { useSearchbarStore } from "@/store/search/useSearchBarStore";
import Searchbar from "./Searchbar";
import { AnimatePresence } from "framer-motion";

interface Props {}

const Header: React.FC<Props> = () => {
    const { isOpen: searchOpen, open: OpenSearchHandler } = useSearchbarStore((state) => state);

    const isAuthenticated = useAuthStore((state) => state.authStatus) === "AUTHENTICATED";
    const { isLoading: cartLoading, totalQuantity, getCart } = useCartStore((state) => state);

    useEffect(() => {
        if (!isAuthenticated) return;
        getCart();
    }, [getCart, isAuthenticated]);

    return (
        <header className="border-b z-20 sticky top-0 backdrop-blur-sm bg-white">
            <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-16 lg:h-20">
                <HeaderLeft />
                <NavigationMenu menu={NAV_LINKS} />

                <div className="flex items-center gap-4">
                    <SearchButton className="text-2xl" onClick={OpenSearchHandler} />
                    <UserMenu />
                    <WishListButton
                        href={isAuthenticated ? "/wishlist" : "/login?referUrl=/wishlist"}
                        className="text-2xl"
                    />

                    <CartButton qty={totalQuantity} />
                </div>
            </div>

            <AnimatePresence>{searchOpen && <Searchbar />}</AnimatePresence>
        </header>
    );
};

export default Header;
