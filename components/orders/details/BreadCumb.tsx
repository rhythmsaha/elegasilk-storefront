import Link from "next/link";
import React from "react";

interface Props {
    orderId: string;
}

const BreadCumb: React.FC<Props> = ({ orderId }) => {
    return (
        <div className="flex items-center gap-2 text-gray-700 text-sm">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/orders">Orders</Link>
            <span>/</span>
            <span className="text-gray-400 cursor-pointer">{orderId || "Details"}</span>
        </div>
    );
};

export default BreadCumb;
