import React from "react";
import { CollectionLinkProps } from "./CollectionLinkTitleInside";
import Link from "next/link";
import Image from "next/image";

const CollectionLinkTitleOutside: React.FC<CollectionLinkProps> = ({
    img,
    name,
    path,
}) => {
    return (
        <Link
            href={path}
            className="overflow-hidden h-full w-full cursor-pointer"
        >
            <div className="aspect-square w-full rounded-xl overflow-hidden">
                <Image
                    src={img}
                    className="hover:scale-125 transition duration-500 ease-in-out hover:opacity-50 w-full h-full"
                    width={300}
                    height={300}
                    alt={name}
                />
            </div>

            <div className="text-center mt-1">
                <div className="text-gray-800 text-xs tracking-wide sm:text-sm sm:mt-1.5 lg:tracking-wider  lg:text-base lg:font-medium lg:text-gray-600">
                    {name}
                </div>
            </div>
        </Link>
    );
};

export default CollectionLinkTitleOutside;
