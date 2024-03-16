import useWishlist from "@/hooks/wishlist/useWishlist";
import React from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Rating } from "react-simple-star-rating";

interface Props {
    _id: string;
    name: string;
    bestSeller?: boolean;
    rating?: {
        average: number;
        count: number;
    };
}

const HeadingPart: React.FC<Props> = ({ name, rating, bestSeller, _id }) => {
    const { addItemToWishlist, added, checkItemInWishlist, removeItemFromWishlist } = useWishlist(_id);
    return (
        <div>
            <div className="flex items-start justify-between gap-8">
                <h2 className="capitalize text-xl sm:text-2xl lg:text-3xl font-normal lg:font-medium lg:leading-10 text-gray-950 tracking-wide">
                    {name}
                </h2>

                <button
                    className="flex items-center gap-2 mt-1 lg:mt-1.5"
                    onClick={added ? () => removeItemFromWishlist(_id) : () => addItemToWishlist(_id)}
                >
                    {added ? <IoMdHeart className="text-3xl text-pink-500" /> : <IoMdHeartEmpty className="text-3xl" />}
                </button>
            </div>

            <div className="mt-1 sm:mt-1.5 lg:mt-2 lg:flex lg:gap-2">
                {bestSeller && (
                    <span className="bg-pink-500 text-pink-50 text-xs sm:text-sm  px-2 sm:px-2.5 sm:pr-4 py-0.5 rounded-r-full">
                        Best Seller
                    </span>
                )}

                {rating && (
                    <div className="mt-2 lg:mt-0 flex items-center gap-3 leading-none">
                        <Rating
                            size={20}
                            iconsCount={5}
                            initialValue={rating.average}
                            allowFraction
                            SVGclassName="inline"
                            readonly
                        />

                        <span className="text-base text-gray-700">
                            {rating.average} ({rating.count} Reviews)
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeadingPart;
