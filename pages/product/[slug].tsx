/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import { Rating } from "react-simple-star-rating";
import { BsShieldCheck } from "react-icons/bs";
import { IoCubeOutline, IoFlash, IoRibbonOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import CheckDelivery from "@/components/products/productpage/productinfo/CheckDelivery";
import MobileProductImage from "@/components/products/productpage/mobile/product/MobileProductImage";
import "swiper/css/bundle";
import ProductBottomTabs from "@/components/products/productpage/ProductBottomTabs";
import HeadingPart from "@/components/products/productpage/productinfo/HeadingPart";
import Pricing from "@/components/products/productpage/productinfo/Pricing";
import Overview from "@/components/products/productpage/productinfo/Overview";
import Assurance from "@/components/products/productpage/productinfo/Assurance";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DesktopImage from "@/components/products/productpage/productImageDesktop/DesktopImage";

interface Props {}

const Product = {
    _id: "65e9a707d0946d23ba2a1621",
    name: "black ujjain pure cotton batik saree",
    images: [
        "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw8a326bef/images/Taneira/Catalog/SPG08F00144_1.jpg?sw=1000&sh=1500",
        "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw2a29bbe9/images/Taneira/Catalog/SPG08F00144_2.jpg?sw=1000&sh=1500",
        "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw1683f131/images/Taneira/Catalog/SPG08F00144_3.jpg?sw=1000&sh=1500",
        "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw7b29c867/images/Taneira/Catalog/SPG08F00144_4.jpg?sw=1000&sh=1500",
        "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw7bf09cf9/images/Taneira/Catalog/SPG08F00144_5.jpg?sw=1000&sh=1500",
    ],
    MRP: 1299,
    stock: 200,
    published: true,
    createdAt: "2024-03-07T11:37:44.063Z",
    slug: "black-ujjain-pure-cotton-batik-saree",
};

const ProductPage: NextPageWithLayout<Props> = () => {
    return (
        <div className="mt-0 mb-20">
            <MobileProductImage images={Product.images} />

            <div className="max-w-screen-2xl w-11/12 mx-auto">
                <div className="mt-1 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:gap-8 lg:place-items-start">
                    <DesktopImage images={Product.images} />

                    <section className="flex flex-col">
                        <div>
                            <HeadingPart />

                            <Pricing />

                            <Overview
                                availability={Product.stock > 0 ? "In Stock" : "Out of Stock"}
                                color={{ name: "Black", hex: "#000" }}
                                sku="SPH07L00099"
                            />

                            <CheckDelivery />

                            <Assurance />

                            <div className="mt-4 xl:mt-8">
                                <div className="flex border justify-between border-gray-200 max-w-32">
                                    <button className="flex items-center justify-center h-10 w-10 ">
                                        -
                                    </button>

                                    <input
                                        type="text"
                                        className="col-span-2 min-w-0 max-w-none w-auto ring-0 focus:ring-0 border-y-0 border-x focus:border-x-gray-200 flex-1 p-0 border-gray-200 text-center"
                                    />

                                    <button className="flex items-center justify-center h-10 w-10">
                                        +
                                    </button>
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

                <ProductBottomTabs />
            </div>
        </div>
    );
};

export default ProductPage;

ProductPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
