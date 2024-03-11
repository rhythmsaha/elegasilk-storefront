import { ISubmenuGroup } from "@/lib/NavLinks";
import React from "react";
import SubMenuHeading from "./SubMenuHeading";
import SingleSubMenu from "./SingleSubMenu";
import Link from "next/link";

interface Props {
    title: string;
    menuGroups: ISubmenuGroup[];
}

const GroupedSubMenu = ({ menuGroups, title }: Props) => {
    return (
        <div className="fixed z-10 inset-x-0 bg-white  max-w-screen-lg mx-auto px-14 pt-6 pb-12 rounded-xl shadow-xl">
            <div className="flex justify-around gap-8 bg-white">
                {menuGroups &&
                    menuGroups.length > 0 &&
                    menuGroups.map((_subMenu) => {
                        return (
                            <div key={_subMenu._id} className="min-w-40">
                                <SubMenuHeading title={_subMenu.title} />

                                <div className="mt-4 space-y-1">
                                    {_subMenu.subMenu.map((link, index) => (
                                        <Link
                                            href={link.path}
                                            className="block text-gray-500 hover:text-black font-light cursor-pointer min-w-max tracking-wider text-sm"
                                            key={link._id + index}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default GroupedSubMenu;
