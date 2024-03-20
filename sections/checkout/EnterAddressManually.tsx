import React, { useImperativeHandle, forwardRef } from "react";
import { IAddressFormInput } from "@/pages/addresses/new";
import { useAuthStore } from "@/store/auth/useAuthStore";
import { useForm } from "react-hook-form";
import AddressForm from "../addresses/AddressForm";
import { IAddress } from "../addresses/AddressListSection";

interface Props {
    onSelect: React.Dispatch<React.SetStateAction<IAddress | null>>;
    onSubmit: (data: IAddressFormInput) => void;
}

const EnterAddressManually = forwardRef(({ onSelect, onSubmit }: Props, ref) => {
    const user = useAuthStore((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressFormInput>({
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
        },
    });

    const submitForm = handleSubmit(onSubmit);

    useImperativeHandle(ref, () => ({
        submitForm,
    }));

    return (
        <div className="mt-8">
            <AddressForm errors={errors} onSubmit={handleSubmit(onSubmit)} register={register} shouldSubmit={false} />
        </div>
    );
});

EnterAddressManually.displayName = "EnterAddressManually";

export default EnterAddressManually;
