import React from "react";
import { FaStar } from "react-icons/fa";
import { fetchRatings } from "../productpage/ReviewsSection";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";
import useSWR from "swr";

interface Props {
    rating: number;
}

const RatingChip: React.FC<Props> = ({ rating }) => {
    return (
        <div className="absolute bottom-2 right-2 rounded-full py-1 px-3 bg-yellow-50">
            <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                <span className="leading-none text-black font-normal sm:font-medium text-xs sm:text-sm">
                    {rating.toFixed(1)}
                </span>
            </span>
        </div>
    );
};

export default RatingChip;
