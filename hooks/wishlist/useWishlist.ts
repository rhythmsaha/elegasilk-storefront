import API_URLs from "@/lib/API_URLs";
import { useAuthStore } from "@/store/auth/useAuthStore";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface IWishlistItem {
    _id: string;
    name: string;
    MRP: number;
    discount: number;
    images: string;
    slug: string;
}

export interface Iwishlist {
    _id: string;
    userId: string;
    products: IWishlistItem[];
    total: number;
}

const useWishlist = (pid: string) => {
    const userId = useAuthStore((state) => state.user?._id);

    const [isAdded, setIsAdded] = useState(false);

    const router = useRouter();

    const checkItemInWishlist = useCallback(
        async (productId: string) => {
            if (!userId) return;
            try {
                const response = await axios.get(API_URLs.wishlist.checkOne(productId));
                if (response.status !== 200) throw new Error("Item not found in wishlist");
                const data = await response.data.data;
                setIsAdded(data);
                return data;
            } catch (error) {
                setIsAdded(false);
                return false;
            }
        },
        [userId]
    );

    const addItemToWishlist = async (productId: string) => {
        if (!userId) {
            router.push("/login?referUrl=" + router.asPath);
            return;
        }

        try {
            setIsAdded(true);
            const response = await axios.post(API_URLs.wishlist.add, { productId });
            if (response.status !== 201) throw new Error("Error adding item to wishlist");
            toast.success("Item added to wishlist");
            return response.data.data;
        } catch (error) {
            toast.error("Error adding item to wishlist");
            setIsAdded(false);
            return false;
        }
    };

    const removeItemFromWishlist = async (productId: string) => {
        if (!userId) {
            router.push("/login?referUrl=" + router.asPath);
            return;
        }

        try {
            setIsAdded(false);
            const response = await axios.delete(API_URLs.wishlist.remove(productId));
            if (response.status !== 200) throw new Error("Error removing item from wishlist");
            if (response.data.success) setIsAdded(false);
            toast.success("Item removed from wishlist");
            return response.data.data;
        } catch (error) {
            toast.error("Error removing item from wishlist");
            setIsAdded(true);
            return false;
        }
    };

    useEffect(() => {
        if (!pid) return;
        if (!userId) return;
        checkItemInWishlist(pid);
    }, [checkItemInWishlist, pid, userId]);

    return { checkItemInWishlist, addItemToWishlist, removeItemFromWishlist, added: isAdded };
};

export default useWishlist;
