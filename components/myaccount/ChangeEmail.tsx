import React, { useState, Fragment } from "react";
import AuthFormInput from "../authentication/inputs/AuthFormInput";
import ChangeEmailModal from "./ChangeEmailModal";

interface Props {}

const ChangeEmail: React.FC<Props> = (props) => {
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
                defaultValue="rs.2001.saha@gmail.com"
                disabled
                readOnly
            />

            <button className="block ml-auto text-red-500 mt-2 hover:underline" onClick={openModal}>
                Change Email
            </button>

            <ChangeEmailModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
};

export default ChangeEmail;
