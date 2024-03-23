import React from "react";

interface Props {
    title: string;
    value: number;
    isMoney?: boolean;
    showLine?: boolean;
}

const SummaryItem: React.FC<Props> = ({ title, value, isMoney = false, showLine = true }) => {
    return (
        <div className="flex justify-between items-center gap-4 text-gray-600">
            <span>{title}</span>
            {showLine && <span className="flex-1 border-b border-dashed" />}
            <span>
                {isMoney
                    ? // price format
                      new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                      }).format(value)
                    : value}
            </span>
        </div>
    );
};

export default SummaryItem;
