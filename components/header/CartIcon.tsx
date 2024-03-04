import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {
    qty: number;
}

const CartIcon: React.FC<Props> = ({ qty }) => {
    const cartQty = qty > 9 ? "9+" : qty.toString();

    return (
        <Link href="" className="text-2xl relative ">
            <AiOutlineShoppingCart />
            {/* If the quantity is 0, don't show the badge */}
            {qty > 0 && <span className="text-[10px] absolute bg-red-500 text-white aspect-square h-5 w-5 flex items-center justify-center rounded-full font-medium -top-2 -right-2">{cartQty}</span>}
        </Link>
    );
};

export default CartIcon;
