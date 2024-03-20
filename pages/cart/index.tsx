import React, { useCallback, useRef, useState } from "react";
import { NextPageWithLayout } from "../_app";
import AuthLayout from "@/components/layouts/AuthLayout";
import useCartStore from "@/store/cart/useCartStore";
import { CgSpinner } from "react-icons/cg";
import EmptyState from "@/sections/cart/EmptyState";
import axios from "@/utils/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/auth/useAuthStore";
import PageHeading from "@/components/cart/CartItem/PageHeading";
import CartSummarySection from "@/sections/cart/CartSummarySection";
import PriceSummarySection from "@/sections/cart/PriceSummarySection";
import SelectAddress from "@/sections/checkout/SelectAddress";
import { IAddress } from "@/sections/addresses/AddressListSection";
import PaymentSection from "@/sections/checkout/PaymentSection";

enum CheckoutStep {
    CART,
    ADDRESS,
    PAYMENT,
}

export enum PaymentMethod {
    COD = "CASH_ON_DELIVERY",
    STRIPE = "STRIPE",
}

const CartPage: NextPageWithLayout = () => {
    const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(CheckoutStep.CART);
    const [addressFormRendered, setAddressFormRendered] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);

    // Payment Section States
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.STRIPE);

    const { _id, isLoading, totalQuantity } = useCartStore((state) => state);
    const { user } = useAuthStore((state) => state);

    const renderAddressForm = useCallback(() => {
        setSelectedAddress(null);
        setAddressFormRendered(true);
    }, []);

    const removeAddressForm = useCallback(() => {
        setSelectedAddress(null);
        setAddressFormRendered(false);
    }, []);

    const onCheckout = async () => {
        console.log("Stripe Checkout");

        const payload = {
            cartId: _id,
            email: user?.email,
            address: selectedAddress,
            paymentMethod: paymentMethod,
        };

        const respone = await axios.post("/orders/create-checkout-session", payload);
        if (!respone.data.url) {
            toast.error("Error in creating checkout session");
            return;
        }
        window.location.href = respone.data.url;
    };

    const onStepForward = () => {
        if (checkoutStep === CheckoutStep.CART) {
            setCheckoutStep(CheckoutStep.ADDRESS);
        } else if (checkoutStep === CheckoutStep.ADDRESS) {
            if (addressFormRendered && !selectedAddress) {
                handleSelectAddressFromForm();
            } else {
                setCheckoutStep(CheckoutStep.PAYMENT);
            }
        } else if (checkoutStep === CheckoutStep.PAYMENT) {
            onCheckout();
        }
    };

    const onStepBackward = () => {
        if (checkoutStep === CheckoutStep.PAYMENT) {
            setCheckoutStep(CheckoutStep.ADDRESS);
        } else if (checkoutStep === CheckoutStep.ADDRESS) {
            setSelectedAddress(null);
            setCheckoutStep(CheckoutStep.CART);
        }
    };

    const addressFormRef = useRef();

    const handleSelectAddressFromForm = useCallback(() => {
        const form = addressFormRef.current;
        if (!form) return;
        //@ts-ignore
        form.submitForm();
    }, []);

    const ButtonText = () => {
        if (checkoutStep === CheckoutStep.CART) return "Choose Delivery Address";
        if (checkoutStep === CheckoutStep.ADDRESS) return "Proceed to Payment";
        if (checkoutStep === CheckoutStep.PAYMENT) {
            if (paymentMethod === PaymentMethod.STRIPE) return "Proceed to Checkout";
            if (paymentMethod === PaymentMethod.COD) return "Place Order";
        }
    };

    console.log(paymentMethod);

    if (totalQuantity === 0 && !isLoading) return <EmptyState />;

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                    <CgSpinner className="animate-spin h-12 w-12 text-black" />
                </div>
            )}

            <div>
                <PageHeading SectionHeading="Shopping Cart" />

                {totalQuantity > 0 && (
                    <div className="max-w-screen-2xl space-y-4 mx-auto w-11/12 mt-10 mb-20">
                        <div className="grid lg:grid-cols-12 gap-4 items-start ">
                            <div className="lg:col-span-8 max-w-full overflow-hidden p-1">
                                {checkoutStep === CheckoutStep.CART && <CartSummarySection />}

                                {checkoutStep === CheckoutStep.ADDRESS && (
                                    <SelectAddress
                                        ref={addressFormRef}
                                        addressFormRendered={addressFormRendered}
                                        onRenderAddressForm={renderAddressForm}
                                        onRemoveAddressForm={removeAddressForm}
                                        selectedAddress={selectedAddress}
                                        setSelectedAddress={setSelectedAddress}
                                        onStepBackward={onStepBackward}
                                    />
                                )}

                                {checkoutStep === CheckoutStep.PAYMENT && (
                                    <PaymentSection
                                        onStepBackward={onStepBackward}
                                        onPaymentMethodSelect={setPaymentMethod}
                                        selectedMethod={paymentMethod}
                                    />
                                )}
                            </div>

                            <section className="lg:col-span-4 p-1">
                                <PriceSummarySection />

                                <div className="mt-8 space-y-2">
                                    <button className="w-full py-2 px-4 border-2 border-black bg-white text-black rounded hover:bg-black hover:text-white transition duration-200">
                                        Continue Shopping
                                    </button>

                                    <button
                                        className="w-full py-2 px-4 border-2 border-black bg-black text-white rounded hover:bg-opacity-80 transition duration-200"
                                        onClick={onStepForward}
                                    >
                                        {ButtonText()}
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;

CartPage.getLayout = (page) => {
    return <AuthLayout>{page}</AuthLayout>;
};
