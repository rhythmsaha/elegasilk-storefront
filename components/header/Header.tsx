import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <header className="shadow-2xl">
            <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-20">
                <Link href="/" className="cursor-pointer">
                    <Image src="/logo_black.svg" alt="Logo" width={250} height={46} className="w-20 lg:w-24" />
                </Link>

                <nav className="flex items-center gap-4 justify-between">
                    <span>Home</span>
                    <span>Fabrics</span>
                    <span>Occassion</span>
                    <span>Collections</span>
                    <span>Origin</span>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-2xl">
                        <AiOutlineSearch />
                    </button>

                    <button className="text-2xl">
                        <AiOutlineUser />
                    </button>

                    <button className="text-2xl">
                        <AiOutlineHeart />
                    </button>

                    <button className="text-2xl">
                        <AiOutlineShoppingCart />
                    </button>

                    {/* <button className="bg-primary px-4 py-2 rounded-md border-2 border-black">Login / Sign Up</button> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
