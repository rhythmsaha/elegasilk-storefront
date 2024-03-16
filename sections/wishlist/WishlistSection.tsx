import { Iwishlist } from "@/hooks/wishlist/useWishlist";
import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import React from "react";
import useSWR from "swr";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";
import WishListItem from "@/components/wishlist/WishListItem";

interface Props {}

const fetchWishlist = async (url: string) => {
    try {
        const response = await axios.get(url);
        if (response.status !== 200) throw new Error("Failed to fetch wishlist");
        if (!response.data.success) throw new Error("No wishlist found");
        if (!response.data.wishlist) throw new Error("No wishlist found");
        if (response.data.wishlist.products.length === 0) throw new Error("No products found in wishlist");

        return response.data.wishlist as Iwishlist;
    } catch (error: any) {
        throw new Error(error.message || "Failed to fetch wishlist");
    }
};

const WishlistSection: React.FC<Props> = (props) => {
    const { data, isLoading, error, mutate } = useSWR(API_URLs.wishlist.getall, fetchWishlist);

    if (error) return <EmptyState />;
    if (isLoading) return <LoadingState />;

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-10">
            {data?.products.map((product) => (
                <WishListItem key={product._id} product={product} mutate={mutate} />
            ))}
        </div>
    );
};

export default WishlistSection;
