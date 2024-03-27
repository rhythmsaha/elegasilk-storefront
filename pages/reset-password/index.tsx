import NoNavLayout from "@/components/layouts/NoNavLayout";
import Head from "next/head";
import React from "react";
import { NextPageWithLayout } from "../_app";
import { useForm } from "react-hook-form";
import BrandLogo from "@/components/authentication/BrandLogo";
import SubmitButton from "@/components/authentication/SubmitButton";
import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";

interface IFormInput {
    email: string;
}

const ForgetPassword: NextPageWithLayout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        if (isSubmitting) return;
        toast.dismiss();

        try {
            const response = await axios.post(API_URLs.forgotPassword, data);
            const { data: responseData } = response;
            toast.success(responseData.message);
        } catch (error: any) {
            if (error.response) {
                const { data } = error.response;
                toast.error(data.message);
            } else if (error.request) {
                toast.error("Network Error");
            }
        }
    };

    return (
        <div className="max-w-screen-sm w-11/12 mx-auto">
            <BrandLogo text="Forgot Password" />

            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <AuthFormInput
                            label="Email Address"
                            type="email"
                            id="reset_email"
                            isError={!!errors.email}
                            errorMessage={errors.email?.message}
                            placeholder="E.g. address@example.com"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                    </div>

                    <div className="mt-2">
                        <SubmitButton text="Send Link" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;

ForgetPassword.getLayout = (page) => {
    return (
        <NoNavLayout>
            <Head>
                <title>Elegasilk | Forget Password!</title>
            </Head>

            <main className="my-[10vh] lg:my-[15vh]">{page}</main>
        </NoNavLayout>
    );
};
