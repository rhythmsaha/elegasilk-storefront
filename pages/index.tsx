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
import Image from "next/image";
import Link from "next/link";
import HomeBrandStory from "@/sections/home/HomeBrandStory";

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
});

const occasionData = [
    {
        name: "Wedding Wonders",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/bridal.jpg",
    },
    {
        name: "Party Perfection",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/jqambkyokje4jdbevmml.jpg",
    },
    {
        name: "Festival Favorites",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/kvo2f21o0vplxcllyvb8.jpg",
    },
    {
        name: "Traditional Treasures",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/traditional.jpg",
    },
    {
        name: "Casual Comforts",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/boxd6vi2smzdziosydzk.jpg",
    },
    {
        name: "Bridal Beauties",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
];

const fabricsData = [
    {
        name: "Cotton",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197861/elegasilk/avatars/gxsoycvl4m8sxjukakm5.jpg",
    },

    {
        name: "Silk",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197368/elegasilk/avatars/jaeq1xc3qrkrcfiglktn.jpg",
    },
    {
        name: "Georgette",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197480/elegasilk/avatars/kvmfemd7mtugd5albsdp.jpg",
    },
    {
        name: "Chiffon",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197550/elegasilk/avatars/dh0k4wkuit0gjdbx8lgr.jpg",
    },
    {
        name: "Linen",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197933/elegasilk/avatars/vyjs56etaxfe0mutfbab.jpg",
    },
    {
        name: "Organza",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702198486/elegasilk/avatars/qu5yaqnfitedc4hiaqt4.jpg",
    },
    {
        name: "Crepe",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1709905654/elegasilk/avatars/yitxr1xenhdqbplozfjs.jpg",
    },
    {
        name: "Eri",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1709905662/elegasilk/avatars/g1oanq75k8tqifzaddyb.jpg",
    },
];

const collectionsData = [
    {
        name: "Banarasi Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Kanjivaram Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Leheriya Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Bandhani Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Pochampalli Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Chikankari Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Paithani Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Uppada Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Ikat Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Chanderi Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Sambalpuri Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
    {
        name: "Maheshwari Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
    },
];

const SwiperButtonNext = () => {
    const swiper = useSwiper();

    return (
        <button
            className="absolute z-50 right-2 top-1/3 rounded-full shadow-lg flex items-center justify-center text-gray-600 bg-white h-8 w-8 sm:h-10 sm:w-10"
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

const CollectionThumbLink = ({ name, img }: { name: string; img: string }) => {
    return (
        <Link
            href=""
            className="relative overflow-hidden h-full w-full rounded-lg bg-black cursor-pointer "
        >
            <Image
                src={img}
                className="hover:scale-125 transition duration-500 ease-in-out hover:opacity-50 w-full aspect-square"
                width={300}
                height={300}
                alt=""
            />

            <div className="absolute bottom-0 left-0 right-0  flex items-center justify-center bg-opacity-70 bg-black backdrop-blur-sm">
                <div className="text-white text-xs sm:text-sm tracking-wider p-2.5 sm:p-3 md:p-2.5 lg:p-3.5 xl:px-2 xl:py-2.5">
                    {name}
                </div>
            </div>
        </Link>
    );
};

const RoundedCollectionThumbLink = ({
    name,
    img,
}: {
    name: string;
    img: string;
}) => {
    return (
        <Link href="" className="overflow-hidden h-full w-full cursor-pointer">
            <div className="aspect-square w-full rounded-xl overflow-hidden">
                <Image
                    src={img}
                    className="hover:scale-125 transition duration-500 ease-in-out hover:opacity-50 w-full h-full"
                    width={300}
                    height={300}
                    alt=""
                />
            </div>

            <div className="text-center mt-1">
                <div className="text-gray-800 text-xs tracking-wide sm:text-sm sm:mt-1.5 lg:tracking-wider  lg:text-base lg:font-medium lg:text-gray-600">
                    {name}
                </div>
            </div>
        </Link>
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

            <section className="w-11/12 max-w-screen-2xl mx-auto mt-6 md:mt-10 lg:mt-20">
                <div className={` text-center`}>
                    <h2 className="text-2xl uppercase lg:text-4xl font-semibold">
                        Fabric Fantasies
                    </h2>

                    <h4 className="mt-2 lg:mt-3 text-sm text-gray-600 md:text-base lg:text-lg sm:font-light">
                        Indulge in Luxurious Fabrics{" "}
                        <br className="md:hidden" />
                        Tailored <br className="hidden md:block" />
                        to Your Tastes
                    </h4>
                </div>

                <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-4 gap-2 sm:gap-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-8">
                    {fabricsData.map((fabric, index) => (
                        <RoundedCollectionThumbLink
                            key={index}
                            img={fabric.image}
                            name={fabric.name}
                        />
                    ))}
                </div>
            </section>

            <hr className="lg:hidden mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <section className="w-11/12 max-w-screen-2xl mx-auto mt-6 md:mt-10 lg:mt-20">
                <div className={` text-center`}>
                    <h2 className="text-2xl uppercase lg:text-4xl font-semibold">
                        Explore Our Best Sellers
                    </h2>

                    <h4 className="mt-2 lg:mt-3 text-sm text-gray-600 sm:text-base md:text-lg">
                        Discover the Sarees <br className="md:hidden" />
                        Everyone&apos;s{" "}
                        <br className="hidden md:block lg:hidden" />
                        Talking About
                    </h4>
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
            </section>

            <hr className="lg:hidden mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

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
                    {occasionData.map((occasion, index) => (
                        <CollectionThumbLink
                            key={index}
                            img={occasion.img}
                            name={occasion.name}
                        />
                    ))}
                </div>
            </section>

            <hr className="mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <section className="w-11/12 max-w-screen-2xl mx-auto mt-6 md:mt-10 lg:mt-20">
                <div className={` text-center`}>
                    <h2 className="text-2xl uppercase lg:text-4xl font-semibold">
                        Discover Our Diverse Collections
                    </h2>

                    <h4 className="mt-2 lg:mt-3 text-sm text-gray-600 sm:text-base md:text-lg">
                        Discover Exclusive <br className="md:hidden" />
                        Collections <br className="hidden md:block lg:hidden" />
                        for Every Occasion
                    </h4>
                </div>

                <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 2xl:grid-cols-6 2xl:gap-2">
                    {collectionsData.map((collection, index) => (
                        <CollectionThumbLink
                            key={index}
                            img={collection.image}
                            name={collection.name}
                        />
                    ))}
                </div>
            </section>

            <HomeBrandStory />
        </div>
    );
};

HomePage.getLayout = (page) => {
    return (
        <MainLayout>
            <div className="">
                {/*  */}
                {page}
                {/*  */}
            </div>
        </MainLayout>
    );
};

export default HomePage;
