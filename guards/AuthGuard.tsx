import LoadingScreen from "@/screens/LoadingScreen";
import { useAuthStore } from "@/store/auth/useAuthStore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
    children: React.ReactNode;
}

const AuthGuard: React.FC<Props> = ({ children }) => {
    const authState = useAuthStore((state) => state.authStatus);
    const router = useRouter();

    useEffect(() => {
        if (authState === "UNAUTHENTICATED") {
            router.push("/login");
        }
    }, [authState, router]);

    if (authState === "UNAUTHENTICATED") {
        return <LoadingScreen />;
    }

    if (authState === "LOADING") {
        return <LoadingScreen />;
    }

    if (authState === "AUTHENTICATED") {
        return <>{children}</>;
    }

    return <LoadingScreen />;
};

export default AuthGuard;
