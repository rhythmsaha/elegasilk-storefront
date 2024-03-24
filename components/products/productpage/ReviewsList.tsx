import React from "react";
import ReviewListHeader from "./ReviewListHeader";
import Review from "./Review";
import { Rating } from "./ReviewsSection";

interface Props {
    list: Rating[];
}

const ReviewsList: React.FC<Props> = ({ list }) => {
    return (
        <div className="mt-20">
            <ReviewListHeader />

            <div className="mt-10 grid grid-cols-1  gap-4 lg:gap-4">
                {list.map((rating) => (
                    <Review key={rating._id} rating={rating} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsList;
