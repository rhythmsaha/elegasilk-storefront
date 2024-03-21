import React from "react";
import OrderedItems from "./OrderedItems";

interface Props {}

const OrderSummaryItem: React.FC<Props> = (props) => {
    return (
        <div className="border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-200">
                <div className="flex items-center gap-2 text-sm">
                    <span>
                        Order ID: <span className="font-bold">#VIL311564</span>
                    </span>

                    <span>Tue, Feb 20</span>
                </div>
            </div>

            <div className="p-4 space-y-8">
                <OrderedItems />
                <OrderedItems />
                <OrderedItems />
            </div>

            <div>
                <div className="text-sm p-4 border-t flex justify-between items-center">
                    <span className="text-green-500 font-medium">Shipped</span>
                    <span>Sun, Feb 25</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryItem;
