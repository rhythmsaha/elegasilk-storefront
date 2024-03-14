import React from "react";

interface Props {}

const ReviewListHeader: React.FC<Props> = (props) => {
    return (
        <div>
            <h3 className="font-medium text-lg sm:text-xl">Review List</h3>
            <p className="text-gray-500 text-sm sm:text-base">Showing most recent reviews</p>
        </div>
    );
};

export default ReviewListHeader;
