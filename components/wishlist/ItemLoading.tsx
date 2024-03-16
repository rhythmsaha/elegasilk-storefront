import React from "react";

interface Props {}

const ItemLoading: React.FC<Props> = (props) => {
    return (
        <div className="bg-white shadow-lg p-4 rounded-xl">
            <div className="aspect-[4/6] bg-gray-200 animate-pulse rounded-lg" />
            <div className="animate-pulse bg-gray-200 mt-4 h-12 w-full rounded-md"></div>
        </div>
    );
};

export default ItemLoading;
