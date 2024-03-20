import React from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/auth/useAuthStore";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import AddressForm from "@/sections/addresses/AddressForm";

interface IFormInput {
    firstName: string;
    lastName: string;
    mobile: string;
    alternativeMobile?: string;

    houseNo: string;
    street: string;

    landmark?: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
}

const NewAddressPage: NextPageWithLayout = () => {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const onSubmit = async (payload: IFormInput) => {
        if (isSubmitting) return;
        toast.dismiss();

        try {
            const response = await axios.post(API_URLs.address.create, payload);
            if (response.status !== 201) throw new Error("Failed to Create Address");
            toast.success("Address Created Successfully!");
            router.push("/addresses");
        } catch (error: any) {
            toast.error("Failed to create address!");
        }
    };

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
        },
    });

    return (
        <div className="max-w-screen-md mx-auto w-11/12 mt-4 lg:mt-8">
            <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                Add New Address
                <Link className=" text-sm ml-4 text-gray-700 underline hover:text-black font-medium" href="/addresses">
                    Go Back
                </Link>
            </h1>

            <div className="my-8">
                <AddressForm errors={errors} onSubmit={handleSubmit(onSubmit)} register={register} />
            </div>
        </div>
    );
};

NewAddressPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default NewAddressPage;
export type { IFormInput as IAddressFormInput };
