import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import AuthLayout from "@/components/layouts/AuthLayout";

const CartPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-11/12">
            <section>
                <div>
                    <h1 className="text-xl">Cart</h1>
                </div>
            </section>
        </div>
    );
};

export default CartPage;

CartPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
