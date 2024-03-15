import React from "react";

interface Props {
    onClick: () => void;
}

const ModalCancelButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="inline-flex justify-center rounded-md  bg-white  px-4 py-2 text-sm font-medium border-2 text-black border-black hover:bg-black hover:text-white transition duration-70"
        >
            Cancel
        </button>
    );
};

export default ModalCancelButton;
