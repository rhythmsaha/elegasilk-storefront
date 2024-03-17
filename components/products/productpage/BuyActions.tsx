import useCartStore from "@/store/cart/useCartStore";
import React from "react";
import { AiOutlineCheck, AiOutlineShoppingCart } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";

interface Props {
    productId: string;
}

const BuyActions: React.FC<Props> = ({ productId }) => {
    const { addItemToCart, cheeckItemInCart } = useCartStore((state) => state);

    const addHandler = () => {
        addItemToCart(productId, 1);
    };

    const isItemInCart = cheeckItemInCart(productId);
    return (
        <div className="mt-4 xl:mt-8">
            <div className="flex border justify-between border-gray-200 max-w-32">
                <button className="flex items-center justify-center h-10 w-10 ">-</button>

                <input
                    type="text"
                    className="col-span-2 min-w-0 max-w-none w-auto ring-0 focus:ring-0 border-y-0 border-x focus:border-x-gray-200 flex-1 p-0 border-gray-200 text-center"
                />

                <button className="flex items-center justify-center h-10 w-10">+</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
                {!isItemInCart && (
                    <button
                        className="bg-yellow-400 hover:bg-yellow-300 transition duration-100 text-black py-3 rounded-md flex items-center justify-center"
                        onClick={addHandler}
                    >
                        <AiOutlineShoppingCart className="mr-2" />
                        <span>Add to Cart</span>
                    </button>
                )}

                {isItemInCart && (
                    <button
                        className="bg-yellow-400 hover:bg-yellow-300 transition duration-100 text-black py-3 rounded-md flex items-center justify-center"
                        // onClick={addHandler}
                    >
                        {/* <AiOutlineShoppingCart className="mr-2" /> */}
                        <AiOutlineCheck className="mr-2 text-lg" />
                        <span>Added</span>
                    </button>
                )}

                <button className="bg-black text-white py-3 rounded-md flex items-center justify-center">
                    <IoFlash className="mr-2" />
                    <span>Buy Now</span>
                </button>
            </div>
        </div>
    );
};

export default BuyActions;
