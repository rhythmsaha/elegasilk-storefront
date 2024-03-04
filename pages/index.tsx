import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="">
            <Swiper spaceBetween={0} slidesPerView={1} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className="">
                    <div className="">
                        {/* <img src="/banner/queens.jpg" alt="" className="w-full h-52 sm:h-auto object-cover" /> */}
                        <img src="/banner/mobile/queens-m.jpg" alt="" className="w-full  h-64 object-top sm:h-auto object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="">
                        {/* <img src="/banner/wedding.webp" alt="" className="w-full h-52 sm:h-auto object-cover" /> */}
                        <img src="/banner/mobile/wedding-m.webp" alt="" className="w-full h-64 object-top sm:h-auto object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className="">
                        {/* <img src="/banner/chanderi.webp" alt="" className="w-full h-52 sm:h-auto object-cover" /> */}
                        <img src="/banner/mobile/chanderi-m.webp" alt="" className="w-full h-64 object-top sm:h-auto object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="">
                        {/* <img src="/banner/kanchi.jpg" alt="" className="w-full h-52 sm:h-auto object-cover" /> */}
                        <img src="/banner/mobile/kanchi-m.webp" alt="" className="w-full h-64 object-top sm:h-auto object-cover" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
