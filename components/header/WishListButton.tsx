import Link from "next/link";
import React, { AnchorHTMLAttributes, LinkHTMLAttributes } from "react";
import { AiOutlineHeart } from "react-icons/ai";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const WishListButton = (props: Props) => {
    return (
        <Link {...props}>
            <AiOutlineHeart />
        </Link>
    );
};

export default WishListButton;
