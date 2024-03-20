import SummaryItem from "@/components/cart/price-summary/SummaryItem";
import useCartStore from "@/store/cart/useCartStore";
import React from "react";

interface Props {}

const PriceSummarySection: React.FC<Props> = () => {
    const { totalPrice, totalQuantity } = useCartStore((state) => state);

    return (
        <div className="p-4 shadow border border-gray-50  rounded-lg">
            <h2 className="font-semibold border-b pb-4 lg:text-lg">Price Details</h2>

            <div className="my-6">
                <SummaryItem title="Total Items" value={totalQuantity} />
                <SummaryItem title="Total Amount" value={totalPrice} isMoney />
                <SummaryItem title="Discount" value={0} isMoney />
                <SummaryItem title="Delivery Charges" value={0} isMoney />
            </div>

            <hr />

            <div className="flex justify-between items-center mt-4">
                <h4 className="md:text-lg font-medium tracking-wide uppercase">Total</h4>
                <span className="md:text-lg font-medium">₹ {totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default PriceSummarySection;
