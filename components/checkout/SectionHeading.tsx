import React from "react";

interface Props {
    title: string;
    backBtn?: boolean;
    onBack?: () => void;
}

const SectionHeading: React.FC<Props> = ({ title, backBtn = false, onBack }) => {
    return (
        <div className="flex items-center ">
            <h2 className="font-medium text-lg lg:text-xl">Choose Delivery Address</h2>
            {backBtn && (
                <button className="text-black ml-8 hover:underline" onClick={onBack}>
                    Go Back
                </button>
            )}
        </div>
    );
};

export default SectionHeading;
