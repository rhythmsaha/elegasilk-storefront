import OrderSummaryItem from "@/components/orders/OrderSummaryItem";
import Image from "next/image";
import React from "react";

interface Props {}

const OrderHistorySection: React.FC<Props> = (props) => {
    return (
        <section className="mt-8 lg:mt-10 space-y-4">
            <div className="space-y-6">
                <OrderSummaryItem />
                <OrderSummaryItem />
                <OrderSummaryItem />
                <OrderSummaryItem />
                <OrderSummaryItem />
            </div>
        </section>
    );
};

export default OrderHistorySection;
