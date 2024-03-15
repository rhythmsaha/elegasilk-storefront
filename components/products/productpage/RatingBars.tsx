import React from "react";

interface Props {
    bars: {
        star: number;
        count: number;
    }[];
    totalReivews: number;
}

const RatingBar: React.FC<{
    rating: string | number;
    fillPercent: number;
}> = ({ fillPercent, rating }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="min-w-max">{rating} Star</span>
            <div className="w-full bg-gray-300 rounded-full overflow-hidden">
                <span style={{ width: `${fillPercent || 0}%` }} className="block bg-amber-400 rounded-full h-3 " />
            </div>
        </div>
    );
};

const RatingBars: React.FC<Props> = ({ bars, totalReivews }) => {
    const total = bars.reduce((acc, bar) => acc + bar.count, 0);

    return (
        <div className="w-full space-y-2">
            {bars.map((bar) => (
                <RatingBar key={bar.star} rating={bar.star} fillPercent={(bar.count * 100) / total} />
            ))}
        </div>
    );
};

export default RatingBars;
