import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import UserLoggedOutMenu from "./UserLoggedOutMenu";
import UserLoggedInMenu from "./UserLoggedInMenu";

interface Props {}

const isLoggedIn = true;

const UserMenu = (props: Props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="relative flex items-center" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <button className="text-2xl py-4">
                <AiOutlineUser />
            </button>

            <Transition
                as={"div"}
                show={isHovering}
                enter="transition ease-out duration-75"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
                className="absolute right-0 top-12 w-max border border-gray-100 shadow-lg bg-white rounded-lg  p-4"
            >
                {!isLoggedIn && <UserLoggedOutMenu />}
                {isLoggedIn && <UserLoggedInMenu />}
            </Transition>
        </div>
    );
};

export default UserMenu;
