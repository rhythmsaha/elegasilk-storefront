import { clearSessionFromLocalStorage, getSessionFromLocalStorage, saveSessionToLocalStorage } from "@/utils/AuthToken";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

let currentSession: string | undefined | null = undefined;

if (typeof window !== "undefined") {
    currentSession = getSessionFromLocalStorage();
}

type IAuthStatus = "AUTHENTICATED" | "UNAUTHENTICATED" | "LOADING";

interface ISessionPayload {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

interface IUserState {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

interface IAuthStore {
    user: IUserState | null;
    acessToken: string | null;
    authStatus: IAuthStatus;

    // methods
    startAuthLoading: () => void;
    stopAuthLoading: () => void;
    login: (user: ISessionPayload, token: string) => void;
    logout: () => void;
    updateAccount: (user: ISessionPayload) => void;
}

export const useAuthStore = create<IAuthStore>()(
    devtools(
        (set) => ({
            user: null,
            acessToken: null,
            authStatus: currentSession ? "LOADING" : "UNAUTHENTICATED",

            startAuthLoading: () => {
                set({ authStatus: "LOADING" }, false, "authstore/startAuthLoading");
            },

            stopAuthLoading: () => {
                set({ authStatus: "UNAUTHENTICATED" }, false, "authstore/stopAuthLoading");
            },

            login: (user, token) => {
                const { _id, firstName, lastName, email, phone } = user;
                const userObject = { _id, firstName, lastName, email, phone };
                saveSessionToLocalStorage(token);
                set({ user: userObject, acessToken: token, authStatus: "AUTHENTICATED" }, false, "authstore/login");
            },

            logout: () => {
                set({ user: null, acessToken: null, authStatus: "UNAUTHENTICATED" }, false, "authstore/logout");
                clearSessionFromLocalStorage();
            },

            updateAccount: (user) => {
                // implementation
            },
        }),
        { name: "AuthStore" }
    )
);
