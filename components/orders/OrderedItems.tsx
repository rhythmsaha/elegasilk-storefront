import Image from "next/image";
import React from "react";

interface Props {}

const OrderedItems: React.FC<Props> = (props) => {
    return (
        <div className="flex gap-2">
            <Image
                src="https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dwdd173c9c/images/Taneira/Catalog/SPH08A00054_1.jpg?sw=80&sh=120"
                alt=""
                height={120}
                width={80}
                className="object-top object-cover h-20 w-20 max-w-20 max-h-20 rounded-md"
            />

            <div className="min-h-full flex flex-col items-start gap-1">
                <h3 className="text-gray-700 line-clamp-1">Red Pure Cotton Ajrakh Block Print Saree</h3>
                <p className="text-gray-500 text-sm">
                    <span className="font-semibold">₹ 1,999</span> x 3
                </p>
                <button className="text-sm inline-flex underline">Details</button>
            </div>
        </div>
    );
};

export default OrderedItems;
