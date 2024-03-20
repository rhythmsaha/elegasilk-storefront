import React from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import AddressListSection from "@/sections/addresses/AddressListSection";

const AddressBookPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto w-11/12 mt-10 mb-20">
            <div>
                <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 my-4 lg:my-10">
                    Address Book
                </h1>
            </div>

            <AddressListSection />
        </div>
    );
};

export default AddressBookPage;

AddressBookPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
