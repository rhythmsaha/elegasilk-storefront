import React from "react";

interface Props {
    amount: number;
}

const TotalPrice: React.FC<Props> = ({ amount }) => {
    return <span className="font-medium text-gray-700 md:text-lg">₹{amount}</span>;
};

export default TotalPrice;
