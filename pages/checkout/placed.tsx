import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

const OrderPlacedPage: NextPageWithLayout = () => {
    const router = useRouter();

    const orderId = router.query.orderId;

    return (
        <div className="max-w-screen-xl mx-auto w-11/12 flex py-[10vh]  items-center justify-center flex-col h-page-main">
            <Fireworks autorun={{ speed: 3, duration: 1000 }} />
            <PiCheckCircleDuotone className="text-green-500 text-8xl mx-auto" />
            <h1 className="text-3xl font-semibold text-center">Order Placed Successfully</h1>
            <p className="text-center mt-4">
                Your order has been placed successfully. You will receive an email with the order details.
            </p>
            {orderId && (
                <p className="text-center">
                    Your Order ID is: <span className="font-semibold">{orderId}</span>
                </p>
            )}
            <div className="mt-4 flex items-center justify-center">
                <Link href="/orders" className="bg-black text-white px-4 py-2 rounded-lg">
                    View Orders
                </Link>
            </div>
        </div>
    );
};

export default OrderPlacedPage;

OrderPlacedPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
