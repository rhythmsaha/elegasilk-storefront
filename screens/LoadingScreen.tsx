import React from "react";
import { CgSpinner } from "react-icons/cg";

interface Props {}

const LoadingScreen: React.FC<Props> = (props) => {
    return (
        <div className="flex items-center justify-center h-page-main">
            <CgSpinner className="animate-spin text-4xl text-primary" />
        </div>
    );
};

export default LoadingScreen;
