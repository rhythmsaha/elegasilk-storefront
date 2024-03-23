import React from "react";

interface Props {
    method: string;
    sessionId: string;
}

const PaymentInfo: React.FC<Props> = ({ method, sessionId }) => {
    return (
        <div className="p-4 shadow border border-gray-100 rounded-xl">
            <h2 className="font-semibold border-b pb-4 lg:text-lg">Payment</h2>
            <div className="mt-2 capitalize">
                {method === "CASH_ON_DELIVERY" ? (
                    <h4 className="font-medium">Cash on Delivery</h4>
                ) : method === "STRIPE" ? (
                    <h4 className="font-medium">Debit Card / Credit Card</h4>
                ) : (
                    <h4 className="font-medium">Unknown</h4>
                )}

                {method === "STRIPE" && (
                    <p className="flex gap-2">
                        <span className="text-gray-800 font-medium whitespace-nowrap">Trn ID:</span>
                        <span className="text-sm lg:text-base break-all">{sessionId}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default PaymentInfo;
