import { ISubmenu, ISubmenuGroup } from "@/lib/NavLinks";
import React from "react";

interface Props {
    links: ISubmenuGroup["links"];
}

const NavSubMenu = ({ links }: Props) => {
    return (
        <div>
            <nav className="mt-4 flex flex-col gap-1">
                {links.map((link, index) => (
                    <div className="text-gray-600 hover:text-black hover:font-normal font-light cursor-pointer" key={link._id}>
                        {link.title}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default NavSubMenu;
