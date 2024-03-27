import Image from "next/image";
import Link from "next/link";
import React from "react";
import BrandLogo from "./BrandLogo";

interface Props {}

const BrandHeader: React.FC<Props> = (props) => {
    return (
        <header className="shadow md:shadow-lg lg:shadow relative">
            <div className="max-w-screen-2xl mx-auto w-11/12 flex justify-between items-center h-20 ">
                <BrandLogo />
            </div>
        </header>
    );
};

export default BrandHeader;
