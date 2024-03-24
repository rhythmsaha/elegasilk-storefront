import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CollectionLinkProps {
    name: string;
    img: string;
    path: string;
}

const CollectionLinkTitleInside: React.FC<CollectionLinkProps> = ({ name, img, path }) => {
    return (
        <Link href={path} className="relative overflow-hidden h-full w-full rounded-lg bg-black cursor-pointer ">
            <Image
                src={img}
                className="hover:scale-125 transition duration-500 ease-in-out hover:opacity-50 w-full aspect-square object-cover object-top"
                width={300}
                height={300}
                alt={name}
            />

            <div className="absolute bottom-0 left-0 right-0  flex items-center justify-center bg-opacity-70 bg-black backdrop-blur-sm">
                <div className="text-white text-xs sm:text-sm tracking-wider p-2.5 sm:p-3 md:p-2.5 lg:p-3.5 xl:px-2 xl:py-2.5">
                    {name}
                </div>
            </div>
        </Link>
    );
};

export default CollectionLinkTitleInside;
