import ItemLoading from "@/components/wishlist/ItemLoading";
import React from "react";

interface Props {}

const LoadingState: React.FC<Props> = (props) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-10">
            <ItemLoading />
            <ItemLoading />
            <ItemLoading />
            <ItemLoading />
            <ItemLoading />
        </div>
    );
};

export default LoadingState;
