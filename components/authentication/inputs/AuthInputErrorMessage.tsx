import React from "react";

interface Props {
    message: string;
}

const AuthInputErrorMessage: React.FC<Props> = ({ message }) => {
    return <span className="text-red-500 text-xs">{message}</span>;
};

export default AuthInputErrorMessage;
