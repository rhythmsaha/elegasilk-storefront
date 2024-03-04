import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import NavigationMenu from "./NavigationMenu";
import UserMenu from "./UserMenu";
import CartIcon from "./CartIcon";

interface Props {}

const Header: React.FC<Props> = () => {
    const [showSearch, setShowSearch] = useState(true);

    const showSearchBar = () => {
        setShowSearch(true);
    };

    return (
        <header className="shadow-2xl relative">
            <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-20 ">
                <Link href="/" className="cursor-pointer">
                    <Image src="/logo_black.svg" alt="Logo" width={250} height={46} className="w-20 lg:w-24" />
                </Link>

                <NavigationMenu />

                <div className="flex items-center gap-4">
                    <button className="text-2xl" onClick={showSearchBar}>
                        <AiOutlineSearch />
                    </button>

                    <UserMenu />

                    <button className="text-2xl">
                        <AiOutlineHeart />
                    </button>

                    <CartIcon qty={45} />
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
