import AddAddressCard from "@/components/addressbook/AddAddressCard";
import AddressCard from "@/components/addressbook/AddressCard";
import LoadingCard from "@/components/addressbook/LoadingCard";
import API_URLs from "@/lib/API_URLs";
import { IAddressFormInput } from "@/pages/addresses/new";
import { useAuthStore } from "@/store/auth/useAuthStore";
import axios from "@/utils/axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

export interface IAddress {
    _id: string;
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
    isDefault: boolean;
}

const fetchAddresses = async (url: string) => {
    try {
        const response = await axios.get(url);
        if (response.status !== 200) throw new Error("Failed to fetch addresses");
        if (!response.data.addresses) throw new Error("No Addresses Found");
        return response.data.addresses as IAddress[];
    } catch (error: any) {
        throw new Error(error.message || "Failed to fetch addresses");
    }
};

interface Props {}

const AddressListSection: React.FC<Props> = () => {
    const { data, isLoading, mutate } = useSWR(`/address`, fetchAddresses);

    const setDefaultHandler = async (id: string) => {
        toast.dismiss();
        try {
            const response = await axios.put(API_URLs.address.setDefault(id));
            if (response.status !== 200) throw new Error("Failed to set default address");
            toast.success("Default Address Set Successfully!");
            mutate();
        } catch (error: any) {
            toast.error("Failed to set default address");
        }
    };

    return (
        <section className="">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <AddAddressCard />
                {isLoading && <LoadingCard />}
                {isLoading && <LoadingCard />}
                {isLoading && <LoadingCard />}
                {data &&
                    data.length > 0 &&
                    data.map((address) => (
                        <AddressCard
                            _id={address._id}
                            key={address._id}
                            _default={address.isDefault}
                            firstName={address.firstName}
                            lastName={address.lastName}
                            mobile={address.mobile}
                            alternativeMobile={address.alternativeMobile}
                            houseNo={address.houseNo}
                            street={address.street}
                            landmark={address.landmark}
                            city={address.city}
                            state={address.state}
                            pincode={address.pincode}
                            onSetDefault={() => setDefaultHandler(address._id)}
                            onMutate={mutate}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AddressListSection;
