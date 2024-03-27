import React from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Head from "next/head";
import BrandLogo from "@/components/authentication/BrandLogo";
import SubmitButton from "@/components/authentication/SubmitButton";
import AuthPasswordInput from "@/components/authentication/inputs/AuthPasswordInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import toast from "react-hot-toast";

interface IFormInput {
    password: string;
    confirmPassword: string;
}

const ResetPage: NextPageWithLayout = () => {
    const router = useRouter();

    const customerId = router.query.customerId as string;
    const token = router.query.token as string;
    const id = router.query.id as string;

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        if (!router.isReady) return;
        if (isSubmitting) return;

        try {
            const payload = { id, token, customerId, password: data.password };
            const response = await axios.post(API_URLs.resetPassword, payload);

            toast.success(response.data.message || "Password reset successfully!");
            if (response.status === 200) {
                router.push("/login");
            }
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
            <BrandLogo text="Reset Password" />

            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <AuthPasswordInput
                            label="Password"
                            id="password"
                            placeholder="************"
                            autoComplete="new-password webauthn"
                            isError={!!errors.password}
                            errorMessage={errors.password?.message}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            })}
                        />

                        <AuthPasswordInput
                            label="Confirm Password"
                            id="confirm_password"
                            autoComplete="new-password webauthn"
                            isError={!!errors.confirmPassword}
                            errorMessage={errors.confirmPassword?.message}
                            placeholder="************"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) => value === getValues("password") || "The passwords do not match",
                            })}
                        />
                    </div>

                    <div className="mt-2">
                        <SubmitButton text="Reset Password" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPage;

ResetPage.getLayout = (page) => {
    return (
        <NoNavLayout>
            <Head>
                <title>Elegasilk | Reset Your Password!</title>
            </Head>

            <main className="my-[10vh] lg:my-[15vh]">{page}</main>
        </NoNavLayout>
    );
};
