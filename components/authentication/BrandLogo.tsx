import Image from "next/image";
import React from "react";

interface Props {
    text: string;
}

const BrandLogo: React.FC<Props> = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image src="/logo_black.svg" alt="Elegasilk" width={200} height={58.4} className="h-10 md:h-12 lg:h-16" />
            <h2 className="mt-8 text-xl font-semibold text-gray-950">{text}</h2>
        </div>
    );
};

export default BrandLogo;
