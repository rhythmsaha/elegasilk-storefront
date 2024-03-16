import React from "react";
import Card from "./Card";
import Link from "next/link";

interface Props {
    _id: string;
    _default?: boolean;
    firstName: string;
    lastName: string;
    mobile: string;
    alternativeMobile?: string;
    houseNo: string;
    street: string;
    landmark?: string;
    city: string;
    state: string;
    pincode: string;
    onSetDefault?: () => void;
}

const AddressCard: React.FC<Props> = ({
    _id,
    _default,
    firstName,
    lastName,
    mobile,
    houseNo,
    street,
    city,
    state,
    pincode,
    onSetDefault,
}) => {
    return (
        <Card _default={_default}>
            <div className="flex flex-col justify-between h-full gap-4">
                <div>
                    <h3 className="capitalize font-medium">
                        {firstName} {lastName}
                    </h3>
                    <p className="text-gray-950 capitalize">
                        <span className="mr-1">{houseNo},</span>
                        <span>{street}</span>
                    </p>
                    <p className="text-gray-950 uppercase space-x-1">
                        <span>{city},</span>
                        <span>{state},</span>
                        <span>{pincode}</span>
                    </p>
                    <p>
                        <span className="mr-1">Phone:</span>
                        <span>{mobile}</span>
                    </p>
                </div>

                <div className="">
                    <Link href={`/addresses/edit/${_id}`} className="text-gray-700 hover:text-black underline">
                        Edit
                    </Link>
                    <button className="text-gray-700 hover:text-black underline ml-2">Delete</button>
                    {!_default && (
                        <button onClick={onSetDefault} className="text-gray-500 hover:text-black underline ml-4">
                            Set as Default
                        </button>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default AddressCard;
