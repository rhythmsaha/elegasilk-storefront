import useCartStore from "@/store/cart/useCartStore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineShoppingCart } from "react-icons/ai";
import { HiPlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { IoFlash } from "react-icons/io5";

interface Props {
    productId: string;
    available: boolean;
    stock: number;
}

const BuyActions: React.FC<Props> = ({ productId, available, stock }) => {
    const [inputQuantity, setInputQuantity] = useState(1);

    const { addItemToCart, cheeckItemInCart, removeItem } = useCartStore((state) => state);
    const router = useRouter();

    const onQuantityIncrease = () => {
        if (inputQuantity >= stock) return;
        setInputQuantity((val) => val + 1);
    };

    const onQuantityDecrease = () => {
        if (inputQuantity <= 1) return;
        setInputQuantity((val) => val - 1);
    };

    const addHandler = () => {
        addItemToCart(productId, inputQuantity);
    };

    const buyNowHandler = () => {
        addItemToCart(productId, 1);
        router.push("/cart");
    };

    const isItemInCart = cheeckItemInCart(productId);
    return (
        <div className="mt-4 xl:mt-8">
            <div className="flex border justify-between border-gray-200 max-w-32">
                <button
                    onClick={onQuantityDecrease}
                    className={`flex items-center justify-center h-10 w-10 font-bold ${
                        inputQuantity > 1 ? "bg-black text-white" : "bg-gray-200 text-black"
                    }`}
                >
                    <HiOutlineMinusSm />
                </button>

                <input
                    type="text"
                    className="col-span-2 min-w-0 max-w-none w-auto outline-none border-x flex-1 cursor-default select-none text-center"
                    value={inputQuantity}
                    readOnly
                />

                <button
                    onClick={onQuantityIncrease}
                    className={`flex items-center justify-center h-10 w-10 font-bold ${
                        inputQuantity < stock ? "bg-black text-white" : "bg-gray-200 text-black"
                    }`}
                >
                    <HiPlusSm />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
                {!available && (
                    <button
                        className="py-3 rounded-md flex items-center justify-center
                    bg-gray-300 text-gray-500
                    "
                    >
                        <span>Out of Stock</span>
                    </button>
                )}

                {available && !isItemInCart && (
                    <button
                        className="bg-yellow-400 hover:bg-yellow-300 transition duration-100 text-black py-3 rounded-md flex items-center justify-center"
                        onClick={addHandler}
                    >
                        <AiOutlineShoppingCart className="mr-2" />
                        <span>Add to Cart</span>
                    </button>
                )}

                {available && isItemInCart && (
                    <button
                        className="bg-yellow-400 hover:bg-yellow-300 transition duration-100 text-black py-3 rounded-md flex items-center justify-center"
                        onClick={removeItem.bind(null, productId)}
                    >
                        <AiOutlineCheck className="mr-2 text-lg" />
                        <span>Added</span>
                    </button>
                )}

                <button
                    className="bg-black text-white py-3 rounded-md flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 transition duration-100"
                    disabled={!available}
                    onClick={!available ? undefined : buyNowHandler}
                >
                    <IoFlash className="mr-2" />
                    <span>Buy Now</span>
                </button>
            </div>
        </div>
    );
};

export default BuyActions;
