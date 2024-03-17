import Link from "next/link";
import React from "react";
import { BsBagX } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

interface Props {}

const EmptyState: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-96 lg:mt-20">
            <BsBagX className="text-6xl text-gray-400" />
            <h2 className="text-center text-xl font-medium text-gray-600 mt-2">Your Cart is Empty</h2>
            <Link
                href="/"
                className="px-6 py-2 border-2 mt-6 rounded-lg border-gray-300 hover:border-black text-gray-500 hover:text-black transition duration-150"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default EmptyState;
