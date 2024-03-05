import AuthProvider from "@/providers/AuthProvider";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <>
            <Head>
                <title>Elegasilk</title>
            </Head>

            <AuthProvider>
                {getLayout(<Component {...pageProps} />)}
                <Toaster position="top-center" reverseOrder={false} />
            </AuthProvider>
        </>
    );
}
