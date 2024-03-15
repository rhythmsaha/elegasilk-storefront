import React from "react";

interface Props {
    onSubmit: () => void;
    isLoading: boolean;
    text: string;
}

const ModalSubmitButton: React.FC<Props> = ({ onSubmit, isLoading, text }) => {
    return (
        <button
            onClick={onSubmit}
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
            {isLoading ? "Please Wait..." : text}
        </button>
    );
};

export default ModalSubmitButton;
