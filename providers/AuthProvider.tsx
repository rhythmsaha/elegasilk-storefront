import API_URLs from "@/lib/API_URLs";
import { useAuthStore } from "@/store/auth/useAuthStore";
import { getSessionFromLocalStorage } from "@/utils/AuthToken";
import axios from "@/utils/axios";
import React, { useEffect } from "react";

interface Props {
    children: React.ReactNode;
}

let currentSession: string | undefined | null = undefined;

if (typeof window !== "undefined") {
    currentSession = getSessionFromLocalStorage();
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const { login, logout } = useAuthStore((state) => state);

    useEffect(() => {
        if (!currentSession) return;

        const fn = async () => {
            try {
                const response = await axios.get(API_URLs.refreshSession);
                if (!response.data.success) return logout();
                const { user: userData, accessToken } = response.data;

                login(userData, accessToken);
            } catch (error: any) {
                logout();
            }
        };

        fn();
    }, [login, logout]);

    return <>{children}</>;
};

export default AuthProvider;
