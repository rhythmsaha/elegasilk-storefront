import React from "react";
import { Rating } from "react-simple-star-rating";

interface Props {}

const HeadingPart: React.FC<Props> = () => {
    return (
        <div>
            <h2 className="capitalize text-xl sm:text-2xl lg:text-3xl font-normal text-gray-950 tracking-wide">
                Onion Pink Chanderi All-Over Ikat Print Saree with Contrast Borders
            </h2>

            <div className="mt-1 sm:mt-1.5 lg:mt-2 lg:flex lg:gap-2">
                <span className="bg-pink-500 text-pink-50 text-xs sm:text-sm  px-2 sm:px-2.5 sm:pr-4 py-0.5 rounded-r-full">
                    Best Seller
                </span>

                <div className="mt-2 lg:mt-0 flex items-center gap-3 leading-none">
                    <Rating
                        className=""
                        size={20}
                        iconsCount={5}
                        initialValue={2.5}
                        allowFraction
                        SVGclassName="inline"
                        readonly
                        transition
                    />

                    <span className="text-base text-gray-700">2.4 (245 Review)</span>
                </div>
            </div>
        </div>
    );
};

export default HeadingPart;
