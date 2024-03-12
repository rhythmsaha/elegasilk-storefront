import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

interface Props {
    product: {
        _id: string;
        name: string;
        images: string[];
        MRP: number;
        discount?: number;
        stock: number;
        published: boolean;
        createdAt: string;
        slug: string;
    };
}

const ProductItem: React.FC<Props> = ({
    product: { _id, name, images, MRP, discount, stock, published, createdAt, slug },
}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <div
            className="bg-gray-50 shadow rounded overflow-hidden flex flex-col justify-between h-full"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="cursor-pointer">
                <div className="product_image relative overflow-hidden">
                    {images.length > 0 && isHovering ? (
                        <Image
                            src={images[1]}
                            alt="Product Image"
                            height={450}
                            width={300}
                            className="object-cover w-full rounded"
                        />
                    ) : (
                        <Image
                            src={images[0]}
                            alt="Product Image"
                            height={450}
                            width={300}
                            className="object-cover w-full rounded"
                        />
                    )}

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
                    <h4 className="text-sm sm:text-base line-clamp-2 text-15 text-black capitalize">
                        {name}
                    </h4>

                    <div className="flex items-center gap-2 gap-y-1 flex-wrap">
                        <span className="text-black font-semibold">₹{MRP}</span>
                        <span className="text-gray-400 line-through font-light text-sm">
                            ₹{MRP}
                        </span>
                        <span className="text-xs sm:text-sm  text-red-500">(75% off)</span>
                    </div>
                </div>
            </div>

            <div className="product_bottom px-3 pb-3 mt-1">
                <button className="add-to-cart-button" onClick={() => console.log("Hello")}>
                    Add to cart
                    <IoCartOutline className="inline-block" />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
