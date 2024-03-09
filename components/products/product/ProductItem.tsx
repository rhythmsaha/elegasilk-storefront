import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

interface Props {}

const ProductItem = (props: Props) => {
    return (
        <div className="bg-gray-50 shadow rounded overflow-hidden">
            <div className="product_image relative">
                <Image
                    src="https://www.karagiri.com/cdn/shop/products/RoshnibhatiainwinepurpleSaree_2_300x.jpg?v=1665555721"
                    alt="Product Image"
                    layout="responsive"
                    height={450}
                    width={300}
                    className="object-cover w-full rounded"
                />

                {/* Rating */}
                <div className="absolute bottom-2 right-2 rounded-full py-1 px-3 bg-yellow-50">
                    <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                        <span className="leading-none text-black font-normal sm:font-medium text-xs sm:text-sm">
                            4.8
                        </span>
                    </span>
                </div>

                {/* Best Seller */}
                <span className="absolute top-0 left-0 bg-pink-500 text-pink-50 text-[45%] sm:text-sm  px-2 sm:px-2.5 sm:pr-4 py-0.5 rounded-r-full">
                    Best Seller
                </span>
            </div>

            <div className="product_info p-3">
                <h4 className="line-clamp-2 text-15 text-black">
                    ROSHNI BHATIA in Wine Purple Woven Kanjivaram Saree -
                    Special Wedding Edition
                </h4>

                <div className="flex items-center gap-2 gap-y-1 flex-wrap">
                    <span className="text-black font-semibold">₹4,100</span>
                    <span className="text-gray-400 line-through font-light text-sm">
                        ₹16,999
                    </span>
                    <span className="text-xs sm:text-sm  text-red-500">
                        (75% off)
                    </span>
                </div>
            </div>

            <div className="product_bottom px-3 pb-3 mt-1">
                <button className="add-to-cart-button">
                    Add to cart
                    <IoCartOutline className="inline-block" />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
