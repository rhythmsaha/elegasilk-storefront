import { IWishlistItem } from "@/hooks/wishlist/useWishlist";
import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

interface Props {
    product: IWishlistItem;
    mutate: () => void;
}

const WishListItem: React.FC<Props> = ({ product, mutate }) => {
    const { _id, name, MRP, discount, images, slug } = product;

    const onRemove = async () => {
        try {
            const response = await axios.delete(API_URLs.wishlist.remove(_id));
            if (response.status !== 200) throw new Error("Failed to remove from wishlist");
            toast.success("Removed from wishlist");
            mutate();
        } catch (error: any) {
            toast.error("Failed to remove from wishlist");
        }
    };

    return (
        <div className="p-3 shadow-lg border border-gray-50 rounded-lg flex flex-col justify-between">
            <div>
                <div>
                    <Image
                        src={images[0]}
                        alt={name}
                        height={450}
                        width={300}
                        className="w-full h-96 object-top object-cover rounded-md"
                    />
                </div>
                <div className="mt-2">
                    <h2 className="capitalize line-clamp-1 text-base text-gray-800 ">{name}</h2>
                </div>
                <div className="mt-1 flex items-center gap-2">
                    <span className="text-gray-900 text-lg font-medium tracking-wide">₹{MRP}</span>
                    {discount && <span className="text-green-700 text-sm">{discount}% off</span>}
                </div>
            </div>

            {/* Remove from Wishlist */}
            <div className="mt-4 grid grid-cols-2 gap-2">
                <Link
                    href={`/product/${slug}`}
                    className="border py-2 text-center rounded-md border-black text-white bg-black"
                >
                    View
                </Link>
                <button className="border py-2 rounded-md" onClick={onRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default WishListItem;
