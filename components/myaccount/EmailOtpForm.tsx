import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import ModalCancelButton from "./ModalCancelButton";
import ModalSubmitButton from "./ModalSubmitButton";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import { IUserState, useAuthStore } from "@/store/auth/useAuthStore";
import toast from "react-hot-toast";

interface Props {
    openOTPForm: () => void;
    openEmailForm: () => void;
    oncancel: () => void;
    codeId: string;
    email: string;
    onReset: () => void;
    onUpdate: (user: IUserState) => void;
}

const EmailOtpForm: React.FC<Props> = ({ oncancel, openEmailForm, codeId, email, onReset, onUpdate }) => {
    const id = useAuthStore((state) => state.user?._id);
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async () => {
        if (error) return;
        if (isLoading) return;

        if (!codeId || !email) {
            setError("Something went wrong! Please try again later.");
            return;
        }

        if (!otp || otp.length < 4 || otp.length > 4) {
            setError("Invalid OTP");
            return;
        }

        const payload = {
            otp: otp,
            email: email,
            verificationId: codeId,
        };

        try {
            setIsLoading(true);
            const response = await axios.put(API_URLs.user.verifyEmail(id!), payload);
            const data = response.data;
            if (data.success === false) {
                throw new Error("Something went wrong! Please try again later.");
            }

            toast.success("Email Verified Successfully");
            onUpdate(data.user);
            oncancel();
            onReset();
        } catch (error: any) {
            setError(
                error?.response?.data?.message || error.message || "Something went wrong! Please try again later."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const onChange = (val: string) => {
        if (error) setError("");
        setOtp(val);
    };

    return (
        <div>
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Verify Email Address
            </Dialog.Title>

            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    Please enter your new email address. We will send you a verification code to this email address. did
                    not receive code?
                    <button type="button" className="mx-1 hover:text-black cursor-pointer  font-medium underline">
                        Resend Now
                    </button>
                    Or change your
                    <button
                        type="button"
                        className="hover:text-black cursor-pointer  font-medium underline"
                        onClick={openEmailForm}
                    >
                        email address
                    </button>
                </p>
            </div>

            <div className="my-10 selection:text-black">
                <OTPInput
                    value={otp}
                    onChange={onChange}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    placeholder="----"
                    containerStyle="w-full grid grid-cols-4 max-w-xs gap-4 mx-auto"
                    inputStyle="max-w-none aspect-square !w-full rounded-md sm:rounded-lg border border-gray-200  outline-gray-500"
                />
                <p className="text-xs text-red-500 text-center mt-4">{error}</p>
            </div>

            <div className="mt-4 grid lg:grid-cols-2 gap-2">
                <ModalSubmitButton onSubmit={onSubmit} isLoading={isLoading} text="Verify" />
                <ModalCancelButton onClick={oncancel} />
            </div>
        </div>
    );
};

export default EmailOtpForm;
