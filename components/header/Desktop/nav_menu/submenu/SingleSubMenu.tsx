import { INavLink, ISubmenu } from "@/lib/NavLinks";
import Link from "next/link";
import React, { FC } from "react";
import SubMenuHeading from "./SubMenuHeading";

interface Props {
    title: INavLink["title"];
    links: ISubmenu[];
}

const SingleSubMenu: FC<Props> = ({ links, title }) => {
    return (
        <div className="absolute z-10 px-8 py-6 bg-white rounded-lg box-content min-w-40 shadow-xl">
            <SubMenuHeading title={title} />

            <div className="mt-3 space-y-1">
                {links &&
                    links.length > 0 &&
                    links.map((link) => {
                        return (
                            <Link
                                href={link.path}
                                className="block text-gray-400 hover:text-black font-light cursor-pointer min-w-max tracking-widest"
                                key={link._id}
                            >
                                {link.title}
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default SingleSubMenu;
