import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CompleteRegistrationMessage = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <RiVerifiedBadgeFill className="text-black h-28 w-28 rounded-full mx-auto" />
            <div className="mt-5">
                <h2 className="text-3xl text-center lg:text-4xl">Check your email for verification</h2>
                <p className="text-center pt-4 text-gray-600 lg:text-xl">We&apos;ve sent a verification link to your email. Please check your inbox and click the link to verify your account</p>
            </div>

            <button className="font-medium bg-black text-white px-4 py-2 mt-4 rounded">Resend Link</button>
        </div>
    );
};

export default CompleteRegistrationMessage;
