import React, { FC, ForwardedRef, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import AuthInputErrorMessage from "./AuthInputErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isError?: boolean;
    errorMessage?: string;
    ref?: any;
}

const AuthFormInput: FC<Props> = forwardRef<HTMLInputElement, Props>(function AuthFormInput(
    { id, label, isError, errorMessage, ...props },
    ref
) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={id} className={`font-medium ${!isError ? "text-gray-700" : "text-red-500"}`}>
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={ref}
                className={`w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none rounded border ${
                    isError
                        ? "border-red-300 focus:border-red-500 placeholder:text-red-300 text-red-500"
                        : " border-gray-300 focus:border-gray-800"
                }`}
                {...props}
            />

            {isError && errorMessage && <AuthInputErrorMessage message={errorMessage} />}
        </div>
    );
});

export default AuthFormInput;
