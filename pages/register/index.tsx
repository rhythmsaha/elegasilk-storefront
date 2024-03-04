import React from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const RegistrationPage: NextPageWithLayout = (props) => {
    return (
        <section className="max-w-screen-sm w-11/12 mx-auto">
            <div className="flex flex-col items-center justify-center">
                <Image src="/logo_black.svg" alt="Elegasilk" width={200} height={58.4} className="h-10 md:h-12 lg:h-16" />
                <h2 className="mt-8 text-xl font-semibold text-gray-950">Register Your Account</h2>
            </div>

            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg border border-gray-100">
                <form>
                    <div className="space-y-2">
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-gray-700 font-medium ">
                                    First Name
                                </label>

                                <input type="text" name="" id="" className="w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none border border-gray-300 focus:border-gray-800 rounded" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-gray-700 font-medium ">
                                    Last Name
                                </label>
                                <input type="text" name="" id="" className="w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none border border-gray-300 focus:border-gray-800 rounded" />
                            </div>
                        </div>

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

                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-gray-700 font-medium">
                                Confirm Password
                            </label>
                            <input type="text" name="" id="" className="w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none border border-gray-300 focus:border-gray-800 rounded" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className="w-full py-2.5 px-4 bg-black text-white mt-4 rounded-md">Register</button>
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

            <main className="my-[10vh] lg:my-[15vh] ">{page}</main>
        </NoNavLayout>
    );
};

export default RegistrationPage;
