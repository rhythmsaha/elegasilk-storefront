import Link from "next/link";
import React from "react";
import { SwiperSlide } from "swiper/react";

interface Props {
    name: string;
    src: string;
    srcMobile: string;
    path: string;
}

const BannerSlide = ({ name, path, src, srcMobile }: Props) => {
    return (
        <SwiperSlide className="">
            <Link href={path} className="">
                <picture>
                    <source media="(min-width:1024px)" srcSet={src} />
                    <img src={srcMobile} alt={name} className="w-full" />
                </picture>
            </Link>
        </SwiperSlide>
    );
};

export default BannerSlide;
