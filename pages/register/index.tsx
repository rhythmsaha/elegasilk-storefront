import React from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import AuthPasswordInput from "@/components/authentication/inputs/AuthPasswordInput";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "@/components/authentication/SubmitButton";
import BrandLogo from "@/components/authentication/BrandLogo";

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const RegistrationPage: NextPageWithLayout = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({});

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <section className="max-w-screen-sm w-11/12 mx-auto">
            <BrandLogo text="Create new account" />

            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <div className="grid lg:grid-cols-2 gap-4">
                            <AuthFormInput
                                label="First Name"
                                type="text"
                                id="reg_firstName"
                                placeholder="E.g. John"
                                isError={!!errors.firstName}
                                errorMessage={errors.firstName?.message}
                                {...register("firstName", {
                                    required: "First Name is required",
                                })}
                            />
                            <AuthFormInput
                                label="Last Name"
                                type="text"
                                id="red_lastName"
                                placeholder="E.g. Doe"
                                isError={!!errors.lastName}
                                errorMessage={errors.lastName?.message}
                                {...register("lastName", {
                                    required: "Last Name is required",
                                })}
                            />
                        </div>

                        <AuthFormInput
                            label="Email Address"
                            type="email"
                            id="reg_email"
                            value="rs.2001.saha@gmail.com"
                            isError={!!errors.email}
                            errorMessage={errors.email?.message}
                            placeholder="E.g. address@example.com"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        <AuthFormInput
                            label="Phone Number"
                            placeholder="E.g. 9876543210"
                            type="number"
                            isError={!!errors.phone}
                            errorMessage={errors.phone?.message}
                            id="reg_phone"
                            {...register("phone", {
                                minLength: {
                                    value: 10,
                                    message: "Phone Number must be at least 10 digits long",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Phone Number must be at most 10 digits long",
                                },
                            })}
                        />

                        <AuthPasswordInput
                            label="Password"
                            id="reg_password"
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

                        <AuthPasswordInput
                            label="Confirm Password"
                            defaultValue={"0123456789"}
                            id="reg_confirm_password"
                            isError={!!errors.confirmPassword}
                            errorMessage={errors.confirmPassword?.message}
                            placeholder="************"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) => value === getValues("password") || "The passwords do not match",
                            })}
                        />
                    </div>

                    <div className="mt-4">
                        <SubmitButton text="Register" type="submit" />
                    </div>

                    <div className="mt-3 flex justify-center gap-2 text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium underline text-black">
                            Login Here
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

RegistrationPage.getLayout = (page) => {
    return (
        <NoNavLayout>
            <Head>
                <title>Elegasilk | Register with us!</title>
            </Head>

            <main className="my-[10vh] lg:my-[15vh]">{page}</main>
        </NoNavLayout>
    );
};

export default RegistrationPage;
