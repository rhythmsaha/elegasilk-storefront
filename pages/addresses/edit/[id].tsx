import React from "react";
import { NextPageWithLayout } from "../../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import Input from "@/components/addressbook/Input";
import Link from "next/link";
interface Props {}

const EditAddress: React.FC<Props> = (props) => {
    return (
        <div className="max-w-screen-md mx-auto w-11/12 mt-4 lg:mt-8">
            <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                Add New Address
                <Link className=" text-sm ml-4 text-gray-700 underline hover:text-black font-medium" href="/addresses">
                    Go Back
                </Link>
            </h1>

            <section className="my-8 space-y-4">
                <div className="grid gap-2 md:grid-cols-2">
                    <Input label="First Name" id="first-name" placeholder="John" autoComplete="name" />
                    <Input label="Last Name" id="Last-name" placeholder="Doe" />
                </div>

                <Input
                    type="number"
                    max={10}
                    label="Mobile Number"
                    id="mobile-number"
                    placeholder="10 Digit Mobile Number"
                />

                <Input
                    label="Alternate Mobile Number (Optional)"
                    id="alternate-mobile-number"
                    placeholder="10 Digit Mobile Number"
                />

                <Input
                    label="Flat, House No., Building, Company, Apartment"
                    id="address"
                    placeholder=""
                    autoComplete="address-line1"
                />

                <Input label="Area, Street, Sector, Village" id="area" placeholder="" autoComplete="street-address" />

                <Input label="Landmark" id="Landmark" placeholder="E.g. Near Apollo Hospital" autoComplete="landmark" />

                <div className="grid gap-2 md:grid-cols-2">
                    <Input label="Town/City" id="city" placeholder="" />
                    <Input label="State" id="state" placeholder="" />
                </div>

                <Input type="number" label="Pincode" id="pincode" placeholder="6 Digits [0-9] Pincode" />

                <button className="w-full py-2 hover:bg-gray-800 bg-black text-white rounded transition duration-100">
                    Save Address
                </button>
            </section>
        </div>
    );
};

export default EditAddress;
