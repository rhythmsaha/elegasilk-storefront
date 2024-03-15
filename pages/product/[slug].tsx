/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import MobileProductImage from "@/components/products/productpage/mobile/product/MobileProductImage";
import DesktopImage from "@/components/products/productpage/productImageDesktop/DesktopImage";
import HeadingPart from "@/components/products/productpage/productinfo/HeadingPart";
import Pricing from "@/components/products/productpage/productinfo/Pricing";
import Overview from "@/components/products/productpage/productinfo/Overview";
import CheckDelivery from "@/components/products/productpage/productinfo/CheckDelivery";
import Assurance from "@/components/products/productpage/productinfo/Assurance";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import DetailsContainer from "@/components/products/productpage/DetailsContainer";
import Description from "@/components/products/productpage/Description";
import ProductSpecs from "@/components/products/productpage/ProductSpecs";
import ReviewsSection from "@/components/products/productpage/ReviewsSection";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import "swiper/css/bundle";

interface Props {
    product: {
        _id: string;
        name: string;
        slug?: string;
        description: string;
        content?: string;
        images: string[];
        sku: string;
        MRP: number;
        discount: number;
        published: boolean;
        colors: {
            _id: string;
            name: string;
            hex: string;
        }[];
        collections?: {
            _id: string;
            name: string;
        }[];
        stock: number;
        specs: [
            {
                name: string;
                value: string;
            }
        ];
        rating?: {
            average: number;
            count: number;
        };
    };
}

const ProductPage: NextPageWithLayout<Props> = ({ product }) => {
    return (
        <div className="mt-0 mb-20">
            <MobileProductImage images={product.images} />

            <div className="max-w-screen-2xl w-11/12 mx-auto">
                <div className="mt-1 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:place-items-start">
                    <DesktopImage images={product.images} />

                    <section className="flex flex-col w-full">
                        <div>
                            <HeadingPart name={product.name} rating={{ average: 2.4, count: 245 }} />

                            <Pricing />

                            <Overview
                                availability={product.stock > 0 ? "In Stock" : "Out of Stock"}
                                color={product.colors[0]}
                                sku="SPH07L00099"
                            />

                            <CheckDelivery />

                            <Assurance />

                            <div className="mt-4 xl:mt-8">
                                <div className="flex border justify-between border-gray-200 max-w-32">
                                    <button className="flex items-center justify-center h-10 w-10 ">-</button>

                                    <input
                                        type="text"
                                        className="col-span-2 min-w-0 max-w-none w-auto ring-0 focus:ring-0 border-y-0 border-x focus:border-x-gray-200 flex-1 p-0 border-gray-200 text-center"
                                    />

                                    <button className="flex items-center justify-center h-10 w-10">+</button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
                                    <button className="bg-yellow-300 text-black py-3 rounded-md flex items-center justify-center">
                                        <AiOutlineShoppingCart className="mr-2" />
                                        <span>Add to Cart</span>
                                    </button>

                                    <button className="bg-black text-white py-3 rounded-md flex items-center justify-center">
                                        <IoFlash className="mr-2" />
                                        <span>Buy Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="mt-20">
                    <DetailsContainer heading="Description">
                        <Description />
                    </DetailsContainer>

                    <DetailsContainer heading="Product Informations">
                        <ProductSpecs />
                    </DetailsContainer>

                    <DetailsContainer heading="Ratings and Reviews">
                        <ReviewsSection />
                    </DetailsContainer>
                </section>
            </div>
        </div>
    );
};

export default ProductPage;

ProductPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

interface StaticPath {
    params: { slug: string };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const response = await axios.get(`${API_URLs.products.paths}`);
    const paths = (await response?.data?.paths) as StaticPath[];

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = (async (context) => {
    const slug = context.params?.slug;

    const apiUrl = API_URLs.products.getProduct(slug as string);

    const response = await axios.get(apiUrl);
    const product = response?.data.data;

    return {
        props: { product },
    };
}) satisfies GetStaticProps<{
    product: any;
}>;
