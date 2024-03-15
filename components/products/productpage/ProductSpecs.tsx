import React from "react";

interface Props {
    specs: {
        _id: string;
        name: string;
        value: string;
    }[];
}

const ProductSpecs: React.FC<Props> = ({ specs }) => {
    return (
        <div className="">
            <div className="grid grid-flow-row lg:grid-cols-1 gap-x-4">
                <div className="flex items-center bg-gray-200 text-black font-medium py-1">
                    <div className="py-2 px-3 flex items-center justify-start  w-1/2 md:w-1/4">Feature</div>

                    <div className="py-2 px-3 flex items-center justify-center flex-1">Details</div>
                </div>

                {specs.map((spec) => (
                    <div key={spec._id} className="border flex items-center odd:bg-gray-100 text-sm sm:text-base">
                        <div className="py-2 px-3 flex items-center justify-start border-r w-1/2 md:w-1/4">
                            {spec.name}
                        </div>

                        <div className="py-2 px-3 flex items-center justify-center flex-1 text-center">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSpecs;
