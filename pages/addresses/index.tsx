import React from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import AddAddressCard from "@/components/addressbook/AddAddressCard";
import AddressCard from "@/components/addressbook/AddressCard";

interface Props {}

const AddressBookPage: NextPageWithLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto w-11/12 mt-10 mb-20">
            <div>
                <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 my-4 lg:my-10">
                    Address Book
                </h1>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <AddAddressCard />

                <AddressCard _default />
                <AddressCard />
                <AddressCard />
                <AddressCard />
                <AddressCard />
            </div>
        </div>
    );
};

export default AddressBookPage;

AddressBookPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
