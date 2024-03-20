import React from "react";

interface Props {
    title: string;
    value: number;
    isMoney?: boolean;
}

const SummaryItem: React.FC<Props> = ({ title, value, isMoney = false }) => {
    return (
        <div className="flex justify-between items-center gap-4 text-gray-600">
            <span>{title}</span>
            <span className="flex-1 border-b border-dashed" />
            <span>{isMoney ? "₹" + value.toFixed(2) : value}</span>
        </div>
    );
};

export default SummaryItem;
