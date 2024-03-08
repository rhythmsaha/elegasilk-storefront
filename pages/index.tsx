import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";

import { Source_Serif_4 } from "next/font/google";
import ProductItem from "@/components/products/product/ProductItem";
import { BiChevronRight } from "react-icons/bi";
import { BsChevronCompactRight } from "react-icons/bs";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});

const SwiperButtonNext = () => {
    const swiper = useSwiper();

    return (
        <button
            className="absolute z-50 right-2  top-1/3  rounded-full shadow-lg flex items-center justify-center text-gray-600 bg-white h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => swiper.slideNext()}
        >
            <IoChevronForwardOutline className="text-2xl sm:text-2xl" />
        </button>
    );
};

const SwiperButtonPrev = () => {
    const swiper = useSwiper();

    return (
        <button
            className={`absolute z-50 left-2 top-1/3 rounded-full shadow-lg flex items-center justify-center text-gray-600 bg-white h-8 w-8 sm:h-10 sm:w-10`}
            onClick={() => swiper.slidePrev()}
        >
            <IoChevronBackOutline className="text-2xl sm:text-2xl" />
        </button>
    );
};

const HomePage: NextPageWithLayout = () => {
    return (
        <div>
            <section className="mx-auto">
                <Swiper spaceBetween={0} slidesPerView={1}>
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
                        className={`${sourceSerif.className} text-2xl lg:text-4xl text-center `}
                    >
                        Popular Choices
                    </h2>
                </div>

                <div className="mt-6 md:mt-8 lg:mt-10 relative">
                    <Swiper
                        className="relative"
                        slidesPerView={2}
                        spaceBetween={16}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },

                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 32,
                            },

                            1536: {
                                slidesPerView: 5,
                                spaceBetween: 32,
                            },
                        }}
                    >
                        <SwiperButtonNext />
                        <SwiperButtonPrev />

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="mt-4 flex items-center justify-center lg:mt-12">
                    <button className="border-2 border-black w-full mx-3 px-4 py-2 text-sm font-medium md:w-36 lg:w-40 lg:bg-black lg:text-white lg:hover:shadow-2xl shadow-black rounded-full transition duration-700 ">
                        View All
                    </button>
                </div>
            </section>

            <hr className="mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <section className="w-11/12 max-w-screen-2xl mx-auto mt-6 md:mt-10 lg:mt-20">
                <div className={` text-center`}>
                    <h2 className="text-2xl uppercase lg:text-4xl font-semibold">
                        Elevate Your Style
                    </h2>

                    <h4 className="mt-2 lg:mt-3 text-sm text-gray-600 sm:text-base md:text-lg">
                        Discover Exclusive <br className="md:hidden" />
                        Collections <br className="hidden md:block lg:hidden" />
                        for Every Occasion
                    </h4>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 xl:grid-cols-6 xl:gap-4 mt-6 md:mt-8 lg:mt-10">
                    {/* Wedding https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/bridal.jpg 
                    Party https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/jqambkyokje4jdbevmml.jpg 
                    Festive https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/kvo2f21o0vplxcllyvb8.jpg                    
                    Traditional https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/traditional.jpg
                    Casual https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/boxd6vi2smzdziosydzk.jpg
                    Bridal https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg
                    */}

                    <div className="relative overflow-hidden h-full w-full">
                        <img
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/bridal.jpg"
                            alt=""
                            className="w-full h-full hover:scale-125 transition duration-500 ease-in-out"
                        />
                    </div>

                    <div className="relative overflow-hidden h-full w-full">
                        <img
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/jqambkyokje4jdbevmml.jpg "
                            alt=""
                            className="w-full h-full hover:scale-125 transi"
                        />
                    </div>

                    <div className="relative overflow-hidden h-full w-full">
                        <img
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/kvo2f21o0vplxcllyvb8.jpg"
                            alt=""
                            className="w-full h-full hover:scale-125 transi"
                        />
                    </div>
                    <div className="relative overflow-hidden h-full w-full">
                        <img
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/traditional.jpg"
                            alt=""
                            className="w-full h-full hover:scale-125 transi"
                        />
                    </div>
                    <div className="relative overflow-hidden h-full w-full">
                        <img
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/boxd6vi2smzdziosydzk.jpg"
                            alt=""
                            className="w-full h-full hover:scale-125 transi"
                        />
                    </div>
                    <div className="relative overflow-hidden h-full w-full">
                        <img
                            src="https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg"
                            alt=""
                            className="w-full h-full hover:scale-125 transi"
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
