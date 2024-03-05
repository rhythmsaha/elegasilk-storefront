import React, { useState } from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Link from "next/link";
import Head from "next/head";
import { useForm } from "react-hook-form";
import BrandLogo from "@/components/authentication/BrandLogo";
import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import AuthPasswordInput from "@/components/authentication/inputs/AuthPasswordInput";
import SubmitButton from "@/components/authentication/SubmitButton";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import { useAuthStore } from "@/store/auth/useAuthStore";

interface IFormInput {
    email: string;
    password: string;
}

const LoginPage: NextPageWithLayout = () => {
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);
    const router = useRouter();

    const referUrl = router.query.referUrl as string;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({});

    const onSubmit = async (data: IFormInput) => {
        if (isSubmitting) return;
        if (loading) return;
        toast.dismiss();
        setLoading(true);

        try {
            const response = await axios.post(API_URLs.login, data);
            const { data: responseData } = response;

            if (!responseData.success) return toast.error(responseData.message);

            login(responseData.user, responseData.accessToken);

            if (referUrl) {
                router.replace(referUrl);
            } else {
                router.replace("/");
            }

            toast.success("Logged in successfully!");
        } catch (error: any) {
            if (error.response) {
                const { data } = error.response;
                toast.error(data.message);
            } else if (error.request) {
                toast.error("Network error. Please try again later.");
            } else if (error.message) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong!");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-screen-sm w-11/12 mx-auto">
            <BrandLogo text="Log In to your account" />

            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <AuthFormInput
                            label="Email Address"
                            type="email"
                            id="login_email"
                            value="rs.2001.saha@gmail.com"
                            isError={!!errors.email}
                            errorMessage={errors.email?.message}
                            placeholder="E.g. address@example.com"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        <AuthPasswordInput
                            label="Password"
                            id="login_password"
                            defaultValue={"0123456789"}
                            placeholder="************"
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
                    </div>

                    <div className="mt-2">
                        <SubmitButton text="Log In" type="submit" />
                    </div>

                    <div className="mt-3 flex justify-center gap-2 text-gray-500">
                        Forgot Password?{" "}
                        <Link href="/login" className="font-medium underline text-black">
                            Reset Now
                        </Link>
                    </div>
                </form>
            </div>

            <div className="mt-3 text-center">
                <Link href="/register" className="font-medium underline text-black">
                    Create new account
                </Link>
            </div>
        </section>
    );
};

LoginPage.getLayout = (page) => {
    return (
        <NoNavLayout>
            <Head>
                <title>Elegasilk | Log in to your account!</title>
            </Head>

            <main className="my-[10vh] lg:my-[15vh]">{page}</main>
        </NoNavLayout>
    );
};

export default LoginPage;
