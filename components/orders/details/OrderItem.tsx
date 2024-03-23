import { Item } from "@/pages/orders/[id]";
import Image from "next/image";
import React from "react";

const OrderItem: React.FC<Item> = ({ MRP, images, name, quantity, slug }) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 py-2 border-b last:border-b-0 border-gray-100">
            <div className="flex gap-2">
                <Image
                    src={images}
                    width={80}
                    height={100}
                    alt="Empty Cart"
                    className="w-16 rounded-xl object-cover aspect-[1/1] object-top"
                />

                <div>
                    <h3 className="line-clamp-1 text-gray-900  capitalize tracking-wide">{name}</h3>
                    <div className="text-sm text-gray-500">
                        Qty: <span>x{quantity}</span>
                    </div>

                    <div className="text-gray-500 text-sm">
                        Price: &nbsp;
                        <span>
                            {
                                // Price
                                new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                }).format(MRP)
                            }
                        </span>
                    </div>
                </div>
            </div>

            <hr className="my-2" />

            <div className="flex items-center justify-between gap-4 md:flex-col md:justify-start">
                <span className="md:hidden font-medium text-sm">Subtotal</span>

                <span className="font-medium text-sm">
                    {
                        // Price
                        new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                        }).format(MRP * quantity)
                    }
                </span>
            </div>
        </div>
    );
};

export default OrderItem;
