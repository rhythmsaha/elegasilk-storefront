import React, { useState } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import ChangeEmail from "@/components/myaccount/ChangeEmail";
import AuthPasswordInput from "@/components/authentication/inputs/AuthPasswordInput";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import { useAuthStore } from "@/store/auth/useAuthStore";

interface IFormInput {
    firstName?: string;
    lastName?: string;
    password?: string;
    newPassword?: string;
    confirmPassword?: string;
}

const MyAccountPage: NextPageWithLayout = () => {
    const userId = useAuthStore((state) => state.user?._id);
    const updateUser = useAuthStore((state) => state.updateUser);

    const [changePassword, setChangePassword] = useState(false);

    const toggleChangePasswordHandler = () => {
        setChangePassword((val) => !val);
    };

    const {
        register,
        handleSubmit,
        getValues,
        resetField,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>({});

    const onSubmit = async (data: IFormInput) => {
        if (isSubmitting) return;
        toast.dismiss();

        // Call API to update user profile
        try {
            // delete password and confirmpassword if not exist
            if (!changePassword) {
                delete data.password;
                delete data.newPassword;
                delete data.confirmPassword;
            }

            // Call API to update user profile
            const response = await axios.put(API_URLs.user.updateProfile(userId!), data);

            if (response.status !== 200) throw new Error("Failed to Update Account");

            if (!response.data.success) throw new Error("Failed to Update Account");

            // Update user in store
            const user = response.data.user;

            updateUser(user);
            resetField("password");
            resetField("newPassword");
            resetField("confirmPassword");

            toast.success("Account Updated Successfully");
        } catch (error: any) {
            toast.error(error.message || "Something Went Wrong! Please try again later.");
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto w-11/12">
            <section className="mt-8 lg:mt-20">
                <div>
                    <h1 className="text-xl lg:text-2xl lg:font-semibold ">My Account</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <div className="space-y-4">
                        <AuthFormInput
                            id="firstName"
                            label="First Name"
                            type="text"
                            defaultValue="Rhythm"
                            isError={!!errors.firstName}
                            errorMessage={errors.firstName?.message}
                            {...register("firstName", {
                                required: "First Name is required",
                            })}
                        />

                        <AuthFormInput
                            id="lastName"
                            label="Last Name"
                            type="text"
                            defaultValue="Saha"
                            isError={!!errors.lastName}
                            errorMessage={errors.lastName?.message}
                            {...register("lastName", {
                                required: "Last Name is required",
                            })}
                        />

                        <ChangeEmail />

                        <div>
                            <div className="space-y-4">
                                {!changePassword && (
                                    <AuthPasswordInput
                                        id="readonlyPassword"
                                        label="Password"
                                        placeholder="Password"
                                        readOnly
                                        disabled
                                    />
                                )}

                                {changePassword && (
                                    <AuthPasswordInput
                                        id="password"
                                        label="Password"
                                        placeholder="Password"
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
                                )}

                                {changePassword && (
                                    <AuthPasswordInput
                                        id="newpwd"
                                        label="New Password"
                                        placeholder="New Password"
                                        isError={!!errors.newPassword}
                                        errorMessage={errors.newPassword?.message}
                                        {...register("newPassword", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters long",
                                            },
                                        })}
                                    />
                                )}

                                {changePassword && (
                                    <AuthPasswordInput
                                        id="confpwd"
                                        label="Confirm Password"
                                        placeholder="Confirm Password"
                                        isError={!!errors.confirmPassword}
                                        errorMessage={errors.confirmPassword?.message}
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            validate: (value) =>
                                                value === getValues("newPassword") || "The passwords do not match",
                                        })}
                                    />
                                )}
                            </div>

                            <button
                                type="button"
                                className="block ml-auto text-red-500 mt-2 hover:underline"
                                onClick={toggleChangePasswordHandler}
                            >
                                {changePassword ? "Cancel" : "Change Password"}
                            </button>
                        </div>

                        <div className="">
                            <button
                                className="py-2.5 px-4 hover:bg-opacity-80 bg-black border-2 border-black text-white mt-4 rounded-md w-full"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default MyAccountPage;

MyAccountPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
