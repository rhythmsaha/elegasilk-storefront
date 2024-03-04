import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

import { BiChevronDown } from "react-icons/bi";
import NavSubMenu from "./NavSubMenu";

interface Props {
    text: string;
    href?: string;
    hasSubmenu?: boolean;
}

const Navlink: FC<Props> = ({ text, href, hasSubmenu = false }) => {
    const [isShowing, setIsShowing] = useState(false);

    if (!hasSubmenu) {
        return (
            <li>
                <Link href="/" className="font-medium mr-1">
                    {text}
                </Link>
            </li>
        );
    }

    return (
        <li className="relative" onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
            <button className="flex justify-center items-center rounded-md text-sm font-medium gap-1 py-4">
                <span className="font-medium cursor-pointer ">{text}</span>
                <BiChevronDown className="h-5 w-5 block" aria-hidden="true" />
            </button>

            <Transition
                as={Fragment}
                show={isShowing}
                enter="transition ease-out duration-75"
                enterFrom="transform opacity-0 "
                enterTo="transform opacity-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 "
                leaveTo="transform opacity-0 "
            >
                <div className="absolute w-max border border-gray-50 bg-white rounded-lg shadow-lg p-4">
                    <div className="w-48">
                        <h2 className="text-xl font-light">{text}</h2>
                    </div>

                    <NavSubMenu />
                </div>
            </Transition>
        </li>
    );
};

export default Navlink;
