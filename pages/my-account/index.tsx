import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";

const MyAccountPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto w-11/12">
            <section>
                <div>
                    <h1 className="text-xl">My Account</h1>
                </div>
            </section>
        </div>
    );
};

export default MyAccountPage;

MyAccountPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
