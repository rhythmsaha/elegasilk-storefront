import React, { useState } from "react";
import NavigationMenu from "./Desktop/nav_menu/NavigationMenu";
import UserMenu from "./Desktop/usermenu/UserMenu";
import { useAuthStore } from "@/store/auth/useAuthStore";
import NAV_LINKS from "@/lib/NavLinks";
import HeaderLeft from "./Desktop/HeaderLeft";
import SearchButton from "./SearchButton";
import WishListButton from "./WishListButton";
import CartButton from "./CartButton";

interface Props {}

const Header: React.FC<Props> = () => {
    const isAuthenticated = useAuthStore((state) => state.authStatus) === "AUTHENTICATED";

    const [showSearch, setShowSearch] = useState(true);

    const showSearchBar = () => {
        setShowSearch(true);
    };

    return (
        <header className="border-b z-10 sticky top-0 backdrop-blur-sm bg-white">
            <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-20">
                <HeaderLeft />

                <NavigationMenu menu={NAV_LINKS} />

                <div className="flex items-center gap-4">
                    <SearchButton className="text-2xl" onClick={showSearchBar} />
                    <UserMenu />
                    <WishListButton href={isAuthenticated ? "/" : "/login?referUrl=/"} className="text-2xl" />
                    <CartButton qty={0} />
                </div>
            </div>

            {/* {showSearch && (
                <div className="absolute bg-white top-0 right-0 left-0 bottom-0 ">
                    <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-20">
                        <div className="w-full h-full py-4">
                            <input type="text" name="" id="" className="w-full h-full border-none outline-none" placeholder="Search Here..." />
                        </div>
                        <button className="border px-4 py-2 " onClick={() => setShowSearch(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )} */}
        </header>
    );
};

export default Header;
