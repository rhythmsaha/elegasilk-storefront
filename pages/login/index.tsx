import React from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

interface Props {}

const LoginPage: NextPageWithLayout = (props: Props) => {
    return (
        <section className="max-w-screen-sm w-11/12 mx-auto">
            <div className="flex flex-col items-center justify-center">
                <Image src="/logo_black.svg" alt="Elegasilk" width={200} height={58.4} className="h-10 md:h-12 lg:h-16" />
                <h2 className="mt-8 text-xl font-semibold text-gray-950">Log In to your account</h2>
            </div>

            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-100">
                <form>
                    <div className="space-y-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-gray-700 font-medium">
                                Email Address
                            </label>
                            <input type="text" name="" id="" className="w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none border border-gray-300 focus:border-gray-800 rounded" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-gray-700 font-medium">
                                Password
                            </label>
                            <input type="text" name="" id="" className="w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none border border-gray-300 focus:border-gray-800 rounded" />
                        </div>
                    </div>

                    <div className="mt-2">
                        <button className="w-full py-2.5 px-4 hover:bg-opacity-80 bg-black text-white mt-4 rounded-md">Log In</button>
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
                <Link href="/login" className="font-medium underline text-black">
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

            <main className="my-[10vh] lg:my-[15vh] ">{page}</main>
        </NoNavLayout>
    );
};

export default LoginPage;
