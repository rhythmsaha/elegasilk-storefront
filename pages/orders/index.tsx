import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import OrderHistorySection from "@/sections/orders/OrderHistorySection";
import HomeBrandStory from "@/sections/home/HomeBrandStory";

const OrdersPage: NextPageWithLayout = () => {
    return (
        <>
            <div className="max-w-screen-lg mx-auto w-11/12">
                <section>
                    <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 my-4 lg:my-10">
                        Order History
                    </h1>
                </section>

                <OrderHistorySection />
            </div>

            <HomeBrandStory />
        </>
    );
};

export default OrdersPage;

OrdersPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
