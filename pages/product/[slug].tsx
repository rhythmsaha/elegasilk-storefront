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
import { AiOutlineCheck, AiOutlineShoppingCart } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import "swiper/css/bundle";
import useCartStore from "@/store/cart/useCartStore";
import BuyActions from "@/components/products/productpage/BuyActions";

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
                _id: string;
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
                            <HeadingPart name={product.name} rating={{ average: 2.4, count: 245 }} _id={product._id} />

                            <Pricing MRP={product.MRP} discount={product.discount} />

                            <Overview
                                availability={product.stock > 0 ? true : false}
                                color={product.colors && product.colors[0]}
                                sku="SPH07L00099"
                            />

                            <CheckDelivery />

                            <Assurance />

                            <BuyActions
                                productId={product._id}
                                available={product.stock > 0 ? true : false}
                                stock={product.stock}
                            />
                        </div>
                    </section>
                </div>

                <section className="mt-20">
                    <DetailsContainer heading="Description">
                        <Description description={product.description} />
                    </DetailsContainer>

                    <DetailsContainer heading="Product Informations">
                        <ProductSpecs specs={product.specs} />
                    </DetailsContainer>

                    <DetailsContainer heading="Ratings and Reviews">
                        <ReviewsSection rating={2.4} totalReviews={245} />
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
