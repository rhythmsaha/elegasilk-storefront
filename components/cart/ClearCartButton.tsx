import React from "react";
import { MdClearAll } from "react-icons/md";

interface Props {
    onClear: () => void;
}

const ClearCartButton: React.FC<Props> = ({ onClear }) => {
    return (
        <button
            onClick={onClear}
            className="ml-auto flex items-center text-white py-1 px-2 rounded-lg gap-1 cursor-pointer bg-red-500"
        >
            <MdClearAll className="text-lg" />
            <span>Clear Cart</span>
        </button>
    );
};

export default ClearCartButton;
