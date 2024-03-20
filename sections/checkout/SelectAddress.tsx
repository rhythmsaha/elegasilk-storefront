import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IAddress, fetchAddresses } from "../addresses/AddressListSection";
import API_URLs from "@/lib/API_URLs";
import CheckoutSelectAddressCard from "@/components/addressbook/CheckoutSelectAddressCard";
import EnterAddressManually from "./EnterAddressManually";
import { IAddressFormInput } from "@/pages/addresses/new";
import SectionHeading from "@/components/checkout/SectionHeading";

interface Props {
    addressFormRendered: boolean;
    onRenderAddressForm: () => void;
    onRemoveAddressForm: () => void;
    selectedAddress: IAddress | null;
    setSelectedAddress: React.Dispatch<React.SetStateAction<IAddress | null>>;
    onStepBackward: () => void;
}

const SelectAddress = forwardRef(
    (
        {
            onRenderAddressForm,
            onRemoveAddressForm,
            addressFormRendered,
            selectedAddress,
            setSelectedAddress,
            onStepBackward,
        }: Props,
        ref
    ) => {
        const [savedAddresses, setSavedAddresses] = useState<IAddress[]>([]);
        const [isLoading, setIsLoading] = useState(true);

        const fetchAddress = useCallback(async () => {
            try {
                setIsLoading(true);
                const addresses = await fetchAddresses(API_URLs.address.getAll);
                if (addresses.length === 0) throw new Error("No Address Found");
                setSavedAddresses(addresses);
            } catch (error: any) {
                onRenderAddressForm();
            } finally {
                setIsLoading(false);
            }
        }, []);

        useEffect(() => {
            fetchAddress();
        }, [fetchAddress]);

        const submitHandler = (data: IAddressFormInput) => {
            const address: IAddress = {
                _id: "AD_" + Math.random().toString(),
                firstName: data.firstName,
                lastName: data.lastName,
                mobile: data.mobile,
                houseNo: data.houseNo,
                street: data.street,
                city: data.city,
                state: data.state,
                pincode: data.pincode,
                isDefault: false,
            };

            setSelectedAddress(address);
        };

        return (
            <motion.section
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
            >
                <SectionHeading title="Choose Delivery Address" backBtn onBack={onStepBackward} />

                {!addressFormRendered && (
                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {!isLoading &&
                            savedAddresses.length > 0 &&
                            savedAddresses.map((address) => (
                                <CheckoutSelectAddressCard
                                    key={address._id}
                                    address={address}
                                    selected={selectedAddress?._id || ""}
                                    onSelect={() => setSelectedAddress(address)}
                                />
                            ))}
                    </div>
                )}

                {!addressFormRendered && (
                    <div className="flex items-center justify-center my-6">
                        <hr className="flex-grow" />
                        <span>Or</span>
                        <hr className="flex-grow" />
                    </div>
                )}

                <div>
                    {!addressFormRendered && (
                        <button
                            className="w-full py-2 px-2 rounded-lg bg-white text-black border-2 border-black"
                            onClick={onRenderAddressForm}
                        >
                            Add New Address
                        </button>
                    )}

                    {addressFormRendered && (
                        <EnterAddressManually onSelect={setSelectedAddress} onSubmit={submitHandler} ref={ref} />
                    )}

                    {addressFormRendered && (
                        <button
                            className="mt-2 w-full py-2 px-2 rounded-lg bg-white text-black border-2 border-black"
                            onClick={onRemoveAddressForm}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </motion.section>
        );
    }
);

SelectAddress.displayName = "SelectAddress";

export default SelectAddress;
