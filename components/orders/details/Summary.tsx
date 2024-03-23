import SummaryItem from "@/components/cart/price-summary/SummaryItem";
import { Item } from "@/pages/orders/[id]";
import React from "react";

interface Props {
    // Add props here
    items: Item[];
    totalItems: number;
    totalAmount: number;
}

const Summary: React.FC<Props> = ({
    // Destructure props here
    totalItems,
    totalAmount,
    items,
}) => {
    return (
        <div className="p-4 shadow border border-gray-50 rounded-xl">
            <h2 className="font-semibold border-b pb-4 lg:text-lg">Order Summary</h2>
            <div className="my-6">
                <SummaryItem title="Total Items" value={totalItems} />

                {items.map((item, index) => (
                    <SummaryItem key={item._id} title={`Item ${index + 1}`} value={item.MRP * item.quantity} isMoney />
                ))}

                <hr className="my-4" />

                <SummaryItem title="Sub Total" value={totalAmount} isMoney />
                <SummaryItem title="Discount" value={-0} isMoney />
                <SummaryItem title="Delivery Charges" value={0} isMoney />
            </div>
            <hr />
            <div className="flex justify-between items-center mt-4">
                <h4 className="md:text-lg font-medium tracking-wide uppercase">Total</h4>
                <span className="md:text-lg font-medium">
                    {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                    }).format(totalAmount)}
                </span>
            </div>
        </div>
    );
};

export default Summary;
