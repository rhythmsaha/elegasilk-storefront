import React from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import Input from "@/components/addressbook/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/auth/useAuthStore";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";

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

            <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-4">
                <div className="grid gap-2 md:grid-cols-2">
                    <Input
                        label="First Name"
                        id="first-name"
                        placeholder="John"
                        isError={!!errors.firstName}
                        errorMessage={errors.firstName?.message}
                        {...register("firstName", {
                            required: "First Name is required",
                        })}
                    />
                    <Input
                        label="Last Name"
                        id="Last-name"
                        placeholder="Doe"
                        isError={!!errors.lastName}
                        errorMessage={errors.lastName?.message}
                        {...register("lastName", {
                            required: "Last Name is required",
                        })}
                    />
                </div>

                <Input
                    type="number"
                    label="Mobile Number"
                    id="mobile-number"
                    placeholder="10 Digit Mobile Number"
                    isError={!!errors.mobile}
                    errorMessage={errors.mobile?.message}
                    {...register("mobile", {
                        required: "Phone is required",
                        validate: (value) => {
                            if (value.length !== 10) return "Phone number must be 10 digits long";
                            return true;
                        },
                    })}
                />

                <Input
                    label="Alternate Mobile Number (Optional)"
                    id="alternate-mobile-number"
                    placeholder="10 Digit Mobile Number"
                    isError={!!errors.alternativeMobile}
                    errorMessage={errors.alternativeMobile?.message}
                    {...register("alternativeMobile", {
                        validate: (value) => {
                            if (!value) return true;
                            if (value.length !== 10) return "Phone number must be 10 digits long";
                            return true;
                        },
                    })}
                />

                <Input
                    label="Flat, House No., Building, Company, Apartment"
                    id="address"
                    placeholder=""
                    autoComplete="address-line1"
                    isError={!!errors.houseNo}
                    errorMessage={errors.houseNo?.message}
                    {...register("houseNo", {
                        required: "Building No. is required",
                    })}
                />

                <Input
                    label="Area, Street, Sector, Village"
                    id="area"
                    placeholder=""
                    autoComplete="street-address"
                    isError={!!errors.street}
                    errorMessage={errors.street?.message}
                    {...register("street", {
                        required: "Street is required",
                    })}
                />

                <Input
                    label="Landmark"
                    id="Landmark"
                    placeholder="E.g. Near Apollo Hospital"
                    autoComplete="landmark"
                    isError={!!errors.landmark}
                    errorMessage={errors.landmark?.message}
                    {...register("landmark")}
                />

                <div className="grid gap-2 md:grid-cols-2">
                    <Input
                        label="Town/City"
                        id="city"
                        placeholder=""
                        isError={!!errors.city}
                        errorMessage={errors.city?.message}
                        {...register("city", {
                            required: "City is required",
                        })}
                    />

                    <Input
                        label="State"
                        id="state"
                        placeholder=""
                        isError={!!errors.state}
                        errorMessage={errors.state?.message}
                        {...register("state", {
                            required: "State is required",
                            validate: (value) => {
                                if (value.length < 2) return "State must be 2 characters long";
                                return true;
                            },
                        })}
                    />
                </div>

                <Input
                    type="number"
                    label="Pincode"
                    id="pincode"
                    placeholder="6 Digits [0-9] Pincode"
                    isError={!!errors.pincode}
                    errorMessage={errors.pincode?.message}
                    {...register("pincode", {
                        required: "Pincode is required",
                        validate: (value) => {
                            if (value.length !== 6) return "Pincode must be 6 digits long";
                            return true;
                        },
                    })}
                />

                <button
                    type="submit"
                    className="w-full py-2 hover:bg-gray-800 bg-black text-white rounded transition duration-100"
                >
                    Save Address
                </button>
            </form>
        </div>
    );
};

NewAddressPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default NewAddressPage;
export type { IFormInput as IAddressFormInput };
