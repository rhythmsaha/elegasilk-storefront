import React, { useState } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import SubmitButton from "@/components/authentication/SubmitButton";
import ProfileInfoSection from "@/sections/myaccount/ProfileInfoSection";
import ChangeEmail from "@/components/myaccount/ChangeEmail";
import AuthPasswordInput from "@/components/authentication/inputs/AuthPasswordInput";

const MyAccountPage: NextPageWithLayout = () => {
    const [changePassword, setChangePassword] = useState(false);

    const toggleChangePasswordHandler = () => {
        setChangePassword((val) => !val);
    };

    return (
        <div className="max-w-screen-lg mx-auto w-11/12">
            <section className="mt-8 lg:mt-20">
                <div>
                    <h1 className="text-xl lg:text-2xl lg:font-semibold ">My Account</h1>
                </div>

                <div className="mt-8">
                    <div className="space-y-4">
                        <AuthFormInput
                            id="firstName"
                            label="First Name"
                            type="text"
                            defaultValue="Rhythm"
                            // isError={!!errors.email}
                            // errorMessage={errors.email?.message}
                            // {...register("email", {
                            //     required: "Email is required",
                            // })}
                        />

                        <AuthFormInput
                            id="lastName"
                            label="Last Name"
                            type="text"
                            defaultValue="Saha"
                            // isError={!!errors.email}
                            // errorMessage={errors.email?.message}
                            // {...register("email", {
                            //     required: "Email is required",
                            // })}
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
                                    <AuthPasswordInput id="password" label="Password" placeholder="Password" />
                                )}

                                {changePassword && (
                                    <AuthPasswordInput id="newpwd" label="New Password" placeholder="New Password" />
                                )}
                                {changePassword && (
                                    <AuthPasswordInput
                                        id="confpwd"
                                        label="Confirm Password"
                                        placeholder="Confirm Password"
                                    />
                                )}
                            </div>

                            <button
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
                </div>
            </section>
        </div>
    );
};

export default MyAccountPage;

MyAccountPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
