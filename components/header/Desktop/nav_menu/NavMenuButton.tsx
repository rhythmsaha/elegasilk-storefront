import React, { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

const NavMenuButton: FC<{ title: string }> = ({ title }) => {
    return (
        <button className="flex justify-center items-center rounded-md text-sm font-medium gap-1 py-4">
            <span className="font-medium cursor-pointer ">{title}</span>
            <BiChevronDown className="h-5 w-5 block" aria-hidden="true" />
        </button>
    );
};

export default NavMenuButton;
