import React from "react";
import Navlink from "./Navlink";

interface Props {}

const NavigationMenu = (props: Props) => {
    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 justify-between">
                <Navlink text="Home" />
                <Navlink text="Fabrics" hasSubmenu />
                <Navlink text="Occassion" hasSubmenu />
                <Navlink text="Collections" hasSubmenu />
                <Navlink text="Origin" hasSubmenu />
            </ul>
        </nav>
    );
};

export default NavigationMenu;
