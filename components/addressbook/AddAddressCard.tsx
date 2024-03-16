import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";

interface Props {}

const AddAddressCard: React.FC<Props> = (props) => {
    return (
        <Link
            href="/addresses/new"
            className="border-2 border-dashed flex items-center justify-center w-full min-h-36 rounded-xl  hover:bg-gray-50 transition duration-75"
        >
            <div className="flex flex-col items-center justify-center">
                <IoMdAdd className="text-4xl text-gray-500" />
                <span className="text-gray-500 text-sm lg:text-base">Add New Address</span>
            </div>
        </Link>
    );
};

export default AddAddressCard;
