import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

interface Props {
    src: string;
}

const MobileImageSlide: React.FC<Props> = ({ src }) => {
    return (
        <Image
            src={src}
            alt="Product Image"
            height={450}
            width={300}
            className="w-full aspect-[4/5] object-cover object-top"
        />
    );
};

export default MobileImageSlide;
