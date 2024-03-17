import { priceAfterDiscount } from "@/utils/calculateprice";
import React from "react";

interface Props {
    MRP: number;
    discount: number;
}

const Pricing: React.FC<Props> = ({ MRP, discount }) => {
    return (
        <div className="mt-2 sm:mt-3 lg:mt-2 xl:mt-4">
            <div className="flex items-center">
                <span className="text-3xl sm:text-4xl font-semibold text-gray-950">
                    ₹ {priceAfterDiscount(MRP, discount)}
                </span>

                {discount && discount > 0 && (
                    <>
                        <span className="text-lg sm:text-xl line-through text-gray-500 ml-2">₹ {MRP}</span>
                        <span className="text-green-600 text-lg sm:text-xl ml-4">{discount}% off</span>
                    </>
                )}
            </div>

            <span className="mt-1 text-gray-500 text-sm sm:text-base text-start block">(Inclusive of all taxes)</span>
        </div>
    );
};

export default Pricing;
