import AuthFormInput from "@/components/authentication/inputs/AuthFormInput";
import React from "react";

interface Props {}

const ProfileInfoSection: React.FC<Props> = (props) => {
    return (
        <div className="space-y-4">
            <AuthFormInput
                label="First Name"
                type="text"
                id="firstName"
                defaultValue="Rhythm"
                // isError={!!errors.email}
                // errorMessage={errors.email?.message}
                // {...register("email", {
                //     required: "Email is required",
                // })}
            />

            <AuthFormInput
                label="Last Name"
                type="text"
                id="lastName"
                defaultValue="Saha"
                // isError={!!errors.email}
                // errorMessage={errors.email?.message}
                // {...register("email", {
                //     required: "Email is required",
                // })}
            />

            <div>
                <AuthFormInput
                    label="Email Address"
                    type="email"
                    id="firstName"
                    defaultValue="rs.2001.saha@gmail.com"
                    // isError={!!errors.email}
                    // errorMessage={errors.email?.message}
                    // {...register("email", {
                    //     required: "Email is required",
                    // })}
                />

                <button className="block ml-auto text-red-500 mt-2 hover:underline">Change Email</button>
            </div>

            <div>
                <button
                    className="py-2.5 px-4 hover:bg-opacity-80 bg-black text-white mt-4 rounded-md w-full"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default ProfileInfoSection;
