import Link from "next/link";
import React from "react";

interface Props {}

const UserLoggedOutMenu = (props: Props) => {
    return (
        <div className="w-56">
            <div className="w-full">
                <Link href="/login" className="flex w-full items-center justify-center51 px-4 py-2 bg-gray-950 text-white hover:bg-black hover:shadow-lg font-medium rounded-md">
                    Login
                </Link>
            </div>

            <div className="mt-4">
                <h2 className="text-lg text-gray-800">Not a Member Yet?</h2>
                <p className="text-sm mt-2">Join Elegasilk for great discounts and exclusive member benefits & offers.</p>

                <Link href="/register" className="inline-flex mt-3 py-0.5 px-0.5 font-semibold border-b-2 hover:border-b-black border-gray-800">
                    Create Account
                </Link>
            </div>
        </div>
    );
};

export default UserLoggedOutMenu;
