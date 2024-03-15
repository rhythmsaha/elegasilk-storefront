import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import EmailForm from "./EmailForm";
import EmailOtpForm from "./EmailOtpForm";
import { IUserState } from "@/store/auth/useAuthStore";

interface Props {
    isOpen: boolean;
    closeModal: () => void;

    onUpdate: (user: IUserState) => void;
}

export enum EmailVerifyFormStep {
    InputEmail,
    VerifyEmail,
}

const ChangeEmailModal: React.FC<Props> = ({ isOpen, closeModal, onUpdate }) => {
    const [formStep, setFormStep] = useState(EmailVerifyFormStep.InputEmail);
    const [email, setEmail] = useState("");
    const [codeId, setCodeId] = useState("");

    const onReset = () => {
        setFormStep(EmailVerifyFormStep.InputEmail);
        setEmail("");
        setCodeId("");
    };

    const onEmailChange = (email: string, id: string) => {
        setEmail(email);
        setCodeId(id);
    };

    const OpenOTPForm = () => {
        setFormStep(EmailVerifyFormStep.VerifyEmail);
    };

    const openEmailForm = () => {
        setFormStep(EmailVerifyFormStep.InputEmail);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden backdrop-blur-sm">
                    <div className="flex min-h-full items-center w-full justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full sm:w-11/12 sm:max-w-lg h-screen sm:h-auto transform overflow-hidden sm:rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                {formStep === EmailVerifyFormStep.InputEmail && (
                                    <EmailForm
                                        openOTPForm={OpenOTPForm}
                                        openEmailForm={openEmailForm}
                                        oncancel={closeModal}
                                        onEmailChange={onEmailChange}
                                        email={email}
                                    />
                                )}

                                {formStep === EmailVerifyFormStep.VerifyEmail && (
                                    <EmailOtpForm
                                        openOTPForm={OpenOTPForm}
                                        openEmailForm={openEmailForm}
                                        oncancel={closeModal}
                                        codeId={codeId}
                                        email={email}
                                        onReset={onReset}
                                        onUpdate={onUpdate}
                                    />
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ChangeEmailModal;
