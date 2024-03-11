import React, { FC, useState } from "react";
import { INavLink, ISubmenu, ISubmenuGroup } from "@/lib/NavLinks";
import NavMenuButton from "./NavMenuButton";
import Navlink from "./NavLink";
import SingleSubMenu from "./submenu/SingleSubMenu";
import GroupedSubMenu from "./submenu/GroupedSubMenu";

const NavItem: FC<INavLink> = ({ path, title, hasSubmenu, subMenu }) => {
    const [isShowing, setIsShowing] = useState(false);

    if (hasSubmenu === "SINGLE") {
        return (
            <li
                className="relative"
                onMouseEnter={() => setIsShowing(true)}
                onMouseLeave={() => setIsShowing(false)}
            >
                <NavMenuButton title={title} />
                {isShowing && subMenu && subMenu.length > 0 && (
                    <SingleSubMenu links={subMenu as ISubmenu[]} title={title} />
                )}
            </li>
        );
    }

    if (hasSubmenu === "GROUPED") {
        return (
            <li
                className="relative"
                onMouseEnter={() => setIsShowing(true)}
                onMouseLeave={() => setIsShowing(false)}
            >
                <NavMenuButton title={title} />
                {isShowing && (
                    <GroupedSubMenu title={title} menuGroups={subMenu as ISubmenuGroup[]} />
                )}
            </li>
        );
    }

    return <Navlink href={path || "/"} title={title} />;
};

export default NavItem;
