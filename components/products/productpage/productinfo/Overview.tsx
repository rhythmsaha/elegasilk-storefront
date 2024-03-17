import React from "react";

interface Props {
    sku: string;
    color: {
        name: string;
        hex: string;
    };
    availability: boolean;
}

const Overview: React.FC<Props> = ({ availability, color, sku }) => {
    return (
        <div className="flex flex-col mt-4">
            <span
                style={{
                    backgroundColor: color?.hex || "transparent",
                }}
                className="h-6 w-6 inline-block rounded-full ring-2 ring-offset-2 ring-gray-200"
            />

            <span className="mt-2">
                <span className="text-gray-800">Color:</span>
                <span className="text-gray-600 ml-1">{color?.name || "Unknown"}</span>
            </span>

            <span>
                <span className="text-gray-800">SKU:</span>
                <span className="text-gray-600 ml-1 uppercase">{sku}</span>
            </span>

            <span>
                <span className="text-gray-800">Availability:</span>

                {availability ? (
                    <span className="text-green-600 ml-1">In Stock</span>
                ) : (
                    <span className="text-red-600 ml-1">Out of Stock</span>
                )}
            </span>
        </div>
    );
};

export default Overview;
