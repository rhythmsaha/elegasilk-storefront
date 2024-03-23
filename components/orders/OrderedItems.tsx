import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    item: any;
    orderId: string;
}

const OrderedItems: React.FC<Props> = ({ item, orderId }) => {
    return (
        <div className="flex gap-2">
            <Image
                src={item.images[0]}
                alt=""
                height={120}
                width={80}
                className="object-top object-cover h-20 w-20 max-w-20 max-h-20 rounded-md"
            />

            <div className="min-h-full flex flex-col items-start gap-1">
                <h3 className="text-gray-700 line-clamp-1 capitalize">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                    <span className="font-semibold">₹{item.MRP}</span> x {item.quantity}
                </p>
                <Link href={`/orders/${orderId}`} className="text-sm inline-flex underline">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default OrderedItems;
