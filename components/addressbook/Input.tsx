import React, { FC, forwardRef } from "react";
import InputErrorMessage from "./InputErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isError?: boolean;
    errorMessage?: string;
    ref?: any;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(function Input(
    { id, label, isError, errorMessage, ...props },
    ref
) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor={id} className={`font-medium ${!isError ? "text-gray-700" : "text-red-500"}`}>
                    {label}
                </label>
            )}

            <input
                id={id}
                ref={ref}
                className={`w-full px-3 py-2 md:py-3 md:px-4 outline-none rounded border ${
                    isError
                        ? "border-red-300 focus:border-red-500 placeholder:text-red-300 text-red-500"
                        : " border-gray-300 focus:border-gray-800"
                }`}
                {...props}
            />

            {isError && errorMessage && <InputErrorMessage message={errorMessage} />}
        </div>
    );
});

export default Input;
