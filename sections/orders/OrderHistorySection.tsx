import Pagination from "@/components/browse/Pagination";
import OrderSummaryItem from "@/components/orders/OrderSummaryItem";
import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import useSWR from "swr";

interface IOrder {}

interface Props {}

const OrderHistorySection: React.FC<Props> = (props) => {
    const [maxPage, setMaxPage] = useState(5);
    const [page, setPage] = useState(1);

    const onNext = () => {
        if (page < maxPage) {
            setPage((prev) => prev + 1);
        } else {
            return;
        }
    };

    const onPrev = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        } else {
            return;
        }
    };

    const fetchOrders = useCallback(async (url: string) => {
        try {
            const response = await axios.get(url);
            if (response.status !== 200) throw new Error("Failed to fetch wishlist");
            if (!response.data.success || !response.data.orders) throw new Error("No Orders found!");
            if (!response.data.orders.length) throw new Error("No Orders found!");

            setMaxPage(response.data.maxPage);
            setPage(response.data.page);
            return response.data.orders as IOrder[];
        } catch (error: any) {
            throw new Error(error.message || "Something went wrong!");
        }
    }, []);

    const {
        data: orders,
        isLoading,
        error,
        mutate,
    } = useSWR(API_URLs.orders.get + `?${page && "page=" + page}`, fetchOrders);

    return (
        <section className="mt-8 lg:mt-10 space-y-4">
            <div className="space-y-6">
                {orders &&
                    orders.length > 0 &&
                    orders.map((order: any) => <OrderSummaryItem order={order} key={order._id} />)}
            </div>

            {maxPage > 1 && (
                <div className="!mt-10">
                    <Pagination page={page} maxPage={maxPage} onNext={onNext} onPrev={onPrev} />
                </div>
            )}
        </section>
    );
};

export default OrderHistorySection;
