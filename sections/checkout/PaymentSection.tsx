import SectionHeading from "@/components/checkout/SectionHeading";
import { PaymentMethod } from "@/pages/cart";
import { motion } from "framer-motion";
import React from "react";

interface Props {
    onPaymentMethodSelect: (method: PaymentMethod) => void;
    selectedMethod: PaymentMethod;
    onStepBackward: () => void;
}

const PaymentSection: React.FC<Props> = ({ onStepBackward, selectedMethod, onPaymentMethodSelect }) => {
    const isSelected = (method: PaymentMethod) => selectedMethod === method;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className=""
        >
            <SectionHeading title="Choose Payment Option" backBtn onBack={onStepBackward} />

            <div className="mt-6 space-y-4">
                <div
                    className={`p-6 rounded-lg shadow cursor-pointer ${
                        isSelected(PaymentMethod.STRIPE) ? "border-2 border-black" : "border-2 border-transparent"
                    }`}
                    onClick={() => onPaymentMethodSelect(PaymentMethod.STRIPE)}
                >
                    <div>Pay Online with Credit or Debit Card</div>
                    <div className="text-gray-500 text-sm">Rupay, Visa, Mastercard, American Express, Discover</div>
                </div>

                <div
                    className={`p-6 rounded-lg shadow cursor-pointer ${
                        isSelected(PaymentMethod.COD) ? "border-2 border-black" : "border-2 border-transparent"
                    }`}
                    onClick={() => onPaymentMethodSelect(PaymentMethod.COD)}
                >
                    <div>Cash on Delivery</div>
                    <div className="text-gray-500 text-sm">Pay when you receive the order</div>
                </div>
            </div>
        </motion.div>
    );
};

export default PaymentSection;
