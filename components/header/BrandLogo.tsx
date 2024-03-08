import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
    white?: boolean;
}

const BrandLogo: FC<Props> = ({ white }) => {
    return (
        <Link href="/" className="cursor-pointer">
            {!white ? (
                <Image
                    src="/logo_black.svg"
                    alt="Logo"
                    width={250}
                    height={46}
                    className="w-20 lg:w-24"
                />
            ) : (
                <Image
                    src="/logo_white.svg"
                    alt="Logo"
                    width={250}
                    height={46}
                    className="w-20 lg:w-24"
                />
            )}
        </Link>
    );
};

export default BrandLogo;
