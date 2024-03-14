import React from "react";
import { Rating } from "react-simple-star-rating";

interface Props {}

const TotalReviews: React.FC<Props> = (props) => {
    return (
        <div className="min-w-64 flex items-start justify-start lg:items-center lg:justify-center lg:border-r">
            <div className="min-w-max flex flex-col items-center">
                <div>
                    <span className="font-semibold text-6xl text-gray-900">4.8</span>
                    <span className="ml-2 font-medium text-xl text-gray-700">Out of 5</span>
                </div>

                <div className="my-2">
                    <Rating
                        className=""
                        size={30}
                        iconsCount={5}
                        initialValue={4.8}
                        allowFraction
                        SVGclassName="inline"
                        readonly
                        transition
                    />
                </div>

                <p className="text-center text-slate-800 w-full">(107 Reviews)</p>
            </div>
        </div>
    );
};

export default TotalReviews;
