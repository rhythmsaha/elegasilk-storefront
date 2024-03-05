import { useAuthStore } from "@/store/auth/useAuthStore";
import Link from "next/link";
import React, { use } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { IoBagCheckOutline, IoLogOutOutline } from "react-icons/io5";

interface Props {}

const UserLoggedInMenu = (props: Props) => {
    const { user, logout } = useAuthStore((state) => state);

    return (
        <div className="w-48">
            <div className="border-b py-2 pb-4">
                <h2 className="text-xl">
                    Hello, <span className="font-medium capitalize">{user?.firstName}</span>!
                </h2>
            </div>

            <div className="flex flex-col mt-3">
                <Link href="" className="flex items-center font-medium py-2 gap-2 text-gray-700 hover:text-gray-950 hover:underline">
                    <AiOutlineUser className="w-6 h-6" />
                    <span>Your Account</span>
                </Link>
                <Link href="" className="flex items-center font-medium py-2 gap-2 text-gray-700 hover:text-gray-950 hover:underline">
                    <AiOutlineHeart className="w-6 h-6" />
                    <span>Wishlist</span>
                </Link>
                <Link href="" className="flex items-center font-medium py-2 gap-2 text-gray-700 hover:text-gray-950 hover:underline">
                    <IoBagCheckOutline className="w-6 h-6" />
                    Your Orders
                </Link>
                <button className="flex items-center font-medium py-2 gap-2 text-gray-700 hover:text-gray-950 hover:underline" onClick={logout}>
                    <IoLogOutOutline className="w-6 h-6" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserLoggedInMenu;
