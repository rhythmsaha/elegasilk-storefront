import React from "react";
import { MdDelete } from "react-icons/md";

interface Props {
    onDelete: () => void;
}

const DeleteItemButton: React.FC<Props> = ({ onDelete }) => {
    return (
        <button className="flex items-center text-red-500 gap-1 cursor-pointer" onClick={onDelete}>
            <MdDelete className="text-lg" />
            <span className="lg:hidden">Delete</span>
        </button>
    );
};

export default DeleteItemButton;
