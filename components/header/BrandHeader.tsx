import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const BrandHeader: React.FC<Props> = (props) => {
    return (
        <header className="shadow md:shadow-lg lg:shadow-2xl relative">
            <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-20 ">
                <Link href="/" className="cursor-pointer">
                    <Image src="/logo_black.svg" alt="Logo" width={250} height={46} className="w-20 lg:w-24" />
                </Link>
            </div>
        </header>
    );
};

export default BrandHeader;
