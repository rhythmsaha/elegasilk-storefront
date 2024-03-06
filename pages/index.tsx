import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className=" ">
                    <div className="">
                        <picture>
                            <source
                                media="(min-width:1024px)"
                                srcSet="/banner/wedding.jpg"
                            />
                            <img
                                src="/banner/wedding-m.jpg"
                                alt="Flowers"
                                className="w-full"
                            />
                        </picture>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="">
                        <picture>
                            <source
                                media="(min-width:1024px)"
                                srcSet="/banner/classics.jpg"
                            />
                            <img
                                src="/banner/classics-m.jpg"
                                alt="Flowers"
                                className="w-full"
                            />
                        </picture>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="">
                        <picture>
                            <source
                                media="(min-width:1024px)"
                                srcSet="/banner/cotton.jpg"
                            />
                            <img
                                src="/banner/cotton-m.jpg"
                                alt="Flowers"
                                className="w-full"
                            />
                        </picture>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="">
                    <div className="">
                        <picture>
                            <source
                                media="(min-width:1024px)"
                                srcSet="/banner/dbe.jpg"
                            />
                            <img
                                src="/banner/dbe-m.jpg"
                                alt="Flowers"
                                className="w-full"
                            />
                        </picture>
                    </div>
                </SwiperSlide>
            </Swiper>

            <section className="mt-10 w-11/12 mx-auto">
                <div className="grid lg:grid-cols-4 gap-x-10">
                    <div className="lg:col-span-1 flex flex-col justify-between items-center gap-2">
                        <h2
                            className={`${sourceSerif.className} text-4xl lg:text-4xl text-center `}
                        >
                            Explore Our Best-Selling Sarees!
                        </h2>
                        <p className="text-xs">Discover the Favorites</p>
                        <button className="bg-black px-6 py-2 text-white">
                            Shop Now
                        </button>
                    </div>

                    <div className="lg:col-span-3 flex items-center gap-6">
                        <div className="flex items-center justify-center bg-red-200 h-full w-full">
                            {" "}
                            <img
                                src="/banner/wedding-m.jpg"
                                alt="Flowers"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-red-200 h-full w-full">
                            {" "}
                            <img
                                src="/banner/wedding-m.jpg"
                                alt="Flowers"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-red-200 h-full w-full">
                            {" "}
                            <img
                                src="/banner/wedding-m.jpg"
                                alt="Flowers"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-red-200 h-full w-full">
                            {" "}
                            <img
                                src="/banner/wedding-m.jpg"
                                alt="Flowers"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 w-11/12 mx-auto">
                <div>
                    <h2
                        className={`${sourceSerif.className} text-4xl lg:text-4xl text-center `}
                    >
                        Explore by Fabrics
                    </h2>
                </div>

                <div className="flex items-center gap-6 mt-10">
                    <div className="flex items-center justify-center bg-red-200 h-full w-full aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="flex items-center justify-center bg-red-200 h-full w-full aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="flex items-center justify-center bg-red-200 h-full w-full aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="flex items-center justify-center bg-red-200 h-full w-full  aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-20 w-11/12 mx-auto">
                <div>
                    <h2
                        className={`${sourceSerif.className} text-4xl lg:text-4xl text-center `}
                    >
                        Trending Collections
                    </h2>
                </div>

                <div className="flex items-center gap-6 mt-10">
                    <div className="flex items-center justify-center bg-red-200 h-full w-full aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="flex items-center justify-center bg-red-200 h-full w-full aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="flex items-center justify-center bg-red-200 h-full w-full aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="flex items-center justify-center bg-red-200 h-full w-full  aspect-square">
                        {" "}
                        <img
                            src="/banner/wedding-m.jpg"
                            alt="Flowers"
                            className="w-full object-cover h-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

HomePage.getLayout = (page) => {
    return (
        <MainLayout>
            <div className="mb-20">
                {/*  */}
                {page}
                {/*  */}
            </div>
        </MainLayout>
    );
};

export default HomePage;
