import React from "react";

interface Props {}

const RatingBar: React.FC<{
    rating: number;
    fillPercent: number;
}> = ({ fillPercent, rating }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="min-w-max">{rating} Star</span>
            <div className="w-full bg-gray-300 rounded-full">
                <span
                    style={{ width: `${fillPercent || 0}%` }}
                    className="block bg-amber-400 rounded-full h-3 "
                />
            </div>
        </div>
    );
};

const RatingBars: React.FC<Props> = (props) => {
    return (
        <div className="w-full space-y-2">
            <RatingBar rating={5} fillPercent={100} />
            <RatingBar rating={4} fillPercent={80} />
            <RatingBar rating={3} fillPercent={60} />
            <RatingBar rating={2} fillPercent={40} />
            <RatingBar rating={1} fillPercent={20} />
        </div>
    );
};

export default RatingBars;
