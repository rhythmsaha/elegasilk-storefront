/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import MobileImageSlide from "./MobileImageSlide";

interface Props {
    images: string[];
}

const MobileProductImage: React.FC<Props> = ({ images }) => {
    return (
        <section className="lg:hidden">
            <Swiper spaceBetween={0} slidesPerView={1} modules={[Pagination]} pagination>
                {images &&
                    images.length > 0 &&
                    images.map((image, index) => (
                        <SwiperSlide className="" key={index}>
                            <MobileImageSlide src={image} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

export default MobileProductImage;
