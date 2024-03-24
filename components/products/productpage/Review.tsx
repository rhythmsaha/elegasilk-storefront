import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import type { Rating as IRating } from "./ReviewsSection";

interface Props {
    rating: IRating;
}

const Review: React.FC<Props> = ({ rating }) => {
    const [trunc, setTrunc] = useState(true);

    const onToggleTrunc = () => {
        setTrunc((val) => !val);
    };

    return (
        <div className="lg:max-w bg-white shadow border border-gray-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-gray-800 font-medium leading-none capitalize">
                        {rating.customerId.firstName} {rating.customerId.lastName}
                    </h3>
                    <span className="text-sm font-light leading-none text-gray-600">(Verified)</span>
                </div>

                <span className="text-gray-700 text-sm">1 month ago</span>
            </div>

            <div className="my-2">
                <Rating
                    className=""
                    size={20}
                    iconsCount={5}
                    initialValue={rating.rating}
                    allowFraction
                    SVGclassName="inline"
                    readonly
                />
            </div>

            <div className="space-y-2 ">
                {rating.title && <h4 className="font-semibold text-gray-700">{rating.title}</h4>}
                {rating.review && (
                    <p
                        className={`${trunc ? "line-clamp-5 lg:line-clamp-10" : ""} text-sm sm:text-base `}
                        onClick={onToggleTrunc}
                    >
                        {rating.review}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Review;
