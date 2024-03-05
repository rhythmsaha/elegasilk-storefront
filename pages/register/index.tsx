import React, { useState } from "react";
import { NextPageWithLayout } from "../_app";
import NoNavLayout from "@/components/layouts/NoNavLayout";
import Head from "next/head";
import BrandLogo from "@/components/authentication/BrandLogo";
import RegisterSection from "@/sections/user/RegisterSection";
import CompleteRegistrationMessage from "@/sections/user/CompleteRegistrationMessage";
import VerificationSection from "@/sections/user/VerificationSection";

const RegistrationPage: NextPageWithLayout = () => {
    const [completedsignUp, setCompletedsignUp] = useState(false);

    return (
        <section className="max-w-screen-sm w-11/12 mx-auto">
            <BrandLogo text={completedsignUp ? "" : "Create new account"} />
            {completedsignUp ? <CompleteRegistrationMessage /> : <RegisterSection />}
        </section>
    );
};

RegistrationPage.getLayout = (page) => {
    return (
        <NoNavLayout>
            <Head>
                <title>Elegasilk | Register with us!</title>
            </Head>

            <main className="my-[10vh] lg:my-[15vh]">{page}</main>
        </NoNavLayout>
    );
};

export default RegistrationPage;
