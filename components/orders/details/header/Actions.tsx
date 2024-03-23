import API_URLs from "@/lib/API_URLs";
import { Order } from "@/pages/orders/[id]";
import axios from "@/utils/axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdLocate } from "react-icons/io";
import { IoPrintOutline } from "react-icons/io5";
import CancelModal from "./CancelModal";

interface Props {
    order: Order;
    onCancel: (status: Order["status"]) => void;
}

const Actions: React.FC<Props> = ({ order, onCancel }) => {
    return (
        <div className="flex items-center gap-2">
            {order?.status !== "FAILED" && order?.status !== "CANCELLED" && (
                <button className="px-4 py-2 text-sm flex items-center justify-center bg-black rounded text-white gap-1 font-medium">
                    <IoPrintOutline className="inline-block" />
                    Print Invoice
                </button>
            )}

            {(order?.status === "SHIPPED" ||
                order?.status === "RETURN_REQUESTED" ||
                order?.status === "EXCHANGE_REQUESTED") && (
                <button className="px-4 py-2 text-sm flex items-center justify-center bg-green-500 rounded text-white gap-1 font-medium">
                    <IoMdLocate className="inline-block" />
                    Track Order
                </button>
            )}

            {/* {order?.status === "PENDING" ||
                (order?.status === "PLACED" && (
                    <button className="px-4 py-2 text-sm flex items-center justify-center bg-red-500 rounded text-white font-medium">
                        Cancel Order
                    </button>
                ))} */}

            {order?.status === "PENDING" ||
                (order?.status === "PLACED" && <CancelModal onCancel={onCancel} order={order} />)}
        </div>
    );
};

export default Actions;
