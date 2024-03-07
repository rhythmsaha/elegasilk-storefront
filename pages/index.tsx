import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

import { Source_Serif_4 } from "next/font/google";
import ProductItem from "@/components/products/product/ProductItem";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});

const HomePage: NextPageWithLayout = () => {
    return (
        <div>
            <section className="mx-auto">
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
            </section>

            <section className="mt-20 w-11/12 max-w-screen-2xl mx-auto">
                <div>
                    <h2
                        className={`${sourceSerif.className} text-4xl lg:text-4xl text-center `}
                    >
                        Explore by Fabrics
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 xl:gap-6 mt-10">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
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
