import Image from "next/image";
import React from "react";
import ItemInfo from "./ItemInfo";
import QuantityActions from "./QuantityActions";
import TotalPrice from "./TotalPrice";
import DeleteItemButton from "./DeleteItemButton";
import useCartStore, { ICartItem } from "@/store/cart/useCartStore";

interface Props {
    product: ICartItem;
}

const CartItem: React.FC<Props> = ({ product }) => {
    const { removeItem } = useCartStore((state) => state);

    return (
        <div className="p-4 bg-white shadow border border-gray-50 rounded-lg">
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <div className="flex items-stretch gap-4">
                    <Image
                        src={product.productId.images[0]}
                        alt={product.productId.name}
                        width={80}
                        height={120}
                        className="rounded-lg h-full object-cover object-top"
                    />

                    <div className="flex flex-col justify-between min-h-full gap-2">
                        <ItemInfo
                            name={product.productId.name}
                            MRP={product.productId.MRP}
                            quantity={product.quantity}
                        />

                        <QuantityActions productId={product.productId._id} quantity={product.quantity} />
                    </div>
                </div>

                <div className="flex justify-between border-t lg:border-none lg:pt-0 pt-3 lg:flex-col-reverse lg:items-end">
                    <TotalPrice amount={product.totalPrice} />
                    <DeleteItemButton onDelete={() => removeItem(product.productId._id)} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
