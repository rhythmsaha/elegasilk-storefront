import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerSlide from "./BannerSlide";

interface Props {}

const BannerData = [
    {
        name: "Wedding",
        src: "/banner/wedding.jpg",
        srcMobile: "/banner/wedding-m.jpg",
        path: "/",
    },
    {
        name: "Classics",
        src: "/banner/classics.jpg",
        srcMobile: "/banner/classics-m.jpg",
        path: "/",
    },
    {
        name: "Cotton",
        src: "/banner/cotton.jpg",
        srcMobile: "/banner/cotton-m.jpg",
        path: "/",
    },
    {
        name: "Dbe",
        src: "/banner/dbe.jpg",
        srcMobile: "/banner/dbe-m.jpg",
        path: "/",
    },
];

const Banner = (props: Props) => {
    return (
        <section className="mx-auto">
            <Swiper spaceBetween={0} slidesPerView={1}>
                {BannerData.map((banner, index) => (
                    <SwiperSlide key={index} className="">
                        <BannerSlide
                            name={banner.name}
                            path={banner.path}
                            src={banner.src}
                            srcMobile={banner.srcMobile}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
