import React from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import useCartStore from "@/store/cart/useCartStore";
import Image from "next/image";
import { MdClearAll, MdDelete, MdDeleteOutline } from "react-icons/md";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";
import EmptyState from "@/sections/cart/EmptyState";

const CartPage: NextPageWithLayout = () => {
    const {
        products,
        isLoading,
        clearCart,
        removeItem,
        decrementQuantity,
        addItemToCart,
        _updateCart,
        totalPrice,
        totalQuantity,
    } = useCartStore((state) => state);

    if (totalQuantity === 0 && !isLoading) return <EmptyState />;

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                    <CgSpinner className="animate-spin h-12 w-12 text-black" />
                </div>
            )}

            <div>
                <div className="w-full bg-gray-100 h-36 lg:h-48 flex items-center justify-center">
                    <h2 className="text-xl font-medium lg:text-2xl">Shopping Cart</h2>
                </div>

                {totalQuantity > 0 && (
                    <div className="max-w-screen-2xl space-y-4 mx-auto w-11/12 mt-10 mb-20">
                        <div className="grid lg:grid-cols-12 gap-4 items-start">
                            <section className="lg:col-span-8 space-y-4 ">
                                {products.map((product) => (
                                    <div
                                        className="p-4 bg-white shadow border border-gray-50 rounded-lg"
                                        key={product._id}
                                    >
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
                                                    <div>
                                                        <h3 className="font-medium capitalize leading-snug md:text-lg">
                                                            {product.productId.name}
                                                        </h3>
                                                        <p className="text-gray-500 mt-1 flex items-center gap-4 md:text-lg">
                                                            <span>₹ {product.productId.MRP}</span>
                                                            <span className="mx-2">x{product.quantity}</span>
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => decrementQuantity(product.productId._id)}
                                                            className="bg-gray-200 h-8 w-8 inline-flex items-center justify-center rounded-lg"
                                                        >
                                                            -
                                                        </button>

                                                        <span className="h-10 w-10  inline-flex items-center justify-center">
                                                            {product.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() => addItemToCart(product.productId._id, 1)}
                                                            className="bg-gray-200 h-8 w-8 inline-flex items-center justify-center rounded-lg"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between border-t lg:border-none lg:pt-0 pt-3 lg:flex-col-reverse lg:items-end">
                                                <span className="font-medium text-gray-700 md:text-lg">
                                                    ₹{product.totalPrice}
                                                </span>

                                                <button
                                                    className="flex items-center text-red-500 gap-1 cursor-pointer"
                                                    onClick={() => removeItem(product.productId._id)}
                                                >
                                                    <MdDelete className="text-lg" />
                                                    <span className="lg:hidden">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-4">
                                    <button
                                        onClick={clearCart}
                                        className="ml-auto flex items-center text-white py-1 px-2 rounded-lg gap-1 cursor-pointer bg-red-500"
                                    >
                                        <MdClearAll className="text-lg" />
                                        <span>Clear Cart</span>
                                    </button>
                                </div>
                            </section>

                            <section className="p-4 shadow border border-gray-50 lg:col-span-4 rounded-lg">
                                <div>
                                    <h2 className="font-semibold border-b pb-4 lg:text-lg">Price Details</h2>

                                    <div className="my-6">
                                        <div className="flex justify-between items-center gap-4 text-gray-600">
                                            <span>Total Items</span>
                                            <span className="flex-1 border-b border-dashed" />
                                            <span>{totalQuantity}</span>
                                        </div>

                                        <div className="flex justify-between items-center gap-4 text-gray-600">
                                            <span>Total Amount.</span>
                                            <span className="flex-1 border-b border-dashed" />
                                            <span>₹{totalPrice.toFixed(2)}</span>
                                        </div>

                                        <div className="flex justify-between items-center gap-4 text-gray-600">
                                            <span>Delivery Charges.</span>
                                            <span className="flex-1 border-b border-dashed" />
                                            <span>₹{(0).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="flex justify-between items-center mt-4">
                                        <h4 className="md:text-lg font-medium tracking-wide uppercase">Total</h4>
                                        <span className="md:text-lg font-medium">₹ {totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-2">
                                    <button className="w-full py-2 px-4 border-2 border-black bg-white text-black rounded hover:bg-black hover:text-white transition duration-200">
                                        Continue Shopping
                                    </button>
                                    <button className="w-full py-2 px-4 border-2 border-black bg-black text-white rounded hover:bg-opacity-80 transition duration-200">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;

CartPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
