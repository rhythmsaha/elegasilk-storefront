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

interface ICartItem {
    productId: IProduct;
    quantity: number;
    total: number;
}

interface ICartStore {
    isLoading: boolean;
    products: ICartItem[];
    totalQuantity: number;
    totalPrice: number;

    _updateCart: (cart: ICartStore) => void;
    _addItemToCart?: (productId: string, quantity: number) => void;

    clearCart: () => Promise<void>;
    addItemToCart: (productId: string, quantity: number) => Promise<void>;
    // incrementQuantity: (productId: string) => Promise<void>;
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
                set({ isLoading: true });

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
                    set({ isLoading: false });
                }
            },

            addItemToCart: async (productId, quantity) => {
                if (get().isLoading) return;
                set({ isLoading: true });

                try {
                    if (!productId) {
                        throw new Error("Product ID is required");
                    }

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
                    set({ isLoading: false });
                }
            },

            removeItem: async () => {},
            decrementQuantity: async () => {},

            clearCart: async () => {},

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
