import useCartStore from "@/store/cart/useCartStore";
import React from "react";

interface Props {
    productId: string;
    quantity: number;
}

const QuantityActions: React.FC<Props> = ({ productId, quantity }) => {
    const { decrementQuantity, addItemToCart } = useCartStore((state) => state);

    return (
        <div className="flex items-center">
            <button
                onClick={() => decrementQuantity(productId)}
                className="bg-gray-200 h-8 w-8 inline-flex items-center justify-center rounded-lg"
            >
                -
            </button>

            <span className="h-10 w-10 inline-flex items-center justify-center">{quantity}</span>

            <button
                onClick={() => addItemToCart(productId, 1)}
                className="bg-gray-200 h-8 w-8 inline-flex items-center justify-center rounded-lg"
            >
                +
            </button>
        </div>
    );
};

export default QuantityActions;
