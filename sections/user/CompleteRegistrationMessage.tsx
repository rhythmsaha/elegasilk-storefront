import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CompleteRegistrationMessage: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onResend = async () => {
        if (isLoading) return;
        // Resend the verification link
        const userData = window.sessionStorage.getItem("resend_Token");
        const data = userData ? JSON.parse(userData) : null;

        try {
            setIsLoading(true);
            const response = await axios.post(API_URLs.resendverification, data);
            if (response.status !== 201) throw new Error("Failed to resend verification link");
            toast.success("Verification link has been resent to your email");
        } catch (error: any) {
            toast.error(error.message || "Something Went Wrong! Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-10 flex flex-col items-center">
            <div>
                <RiVerifiedBadgeFill className="h-28 w-28 text-green-400" />
            </div>

            <div className="mt-5">
                <h2 className="text-3xl text-center lg:text-4xl">Check your email for verification</h2>
                <p className="text-center pt-4 text-gray-600 lg:text-xl">We&apos;ve sent a verification link to your email. Please check your inbox and click the link to verify your account</p>
            </div>

            <button className="font-medium bg-black text-white px-4 py-2 mt-4 rounded" onClick={onResend} disabled={isLoading}>
                Resend Link
            </button>
        </div>
    );
};

export default CompleteRegistrationMessage;
