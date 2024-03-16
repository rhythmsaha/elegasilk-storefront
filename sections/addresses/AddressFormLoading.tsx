import Link from "next/link";
import React, { FC } from "react";

const AddressFormLoading: FC = () => {
    return (
        <div className="max-w-screen-md mx-auto w-11/12 mt-4 lg:mt-8">
            <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                Edit Address
                <Link className=" text-sm ml-4 text-gray-700 underline hover:text-black font-medium" href="/addresses">
                    Go Back
                </Link>
            </h1>

            <div className="mt-8 space-y-4">
                <div className="grid gap-2 md:grid-cols-2">
                    <div className="w-full h-12 bg-gray-100 animate-pulse" />
                    <div className="w-full h-12 bg-gray-100 animate-pulse" />
                </div>
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
                <div className="grid gap-2 md:grid-cols-2">
                    <div className="w-full h-12 bg-gray-100 animate-pulse" />
                    <div className="w-full h-12 bg-gray-100 animate-pulse" />
                </div>
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
                <div className="w-full h-12 bg-gray-100 animate-pulse" />
            </div>
        </div>
    );
};

export default AddressFormLoading;
