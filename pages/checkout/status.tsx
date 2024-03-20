import React, { useCallback, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useRouter } from "next/router";
import axios from "@/utils/axios";
import { FadeLoader } from "react-spinners";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { MdError } from "react-icons/md";
import Link from "next/link";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

interface Props {}

const SuccessPage: NextPageWithLayout = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [orderDetails, setOrderDetails] = useState<any>(null);
    const [isError, setIsError] = useState(false);

    const router = useRouter();

    const checkSession = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/orders/check-session", {
                params: {
                    sessionId: router.query.session_id,
                },
            });
            if (!response.data.status) {
                setOrderDetails(response.data.order);
                throw new Error("Soemthing went wrong");
            }

            setOrderDetails(response.data.order);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, [router.query.session_id]);

    useEffect(() => {
        checkSession();
    }, [checkSession, router.isReady]);

    if (isLoading) {
        return (
            <div className="w-11/12 max-w-screen-lg mx-auto min-h-96 flex flex-col items-center justify-center">
                <FadeLoader color="#000" loading={true} height={15} />

                <p className="text-center text-xl mt-6 font-medium sm:text-2xl">
                    Processing your request... <br />
                    Please do not Close or Refresh this page.
                </p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-11/12 max-w-screen-lg mx-auto min-h-96 flex flex-col items-center justify-center">
                <MdError className="text-red-500 text-8xl mx-auto" />
                <p className="text-center text-xl mt-6 font-medium sm:text-2xl">
                    We&apos;re sorry, but we were unable to process your order. Please try again later.
                </p>
                <p className="text-center break-words text-sm max-w-full">
                    Transaction ID: <span className="">{orderDetails?.sessionId}</span>
                </p>
                <p className="text-center">
                    Order ID: <span className="font-semibold">{orderDetails?.orderId}</span>
                </p>

                <div className="mt-4 flex items-center justify-center">
                    <Link href="/" className="bg-black text-white px-4 py-2 rounded-lg">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (!isError) {
        return (
            <div className="max-w-screen-xl mx-auto w-11/12 mt-[5vh] lg:mt-[10vh]">
                <Fireworks autorun={{ speed: 3, duration: 1000 }} />

                <PiCheckCircleDuotone className="text-green-500 text-8xl mx-auto" />
                <h1 className="text-3xl font-semibold text-center">Order Placed Successfully</h1>
                <p className="text-center mt-4">
                    Your order has been placed successfully. You will receive an email with the order details.
                </p>
                <p className="text-center">
                    Your Order ID is: <span className="font-semibold">{orderDetails?.orderId}</span>
                </p>

                <div className="mt-4 flex items-center justify-center">
                    <Link href="/orders" className="bg-black text-white px-4 py-2 rounded-lg">
                        View Orders
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 max-w-screen-lg mx-auto min-h-96 flex flex-col items-center justify-center">
            <FadeLoader color="#000" loading={true} height={15} />

            <p className="text-center text-xl mt-6 font-medium sm:text-2xl">
                Processing your request... <br />
                Please do not Close or Refresh this page.
            </p>
        </div>
    );
};

export default SuccessPage;

SuccessPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
