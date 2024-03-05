import Link from "next/link";
import React from "react";
import { AiOutlineVerified } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";

interface Props {}

const VerificationSection = (props: Props) => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <RiVerifiedBadgeFill className="text-green-500 h-28 w-28 rounded-full mx-auto" />

            <div className="mt-5">
                <h2 className="text-3xl text-center lg:text-4xl">Account Verified Successfully</h2>
                <p className="text-center pt-4 text-gray-600 lg:text-xl">Congratulations! Your account has been successfully verified. You can now enjoy full access to our services</p>
            </div>

            <Link href="/login" className="font-medium bg-black text-white px-4 py-2 mt-4 rounded">
                Login Now
            </Link>
        </div>
    );
};

export default VerificationSection;
