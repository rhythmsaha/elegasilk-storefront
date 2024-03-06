import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import BrandLogo from "../BrandLogo";

const HeaderLeft = () => {
    return (
        <div className="flex items-center gap-4">
            <button className="p-2 lg:hidden">
                <AiOutlineMenu className="text-2xl" />
            </button>

            <BrandLogo />
        </div>
    );
};

export default HeaderLeft;
