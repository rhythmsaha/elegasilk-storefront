import React from "react";

interface Props {}

const Pricing: React.FC<Props> = (props) => {
    return (
        <div className="mt-2 sm:mt-3 lg:mt-2 xl:mt-4">
            <div className="flex items-center">
                <span className="text-3xl sm:text-4xl font-semibold text-gray-950">₹ 6,999</span>

                <span className="text-lg sm:text-xl line-through text-gray-500 ml-2">₹ 8,999</span>

                <span className="text-green-600 text-lg sm:text-xl ml-4">22% off</span>
            </div>

            <span className=" text-gray-500 text-sm sm:text-base text-start">
                (Inclusive of all taxes)
            </span>
        </div>
    );
};

export default Pricing;
