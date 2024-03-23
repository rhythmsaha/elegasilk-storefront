import SummaryItem from "@/components/cart/price-summary/SummaryItem";
import AuthLayout from "@/components/layouts/AuthLayout";
import Address from "@/components/orders/details/Address";
import BreadCumb from "@/components/orders/details/BreadCumb";
import OrderItem from "@/components/orders/details/OrderItem";
import PaymentInfo from "@/components/orders/details/PaymentInfo";
import Summary from "@/components/orders/details/Summary";
import OrderHeadingPart from "@/components/orders/details/header/OrderHeadingPart";
import API_URLs from "@/lib/API_URLs";
import { NextPageWithLayout } from "@/pages/_app";
import LoadingScreen from "@/screens/LoadingScreen";
import axios from "@/utils/axios";
import { IOrderStatusTypesAll } from "@/utils/order.ts/orderstatus";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdLocate } from "react-icons/io";
import { IoLocationOutline, IoPrintOutline } from "react-icons/io5";
import { PiPrinterBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
export interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Address {
    firstName: string;
    lastName: string;
    mobile: string;
    alternativeMobile: string;
    houseNo: string;
    street: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
}

export interface Item {
    _id: string;
    name: string;
    images: string;
    MRP: number;
    slug: string;
    quantity: number;
}

export interface Order {
    _id: string;
    orderId: string;
    sessionId: string;
    paymentMethod: string;
    address: Address;
    items: Item[];
    total: number;
    status: IOrderStatusTypesAll;
    totalQuantity: number;
    createdAt: string;
    updatedAt: string;
}

interface OrderState {
    success: boolean;
    order: Order;
}

interface Props {}

const OrderDetailsPage: NextPageWithLayout = (props) => {
    const [order, setOrder] = useState<Order>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const router = useRouter();

    const fetchOrder = useCallback(async () => {
        if (!router.isReady) return;
        const orderId = router.query.id;
        setIsLoading(true);

        try {
            const response = await axios(API_URLs.orders.getOne(orderId as string));
            const data = response.data as OrderState;
            console.log(data);
            setOrder(data.order);
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [router.isReady, router.query.id]);

    const updateOrderStatus = (status: IOrderStatusTypesAll) => {
        if (!order) return;
        setOrder({ ...order, status: status });
    };

    useEffect(() => {
        fetchOrder();
    }, [fetchOrder]);

    if (isLoading) return <LoadingScreen />;

    let updatedAt = new Date(order?.updatedAt!).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="max-w-screen-2xl mx-auto w-11/12 mt-10 lg:mt-12">
            <BreadCumb orderId={order?.orderId!} />

            {order && (
                <div className="mt-4 lg:mt-8 flex flex-col gap-4  lg:flex-row lg:justify-between lg:items-start">
                    <OrderHeadingPart order={order} updatedAt={updatedAt} onCancel={updateOrderStatus} />
                </div>
            )}

            <hr className="my-5 border-gray-100" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-start">
                <div className="bg-white shadow rounded-xl p-4 border border-gray-50 lg:col-span-8 ">
                    <div>
                        <h3 className="text-lg font-medium">Items</h3>
                    </div>
                    <div className="space-y-2 mt-4">
                        {order?.items.map((item) => (
                            <OrderItem key={item._id} {...item} />
                        ))}
                    </div>
                </div>

                {order && (
                    <div className="lg:col-span-4 space-y-4">
                        <Summary totalAmount={order.total} totalItems={order.totalQuantity} items={order.items} />
                        <Address order={order} />
                        <PaymentInfo method={order.paymentMethod} sessionId={order?.sessionId} />
                    </div>
                )}
            </div>

            <div className="pb-20"></div>
        </div>
    );
};

export default OrderDetailsPage;
OrderDetailsPage.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
};
