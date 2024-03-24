import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerSlide from "./BannerSlide";

interface Props {}

const BannerData = [
    {
        name: "Wedding",
        src: "/banner/wedding.jpg",
        srcMobile: "/banner/wedding-m.jpg",
        path: "/browse/sarees?attributes=65737b5d7c5a3cb5bae715e5",
    },
    {
        name: "Classics",
        src: "/banner/classics.jpg",
        srcMobile: "/banner/classics-m.jpg",
        path: "/collections/65930ebf2784df2d7ed9269b",
    },
    {
        name: "Cotton",
        src: "/banner/cotton.jpg",
        srcMobile: "/banner/cotton-m.jpg",
        path: "/browse/sarees?attributes=657348b78840612d2a0a8c6a",
    },
    {
        name: "Dbe",
        src: "/banner/dbe.jpg",
        srcMobile: "/banner/dbe-m.jpg",
        path: "/collections/65930e7b2784df2d7ed92647",
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
