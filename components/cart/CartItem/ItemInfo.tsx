import React from "react";

interface Props {
    name: string;
    MRP: number;
    quantity: number;
}

const ItemInfo: React.FC<Props> = ({ MRP, name, quantity }) => {
    return (
        <div>
            <h3 className="font-medium capitalize leading-snug md:text-lg">{name}</h3>
            <p className="text-gray-500 mt-1 flex items-center gap-4 md:text-lg">
                <span>₹ {MRP}</span>
                <span className="mx-2">x{quantity}</span>
            </p>
        </div>
    );
};

export default ItemInfo;
