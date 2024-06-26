import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import { create } from "zustand";

import { devtools } from "zustand/middleware";

interface IProduct {
    _id: string;
    name: string;
    MRP: number;
    images: string[];
    slug: string;
}

export interface ICartItem {
    _id: string;
    productId: IProduct;
    quantity: number;
    totalPrice: number;
}

interface ICartStore {
    _id?: string;
    isLoading: boolean;
    products: ICartItem[];
    totalQuantity: number;
    totalPrice: number;

    _updateCart: (cart: ICartStore) => void;

    clearCart: () => Promise<void>;
    addItemToCart: (productId: string, quantity: number) => Promise<void>;
    decrementQuantity: (productId: string) => Promise<void>;
    removeItem: (productId: string) => Promise<void>;
    getCart: () => Promise<void>;

    cheeckItemInCart: (productId: string) => boolean;
}

const useCartStore = create<ICartStore>()(
    devtools(
        (set, get) => ({
            isLoading: false,
            products: [],
            totalQuantity: 0,
            totalPrice: 0,

            _updateCart: (cart) => {
                set(
                    {
                        _id: cart._id,
                        products: cart.products,
                        totalQuantity: cart.totalQuantity,
                        totalPrice: cart.totalPrice,
                    },
                    false,
                    "cart/updateCart"
                );
            },

            // Async Calls
            getCart: async () => {
                set({ isLoading: true }, false, "cart/start_loading");

                try {
                    const response = await axios.get(API_URLs.cart.getCart);

                    if (response.status !== 200) throw new Error("Failed to fetch cart");

                    const { data } = response;

                    if (!data.success) throw new Error("Failed to fetch cart");

                    const cart = data.cart;

                    get()._updateCart(cart);
                } catch (error) {
                    console.log(error);

                    // console.error("Failed to fetch cart");
                } finally {
                    set({ isLoading: false }, false, "cart/stop_loading");
                }
            },

            addItemToCart: async (productId, quantity) => {
                if (get().isLoading) return;
                set({ isLoading: true }, false, "cart/start_loading");

                try {
                    if (!productId) throw new Error("Product ID is required");

                    const response = await axios.post(API_URLs.cart.add, {
                        productId,
                        quantity,
                    });

                    if (response.status !== 200) throw new Error("Failed to add to cart");

                    const { data } = response;

                    if (!data.success) throw new Error("Failed to add to cart");

                    get()._updateCart(data.cart);
                } catch (error: any) {
                    toast.error(error.message);
                } finally {
                    set({ isLoading: false }, false, "cart/stop_loading");
                }
            },

            removeItem: async (productId) => {
                if (get().isLoading) return;
                set({ isLoading: true }, false, "cart/start_loading");
                try {
                    if (!productId) throw new Error("Product ID is required");

                    const response = await axios.post(API_URLs.cart.remove, {
                        productId,
                    });

                    if (response.status !== 200) throw new Error("Failed to remove from cart");

                    const { data } = response;

                    if (!data.success) throw new Error("Failed to remove from cart");

                    get()._updateCart(data.cart);
                } catch (error: any) {
                    toast.error(error.message || "Failed to remove from cart");
                } finally {
                    set({ isLoading: false }, false, "cart/stop_loading");
                }
            },

            decrementQuantity: async (productId) => {
                if (get().isLoading) return;
                set({ isLoading: true }, false, "cart/start_loading");

                try {
                    if (!productId) throw new Error("Product ID is required");

                    const response = await axios.post(API_URLs.cart.decrement, {
                        productId,
                    });

                    if (response.status !== 200) throw new Error("Failed to decrement quantity");

                    const { data } = response;

                    if (!data.success) throw new Error("Failed to decrement quantity");

                    get()._updateCart(data.cart);
                } catch (error: any) {
                    toast.error(error.message || "Failed to decrement quantity");
                } finally {
                    set({ isLoading: false }, false, "cart/stop_loading");
                }
            },

            clearCart: async () => {
                if (get().isLoading) return;
                set({ isLoading: true }, false, "cart/start_loading");

                try {
                    const response = await axios.delete(API_URLs.cart.clear);

                    if (response.status !== 200) throw new Error("Failed to clear cart");

                    const { data } = response;

                    if (!data.success) throw new Error("Failed to clear cart");

                    get()._updateCart(data.cart);
                } catch (error: any) {
                    toast.error(error.message || "Failed to clear cart");
                } finally {
                    set({ isLoading: false }, false, "cart/stop_loading");
                }
            },

            cheeckItemInCart: (productId) => {
                const { products } = get();

                if (products.length === 0) return false;

                const product = products.find((product) => product.productId._id === productId);

                if (product) return true;

                return false;
            },
        }),
        { name: "cart" }
    )
);

export default useCartStore;
// Path: store/cart/useCartStore.ts
