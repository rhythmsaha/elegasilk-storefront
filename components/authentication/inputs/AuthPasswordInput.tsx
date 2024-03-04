import React, { FC, forwardRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import AuthInputErrorMessage from "./AuthInputErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isError?: boolean;
    errorMessage?: string;
}

const AuthPasswordInput: FC<Props> = forwardRef<HTMLInputElement, Props>(function AuthPasswordInput({ id, label, isError, errorMessage, ...props }, ref) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className={`font-medium ${!isError ? "text-gray-700" : "text-red-500"}`}>
                {label}
            </label>

            <div className="relative">
                <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 p-2 text-lg" onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>

                <input
                    id={id}
                    type={showPassword ? "text" : "password"}
                    className={`w-full px-2 py-1 md:py-1.5 md:px-2.5 outline-none rounded border ${isError ? "border-red-300 focus:border-red-500 placeholder:text-red-300 text-red-500" : " border-gray-300 focus:border-gray-800"}`}
                    {...props}
                    ref={ref}
                />
            </div>

            {isError && errorMessage && <AuthInputErrorMessage message={errorMessage} />}
        </div>
    );
});

export default AuthPasswordInput;
