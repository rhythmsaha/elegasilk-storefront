import { Order } from "@/pages/orders/[id]";
import React from "react";

interface Props {
    order: Order;
}

const Address: React.FC<Props> = ({ order }) => {
    return (
        <div className="p-4 shadow border border-gray-100 rounded-xl">
            <h2 className="font-semibold border-b pb-4 lg:text-lg">Shipping Info</h2>
            <div className="mt-2 capitalize">
                <h4 className="font-medium">{order?.address.firstName + " " + order?.address.lastName}</h4>
                <p className="text-sm text-gray-500">
                    {order?.address.houseNo}, {order?.address.street},{" "}
                    {order?.address.landmark && order.address.landmark + ","} {order?.address.city},{" "}
                    {order?.address.state} - {order?.address.pincode}
                </p>
                <p className="text-sm text-gray-500">Mobile: {order?.address.mobile}</p>
            </div>
        </div>
    );
};

export default Address;
