import React from "react";
import TotalReviews from "./TotalReviews";
import RatingBars from "./RatingBars";
import ReviewsList from "./ReviewsList";

interface Props {
    totalReviews: number;
    rating: number;
    bars?: {
        star: number;
        count: number;
    }[];

    reviews?: {
        _id: string;
        name: string;
        email: string;
        rating: number;
        review: string;
        createdAt: string;
    }[];
}

const defaultBars = [
    { star: 5, count: 100 },
    { star: 4, count: 50 },
    { star: 3, count: 10 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
];

const ReviewsSection: React.FC<Props> = ({ rating, totalReviews, bars = defaultBars }) => {
    const totalRatings = bars.reduce((acc, bar) => acc + bar.count, 0);
    const avgRating = (bars.reduce((acc, bar) => acc + bar.star * bar.count, 0) / totalRatings).toFixed(1);

    return (
        <section>
            <div className="max-w-screen-xl flex flex-col items-start lg:flex-row lg:items-center gap-10 lg:gap-28 pb-10 border-b">
                <TotalReviews rating={+avgRating} totalReviews={totalRatings} />
                <RatingBars bars={bars} totalReivews={totalRatings} />
            </div>

            <ReviewsList />
        </section>
    );
};

export default ReviewsSection;
