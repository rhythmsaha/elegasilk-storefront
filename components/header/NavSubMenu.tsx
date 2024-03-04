import React from "react";

interface Props {}

const NavSubMenu = (props: Props) => {
    return (
        <div>
            <nav className="mt-4 flex flex-col gap-1">
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
                <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer">Cotton Silk</div>
            </nav>
        </div>
    );
};

export default NavSubMenu;
