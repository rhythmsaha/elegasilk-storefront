import React from "react";
import TotalReviews from "./TotalReviews";
import RatingBars from "./RatingBars";
import ReviewsList from "./ReviewsList";

interface Props {}

const ReviewsSection: React.FC<Props> = (props) => {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto flex flex-col items-start lg:flex-row lg:items-center gap-10 pb-10 border-b">
                <TotalReviews />
                <RatingBars />
            </div>

            <ReviewsList />
        </section>
    );
};

export default ReviewsSection;
