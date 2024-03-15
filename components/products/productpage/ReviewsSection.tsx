import React from "react";
import TotalReviews from "./TotalReviews";
import RatingBars from "./RatingBars";
import ReviewsList from "./ReviewsList";

interface Props {}

const ReviewsSection: React.FC<Props> = (props) => {
    return (
        <section>
            <div className="max-w-screen-xl flex flex-col items-start lg:flex-row lg:items-center gap-10 lg:gap-28 pb-10 border-b">
                <TotalReviews />
                <RatingBars />
            </div>

            <ReviewsList />
        </section>
    );
};

export default ReviewsSection;
