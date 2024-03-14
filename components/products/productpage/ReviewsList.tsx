import React from "react";
import ReviewListHeader from "./ReviewListHeader";
import Review from "./Review";

interface Props {}

const ReviewsList: React.FC<Props> = (props) => {
    return (
        <div className="mt-20">
            <ReviewListHeader />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </div>
        </div>
    );
};

export default ReviewsList;
