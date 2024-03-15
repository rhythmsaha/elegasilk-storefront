import { Dialog } from "@headlessui/react";
import React, { useRef, useState } from "react";
import AuthFormInput from "../authentication/inputs/AuthFormInput";
import ModalCancelButton from "./ModalCancelButton";
import ModalSubmitButton from "./ModalSubmitButton";
import validator from "validator";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import { useAuthStore } from "@/store/auth/useAuthStore";

interface Props {
    openOTPForm: () => void;
    openEmailForm: () => void;
    oncancel: () => void;
    onEmailChange: (email: string, id: string) => void;
    email: string;
}

const EmailForm: React.FC<Props> = ({ openOTPForm, openEmailForm, oncancel, email, onEmailChange }) => {
    const id = useAuthStore((state) => state.user?._id);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);

    const onChange = () => {
        if (error) setError("");
    };

    const onSubmit = async () => {
        if (isLoading) return;

        const _email = emailRef.current?.value || "";

        if (!_email) {
            setError("Email is required");
            return;
        }

        if (!validator.isEmail(_email)) {
            setError("Invalid Email");
            return;
        }

        try {
            const response = await axios.post(API_URLs.user.updateEmail(id!), { email: _email });
            const data = response.data;

            if (data.success === false) {
                throw new Error("Something went wrong! Please try again later.");
            }

            onEmailChange(data.email || emailRef.current?.value, data.verificationId);
            openOTPForm();
        } catch (error: any) {
            setError(
                error?.response?.data?.message || error.message || "Something went wrong! Please try again later."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Change Email Address
            </Dialog.Title>

            <div className="mt-2 space-y-4">
                <p className="text-sm text-gray-500">
                    Please enter your new email address. We will send you a verification code to this email address.
                </p>

                <AuthFormInput
                    ref={emailRef}
                    type="email"
                    id="email"
                    placeholder="Enter your new email address"
                    isError={!!error}
                    defaultValue={email}
                    errorMessage={error}
                    onChange={onChange}
                />

                <div className="mt-4 grid lg:grid-cols-2  gap-2">
                    <ModalSubmitButton onSubmit={onSubmit} isLoading={isLoading} text="Send Code" />
                    <ModalCancelButton onClick={oncancel} />
                </div>
            </div>
        </div>
    );
};

export default EmailForm;
