import React from "react";
import { INavLink } from "@/lib/NavLinks";
import NavItem from "./NavItem";

interface Props {
    menu: INavLink[];
}

const NavigationMenu = ({ menu }: Props) => {
    return (
        <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 justify-between">{menu && menu.length > 0 && menu.map((_menu) => <NavItem key={_menu._id} {..._menu} />)}</ul>
        </nav>
    );
};

export default NavigationMenu;
