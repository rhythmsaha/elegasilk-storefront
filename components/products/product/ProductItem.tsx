import useCartStore from "@/store/cart/useCartStore";
import { priceAfterDiscount } from "@/utils/calculateprice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import RatingChip from "./RatingChip";

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
        ratings: [
            {
                user: number;
                rating: number;
            }
        ];
    };
}

const ProductItem: React.FC<Props> = ({ product: { _id, name, images, MRP, discount, stock, slug, ratings } }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const { cheeckItemInCart, addItemToCart, removeItem } = useCartStore((state) => state);

    const isItemInCart = cheeckItemInCart(_id);

    const addToCart = () => {
        addItemToCart(_id, 1);
    };

    const removeFromCart = () => {
        removeItem(_id);
    };

    const ratingAverage =
        (ratings.length > 0 && ratings.reduce((acc, curr) => acc + curr?.rating, 0) / ratings.length) || 0;

    return (
        <div
            className="bg-gray-50 shadow rounded overflow-hidden flex flex-col justify-between h-full"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link href={`/product/${slug}`} className="cursor-pointer">
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
                    {ratingAverage > 0 && <RatingChip rating={ratingAverage} />}

                    {discount && discount > 0 && (
                        <span className="absolute top-0 left-0 bg-pink-500 text-pink-50 text-[45%] sm:text-sm  px-2 sm:px-2.5 sm:pr-4 py-0.5 rounded-r-full">
                            Discount
                        </span>
                    )}
                </div>

                <div className="product_info p-3">
                    <h4 className="text-sm sm:text-base line-clamp-2 text-15 text-black capitalize">{name}</h4>

                    <div className="flex items-center gap-2 gap-y-1 flex-wrap">
                        <span className="text-black font-semibold"> ₹{priceAfterDiscount(MRP, discount!)}</span>

                        {discount && discount > 0 && (
                            <>
                                <span className="text-gray-400 line-through font-light text-sm">₹{MRP}</span>
                                <span className="text-xs sm:text-sm  text-red-500">({discount}% off)</span>
                            </>
                        )}
                    </div>
                </div>
            </Link>

            <div className="product_bottom px-3 pb-3 mt-1">
                {stock > 0 ? (
                    <button className="add-to-cart-button" onClick={isItemInCart ? removeFromCart : addToCart}>
                        {!isItemInCart ? "Add to cart" : "Added to Cart"}
                        <IoCartOutline className="inline-block" />
                    </button>
                ) : (
                    <button className="outofstock-button">
                        Out of Stock
                        <IoCartOutline className="inline-block" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
