import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";

const OrdersPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-11/12">
            <section>
                <div>
                    <h1 className="text-xl">My Orders</h1>
                </div>
            </section>
        </div>
    );
};

export default OrdersPage;

OrdersPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
