import React from "react";
import SectionContainer from "./SectionContainer";
import SeectionHeading from "./SeectionHeading";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ProductItem from "@/components/products/product/ProductItem";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
    bestSellerData: any[];
}

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
            onClick={() => swiper.slideTo(0)}
        >
            <IoChevronBackOutline className="text-2xl sm:text-2xl" />
        </button>
    );
};

const BestSellerSection: React.FC<Props> = ({ bestSellerData }) => {
    return (
        <SectionContainer>
            <SeectionHeading
                heading="Explore Our Best Sellers"
                subHeading="Discover the Sarees Everyone's Talking About"
            />

            <div className="mt-6 md:mt-8 lg:mt-10 relative flex">
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

                    {bestSellerData.length > 0 &&
                        bestSellerData.map((product, index) => (
                            <SwiperSlide key={product._id} className="">
                                <ProductItem product={product} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </SectionContainer>
    );
};

export default BestSellerSection;
