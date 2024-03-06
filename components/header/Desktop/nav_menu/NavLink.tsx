import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    href: string;
}

const Navlink = ({ href, title }: Props) => {
    return (
        <li className="px-2">
            <Link href={href} className="font-medium pr-1">
                {title}
            </Link>
        </li>
    );
};

export default Navlink;
