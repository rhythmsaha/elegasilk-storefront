import React, { HTMLAttributes, HTMLProps } from "react";
import OrderedItems from "./OrderedItems";
import { getOrderStatusText } from "@/utils/order.ts/orderstatus";
import Link from "next/link";

interface Props {
    order: any;
}

const OrderSummaryItem: React.FC<Props> = ({ order }) => {
    const isOrderEmpty = order.items.length === 0;

    const { classNames, orderStatusText } = getOrderStatusText(order.status);

    return (
        <div className="border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-200">
                <div className="flex items-center justify-between gap-2 text-sm">
                    <Link href={`/orders/${order._id}`} className="hover:underline">
                        Order ID: <span className="font-semibold">{order.orderId}</span>
                    </Link>

                    <span>{order.createdAt}</span>
                </div>
            </div>

            <div className="p-4 space-y-8">
                {!isOrderEmpty &&
                    order.items.map((item: any) => <OrderedItems key={item._id} item={item} orderId={order._id} />)}
            </div>

            <div>
                <div className="text-sm p-4 border-t flex justify-between items-center">
                    <span className={classNames}>{orderStatusText}</span>
                    <span>{order.updatedAt}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryItem;
