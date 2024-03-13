/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import { Rating } from "react-simple-star-rating";
import { BsShieldCheck } from "react-icons/bs";
import { IoCubeOutline, IoRibbonOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import CheckDelivery from "@/components/products/productpage/CheckDelivery";

interface Props {}

const images = [
    "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw74cd4711/images/Taneira/Catalog/SPH07L00099_1.jpg?sw=1000&sh=1500",
    "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dwfd64d18c/images/Taneira/Catalog/SPH07L00099_2.jpg?sw=1000&sh=1500",
    "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw3fca4d19/images/Taneira/Catalog/SPH07L00099_3.jpg?sw=1000&sh=1500",
    "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw1e6c1740/images/Taneira/Catalog/SPH07L00099_4.jpg?sw=1000&sh=1500",
    "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw1aeb669e/images/Taneira/Catalog/SPH07L00099_5.jpg?sw=1000&sh=1500",
];

const ProductPage: NextPageWithLayout<Props> = () => {
    return (
        <div className="mt-8 sm:mt-10   ">
            <div className="max-w-screen-2xl mx-auto w-11/12">
                <div className="grid grid-cols-2 gap-6 place-items-start">
                    <section>
                        <div className="grid grid-cols-1 gap-4 ">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    className="object-cover w-full aspect-[4/5] object-top"
                                />
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col">
                        <div>
                            <div>
                                <span className="">Cotton</span>
                            </div>

                            <h2 className="capitalize text-3xl font- text-gray-800 tracking-wide">
                                Onion Pink Chanderi All-Over Ikat Print Saree with Contrast Borders
                            </h2>

                            <div className="flex items-center leading-none gap-2 mt-2">
                                <Rating
                                    className=""
                                    size={20}
                                    iconsCount={5}
                                    initialValue={2.4}
                                    allowFraction
                                    SVGclassName="inline"
                                    readonly
                                    transition
                                />

                                <span className="text-lg">2.4 (245 Review)</span>

                                {/* Best Seller */}
                                <span className="bg-pink-500 text-pink-50 text-[45%] sm:text-sm  px-2 sm:px-2.5 sm:pr-4 py-0.5 rounded-r-full">
                                    Best Seller
                                </span>
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold text-gray-800">
                                        ₹ 6,999
                                    </span>

                                    <span className="text-lg line-through text-gray-600 ml-2">
                                        ₹ 8,999
                                    </span>

                                    <span className="text-green-600 text-lg ml-2">22% off</span>
                                </div>

                                <span className="text-gray-600">Inclusive of all taxes</span>
                            </div>

                            <div className="flex flex-col mt-4">
                                <span className="h-6 w-6 inline-block bg-red-500 rounded-full ring-2 ring-offset-2 ring-gray-200" />
                                <span className="flex items-center mt-1">
                                    <span className="text-gray-800">Color: </span>
                                    <span className="text-gray-600">Red</span>
                                </span>

                                <span className="inline-flex items-center gap-1">
                                    <span className="text-gray-800">SKU: </span>
                                    <span className="text-gray-600">SPH07L00099</span>
                                </span>

                                <span>
                                    <span className="text-gray-800">Availability: </span>
                                    <span className="text-green-600">In Stock</span>
                                </span>
                            </div>

                            <div className="space-y-2 mt-4">
                                <p className="flex items-center gap-1 leading-none">
                                    <BsShieldCheck className="" /> Authentic & Quality Assured
                                </p>

                                <p className="flex items-center gap-1 leading-none">
                                    <IoRibbonOutline className="" /> 100% money back guarantee
                                    *Learn more
                                </p>

                                <p className="flex items-center gap-1 leading-none">
                                    <IoCubeOutline className="" /> Free Shipping & Returns *Learn
                                    more
                                </p>
                            </div>

                            <CheckDelivery />

                            <div className="mt-10">
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

                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <button className="bg-black text-white py-3 rounded-md">
                                        Add To Bag
                                    </button>
                                    <button className="bg-black text-white py-3 rounded-md">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

ProductPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
