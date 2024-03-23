import API_URLs from "@/lib/API_URLs";
import { Order } from "@/pages/orders/[id]";
import axios from "@/utils/axios";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface Props {
    order: Order;
    onCancel: (status: Order["status"]) => void;
}

const CancelModal: React.FC<Props> = ({ onCancel, order }) => {
    const [showModal, setShowModal] = useState(false);

    const cancelHandler = async () => {
        try {
            const orderId = order._id;
            const response = await axios.put(API_URLs.orders.cancel(orderId));
            const data = response.data;

            if (data.success) {
                toast.success("Order canceled successfully");
                setShowModal(false);
                onCancel("CANCELLED");
            }
        } catch (error) {
            toast.error("Failed to cancel order");
        }
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 text-sm flex items-center justify-center bg-red-500 rounded text-white font-medium"
            >
                Cancel Order
            </button>
            <Transition.Root show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={setShowModal}>
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
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <HiOutlineExclamationTriangle
                                                    className="h-6 w-6 text-red-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-gray-900"
                                                >
                                                    Cancel Order
                                                </Dialog.Title>

                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to cancel your order? This action cannot
                                                        be undone.
                                                    </p>

                                                    <p className="text-xs text-gray-400 mt-4">
                                                        <strong>Please note:</strong> Canceling this order will not
                                                        delete any pending shipments. To ensure uninterrupted
                                                        fulfillment of future orders, please update any wishlists,
                                                        subscriptions, or saved settings associated with this order.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={cancelHandler}
                                        >
                                            Cancel Order
                                        </button>

                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default CancelModal;
