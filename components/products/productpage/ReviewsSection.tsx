import React, { useCallback, useEffect, useState } from "react";
import TotalReviews from "./TotalReviews";
import RatingBars from "./RatingBars";
import ReviewsList from "./ReviewsList";
import { useRouter } from "next/router";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import AddReviewModal from "./review/AddReviewModal";
import useSWR from "swr";

interface Props {
    productId: string;
    updateParentRating: (avg: number, rating: number) => void;
}

export const defaultBars = [
    { star: 5, count: 100 },
    { star: 4, count: 50 },
    { star: 3, count: 10 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
];

export interface Rating {
    _id: string;
    productId: string;
    customerId: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    title: string;
    review: string;
    rating: number;
    __v: number;
}

export type RatingsBreakdown = [{ star: number; count: number }];

export interface ProductRatingData {
    success: boolean;
    data: {
        averageRating: number;
        totalRatings: number;
        ratings: Rating[];
        ratingsBreakdown: RatingsBreakdown;
    };
}

const checkEligibilityOnline = async (url: string) => {
    try {
        const response = await axios.get(url);
        if (!response.data.success) {
            throw new Error("Failed to check eligibility");
        }

        return response.data.eligible;
    } catch (error) {
        return false;
    }
};

export const fetchRatings = async (url: string, func: (avg: number, rating: number) => void) => {
    try {
        const response = await axios.get(url);
        const data = response.data as ProductRatingData;

        if (!data.success) {
            throw new Error("Failed to fetch ratings");
        }

        if (func) {
            func(data.data.averageRating, data.data.totalRatings);
        }
        return data.data;
    } catch (error) {
        return null;
    }
};

const ReviewsSection: React.FC<Props> = ({ productId, updateParentRating }) => {
    const { data: eligible, mutate: mutateElg } = useSWR(
        API_URLs.ratings.check(productId as string),
        checkEligibilityOnline
    );

    const {
        data: ratingsData,
        mutate: mutateRatings,
        isLoading: ratingsLoading,
        error: ratingsError,
    } = useSWR(
        API_URLs.ratings.get(productId),
        fetchRatings.bind(null, API_URLs.ratings.get(productId), updateParentRating)
    );

    return (
        <section>
            {ratingsData && (
                <>
                    <div className="mt-10 max-w-screen-xl mx-auto flex flex-col items-start lg:flex-row lg:items-center gap-10 lg:gap-28 pb-10 border-b">
                        <TotalReviews rating={ratingsData?.averageRating!} totalReviews={ratingsData?.totalRatings!} />

                        <RatingBars bars={ratingsData?.ratingsBreakdown!} totalReivews={ratingsData?.totalRatings!} />
                    </div>

                    {eligible && <AddReviewModal productId={productId} onRefresh={mutateElg} />}

                    {ratingsData?.ratings.length > 0 && <ReviewsList list={ratingsData.ratings} />}
                </>
            )}
        </section>
    );
};

export default ReviewsSection;
