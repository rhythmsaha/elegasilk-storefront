import { useFilterBarStore } from "@/store/filter/useBottomFilter";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { FiFilter } from "react-icons/fi";
import { MdSort } from "react-icons/md";

interface Props {}

interface IMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: IconType;
    label: string;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ Icon, label, ...props }) => {
    return (
        <button
            className="w-full h-full first:border-r-2 border-gray-700 text-gray-50 flex items-center justify-center gap-2 tracking-wide"
            {...props}
        >
            <Icon className="text-2xl" />
            <span className="">{label}</span>
        </button>
    );
};

const MobileBottomMenu: React.FC<Props> = (props) => {
    const { openMFilter, openMSort } = useFilterBarStore((state) => state);

    return (
        <div className="lg:hidden sticky w-full bg-black bg-opacity-90 backdrop-blur z-20 bottom-0 inset-x-0 py-2 text-white">
            <div className="w-full h-full grid grid-cols-2 place-items-center py-2">
                <MenuButton Icon={MdSort} label="Sort By" onClick={openMSort} />
                <MenuButton Icon={FiFilter} label="Filter" onClick={openMFilter} />
            </div>
        </div>
    );
};

export default MobileBottomMenu;
