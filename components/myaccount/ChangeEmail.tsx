import React, { useState, Fragment } from "react";
import AuthFormInput from "../authentication/inputs/AuthFormInput";
import ChangeEmailModal from "./ChangeEmailModal";
import { IUserState } from "@/store/auth/useAuthStore";

interface Props {
    defaultEmail: string;
    onUpdate: (user: IUserState) => void;
}

const ChangeEmail: React.FC<Props> = ({ defaultEmail, onUpdate }) => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div>
            <AuthFormInput
                label="Email Address"
                type="email"
                id="readonlyEmail"
                value={defaultEmail}
                disabled
                readOnly
            />

            <button className="block ml-auto text-red-500 mt-2 hover:underline" type="button" onClick={openModal}>
                Change Email
            </button>

            <ChangeEmailModal isOpen={isOpen} closeModal={closeModal} onUpdate={onUpdate} />
        </div>
    );
};

export default ChangeEmail;
