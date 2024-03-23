import { Order } from "@/pages/orders/[id]";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import Actions from "./Actions";

interface Props {
    order: Order;
    updatedAt: string;
    onCancel: (status: Order["status"]) => void;
}

const OrderHeadingPart: React.FC<Props> = ({ order, updatedAt, onCancel }) => {
    return (
        <>
            <div className="">
                <h2 className="text-lg font-semibold lg:text-xl">Order ID: {order?.orderId}</h2>

                <div className="mt-1 text-sm text-gray-500 flex flex-col sm:flex-row ">
                    <span className="sm:pr-2 sm:border-r">
                        Order Date:{" "}
                        {new Date(order?.createdAt!).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </span>

                    {order?.status === "PENDING" ? (
                        <span className="sm:px-2 text-orange-500 font-medium">Processing Your Order</span>
                    ) : order?.status === "PLACED" ? (
                        <span className="sm:px-2 text-yellow-500 font-medium">Not yet shipped</span>
                    ) : (
                        <span
                            className={`
                            flex items-center gap-1 sm:px-2 font-semibold
                            ${order?.status === "FAILED" && `text-red-500`}
                            ${order?.status === "SHIPPED" && `text-green-500`}
                            ${order?.status === "DELIVERED" && `text-green-500`}
                            ${order?.status === "CANCELLED" && `text-red-500`}
                            ${order?.status === "RETURN_REQUESTED" && `text-yellow-500`}
                            ${order?.status === "EXCHANGE_REQUESTED" && `text-yellow-500`}
                            ${order?.status === "EXCHANGED" && `text-green-500`}
                            ${order?.status === "RETURNED" && `text-yellow-500`}
                            ${order?.status === "REFUNDED" && `text-gray-500`}
                           
                        `}
                        >
                            <TbTruckDelivery className="inline-block" />

                            {order?.status === "SHIPPED" && `Estimated Delivery: ${updatedAt}`}
                            {order?.status === "FAILED" && `Failed`}
                            {order?.status === "DELIVERED" && `Deliverd: ${updatedAt}`}
                            {order?.status === "CANCELLED" && `Cancelled: ${updatedAt}`}
                            {order?.status === "EXCHANGE_REQUESTED" && `Exchange Requested: ${updatedAt}`}
                            {order?.status === "EXCHANGED" && `Replaced: ${updatedAt}`}
                            {order?.status === "RETURN_REQUESTED" && `Return Requested: ${updatedAt}`}
                            {order?.status === "RETURNED" && `Returned: ${updatedAt}`}
                            {order?.status === "REFUNDED" && `Refunded: ${updatedAt}`}
                        </span>
                    )}
                </div>
            </div>

            <Actions order={order} onCancel={onCancel} />
        </>
    );
};

export default OrderHeadingPart;
