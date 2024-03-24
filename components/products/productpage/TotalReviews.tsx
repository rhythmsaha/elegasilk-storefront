import React from "react";
import { Rating } from "react-simple-star-rating";

interface Props {
    totalReviews: number;
    rating: number;
}

const TotalReviews: React.FC<Props> = ({ totalReviews, rating }) => {
    return (
        <div className="min-w-64 flex items-start justify-start lg:items-center lg:border-r">
            <div className="min-w-max flex flex-col items-center">
                <div>
                    <span className="font-semibold text-6xl text-gray-900">{rating || 0}</span>
                    <span className="ml-2 font-medium text-xl text-gray-700">Out of 5</span>
                </div>

                <div className="my-2">
                    <Rating
                        className=""
                        size={30}
                        iconsCount={5}
                        initialValue={rating}
                        allowFraction
                        SVGclassName="inline"
                        readonly
                    />
                </div>

                <p className="text-center text-slate-800 w-full">
                    ({totalReviews} Rating{totalReviews !== 1 && "s"})
                </p>
            </div>
        </div>
    );
};

export default TotalReviews;
