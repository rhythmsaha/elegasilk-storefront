import BrandLogo from "@/components/authentication/BrandLogo";
import SubmitButton from "@/components/authentication/SubmitButton";
import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import AuthPasswordInput from "@/components/authentication/inputs/AuthPasswordInput";
import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
    onComplete: () => void;
}

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const RegisterSection: FC<Props> = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({});

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        if (isLoading) return;
        if (isSubmitting) return;
        toast.dismiss();
        setIsLoading(true);

        try {
            const reposne = await axios.post(API_URLs.register, data);
            if (reposne.status !== 201) throw new Error("Failed to Create Account");
            window.sessionStorage.setItem("resend_Token", JSON.stringify(data));
            onComplete();
        } catch (error: any) {
            toast.error(error.message || "Something Went Wrong! Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
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
                        isError={!!errors.email}
                        errorMessage={errors.email?.message}
                        autoComplete="email webauthn"
                        placeholder="E.g. address@example.com"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />

                    <AuthFormInput
                        label="Phone Number"
                        placeholder="E.g. 9876543210"
                        autoComplete="tel"
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
                        id="reg_confirm_password"
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

                <div className="mt-4">
                    <SubmitButton text={isLoading ? "Please wait..." : "Register"} type="submit" disabled={isLoading} />
                </div>

                <div className="mt-3 flex justify-center gap-2 text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="font-medium underline text-black">
                        Login Here
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterSection;
