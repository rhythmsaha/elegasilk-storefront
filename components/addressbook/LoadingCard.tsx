import React from "react";

interface Props {}

const LoadingCard: React.FC<Props> = (props) => {
    return (
        <div className="border-2 border-dashed flex items-center justify-center w-full min-h-48 rounded-xl  bg-gray-50 transition duration-75 animate-pulse" />
    );
};

export default LoadingCard;
