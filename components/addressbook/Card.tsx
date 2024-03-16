import React from "react";

interface Props {
    _default?: boolean;
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children, _default }) => {
    return (
        <div
            className={`rounded-xl bg-white p-4 ${
                _default ? "border shadow-xl border-gray-800" : "border shadow border-gray-100"
            }`}
        >
            {children}
        </div>
    );
};

export default Card;
