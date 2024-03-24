import Input from "@/components/addressbook/Input";
import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { Rating } from "react-simple-star-rating";

interface Props {
    productId: string;
    onRefresh: () => void;
}

const AddReviewModal: React.FC<Props> = ({ productId, onRefresh }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");

    const onClose = () => {
        setIsOpen(false);
    };

    const onSubmit = async () => {
        // Post review to the server
        if (!title || !review || !rating) {
            return toast.error("Please fill all the fields");
        }

        try {
            const response = await axios.post(API_URLs.ratings.add, {
                productId,
                title,
                review,
                rating,
            });

            if (!response.data.success) {
                throw new Error("Failed to post review");
            }

            toast.success("Review posted successfully");
            console.log(response.data.rating);

            onClose();
            onRefresh();
        } catch (error) {
            toast.error("Failed to post review");
        }
    };

    return (
        <>
            <div className="mt-6 lg:mt-10">
                <button className="border rounded px-4 py-2" onClick={() => setIsOpen(true)}>
                    Post Your Review
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                                    <div className="mt-10 sm:mt-0">
                                        <div className="">
                                            <h3 className="text-xl font-bold text-center">Add Review</h3>
                                        </div>

                                        <div className="mt-10 flex min-h-full justify-center flex-col items-center gap-6">
                                            <Rating
                                                className=""
                                                size={50}
                                                iconsCount={5}
                                                onClick={(rate) => {
                                                    setRating(rate);
                                                }}
                                                initialValue={0}
                                                SVGclassName="inline"
                                            />

                                            <div className="w-full space-y-4">
                                                <Input
                                                    placeholder="Write Subject here"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />

                                                <textarea
                                                    placeholder="Write your review here"
                                                    className="w-full h-40 border p-2 rounded"
                                                    value={review}
                                                    onChange={(e) => setReview(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-end gap-2">
                                        <button
                                            className="bg-black text-white rounded px-4 py-2 font-medium text-sm"
                                            onClick={onSubmit}
                                        >
                                            Post Review
                                        </button>

                                        <button
                                            className="bg-red-500 text-white rounded px-4 py-2 font-medium text-sm"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddReviewModal;
