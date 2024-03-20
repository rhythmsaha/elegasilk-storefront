import ClearCartButton from "@/components/cart/ClearCartButton";
import useCartStore from "@/store/cart/useCartStore";
import React from "react";
import CartItem from "@/components/cart/CartItem/CartItem";
import { motion } from "framer-motion";

const CartSummarySection: React.FC = () => {
    const { products, clearCart } = useCartStore((state) => state);

    return (
        <motion.section
            className="lg:col-span-8 space-y-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
        >
            {products.map((product) => (
                <CartItem key={product._id} product={product} />
            ))}

            <div className="mt-4">
                <ClearCartButton onClear={clearCart} />
            </div>
        </motion.section>
    );
};

export default CartSummarySection;
