import React, { useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useRouter } from "next/router";
import axios from "@/utils/axios";

interface Props {}

const CancelledPaymentPage: NextPageWithLayout = (props) => {
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const response = await axios.get("/orders/check-session", {
                params: {
                    sessionId: router.query.session_id,
                },
            });

            console.log(response);
        };

        if (router.query.session_id) {
            checkSession();
        }

        checkSession();

        return () => {};
    }, [router.query.session_id]);
    return <div>Cancelled</div>;
};

export default CancelledPaymentPage;

CancelledPaymentPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
