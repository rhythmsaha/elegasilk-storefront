import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandLogo = () => {
    return (
        <Link href="/" className="cursor-pointer">
            <Image src="/logo_black.svg" alt="Logo" width={250} height={46} className="w-20 lg:w-24" />
        </Link>
    );
};

export default BrandLogo;
