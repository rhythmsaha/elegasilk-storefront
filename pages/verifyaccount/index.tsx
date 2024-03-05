import React from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import API_URLs from "@/lib/API_URLs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import { PiWarningCircle } from "react-icons/pi";
import axios from "@/utils/axios";

interface Props {
    status: boolean;
}

const VerifyAccountPage: NextPageWithLayout<Props> = ({ status }) => {
    return (
        <section className="max-w-screen-sm w-11/12 mx-auto">
            <div className="mt-10 flex flex-col items-center">
                {status ? <RiVerifiedBadgeFill className="text-green-500 h-28 w-28 rounded-full mx-auto" /> : <PiWarningCircle className="text-red-500 h-28 w-28 rounded-full mx-auto" />}

                <div className="mt-5">
                    <h2 className="text-3xl text-center lg:text-4xl">{status ? "Account Verified Successfully" : "Invalid or Expired Token"}</h2>

                    <p className="text-center pt-4 text-gray-600 lg:text-xl">
                        {status
                            ? "Congratulations! Your account has been successfully verified. You can now enjoy full access to our services"
                            : "The token you provided is either invalid or expired. Please try again or request a new verification email."}
                    </p>
                </div>

                {status ? (
                    <Link href="/login" className="font-medium bg-black text-white px-4 py-2 mt-4 rounded">
                        Login Now
                    </Link>
                ) : (
                    <Link href="/" className="font-medium bg-black text-white px-4 py-2 mt-4 rounded">
                        Go Home
                    </Link>
                )}
            </div>
        </section>
    );
};

VerifyAccountPage.getLayout = (page) => {
    return (
        <NoNavLayout>
            <Head>
                <title>Elegasilk | Verify Account!</title>
            </Head>

            <main className="my-[10vh] lg:my-[15vh]">{page}</main>
        </NoNavLayout>
    );
};

export default VerifyAccountPage;

// SSR

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const token = ctx.query.token;
    const userId = ctx.query.customerId;
    const tokenId = ctx.query.tokenID;

    try {
        const response = await axios.get(API_URLs.verifyaccount + `?token=${token}&userId=${userId}&tokenId=${tokenId}`);

        if (response.status !== 200) throw new Error("Failed to verify account");

        return {
            props: {
                status: true,
            },
        };
    } catch (error) {
        return {
            props: {
                status: false,
            },
        };
    }
};
