import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";

const WishlistPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-11/12">
            <section>
                <div>
                    <h1 className="text-xl">Wishlist</h1>
                </div>
            </section>
        </div>
    );
};

export default WishlistPage;

WishlistPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
