import { IAddress } from "@/sections/addresses/AddressListSection";
import React, { useEffect } from "react";

interface Props {
    address: IAddress;
    selected: string;
    onSelect: () => void;
}

const CheckoutSelectAddressCard: React.FC<Props> = ({
    address: { _id, firstName, lastName, mobile, houseNo, street, city, state, pincode, isDefault },
    onSelect,
    selected,
}) => {
    useEffect(() => {
        if (isDefault) onSelect();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDefault]);

    return (
        <div
            className={`
        bg-white p-4 shadow rounded-lg cursor-pointer
        ${selected === _id ? "border border-black" : "border border-gray-200"}        
        `}
            onClick={onSelect}
        >
            <h3 className="font-medium capitalize">
                {firstName} {lastName}
            </h3>

            <p className="text-sm text-gray-700">
                {houseNo}, {street}, {city}, {state}, {pincode}
            </p>

            <p className="text-sm">Phone: {mobile || "N/A"}</p>
        </div>
    );
};

export default CheckoutSelectAddressCard;
