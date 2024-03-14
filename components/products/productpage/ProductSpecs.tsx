import React from "react";

const specs = [
    {
        name: "Product Category",
        value: "Saree",
        _id: "65e9a6ff276a3c59704385fb",
    },
    {
        name: "Fabrics",
        value: "Chiffon",
        _id: "65e9a6ff276a3c59704385fc",
    },
    {
        name: "Origin",
        value: "South",
        _id: "65e9a6ff276a3c59704385fd",
    },
    {
        name: "Occasion",
        value: "Festive Wear",
        _id: "65e9a6ff276a3c59704385fe",
    },
    {
        name: "Craft",
        value: "Woven Design",
        _id: "65e9a6ff276a3c59704385ff",
    },
    {
        name: "Blouse Type",
        value: "Unstitched Blouse Piece",
        _id: "65e9a6ff276a3c5970438600",
    },
    {
        name: "Blouse Dimension",
        value: "70 cm x 1.1 m",
        _id: "65e9a6ff276a3c5970438601",
    },
    {
        name: "Color",
        value: "Red",
        _id: "65e9a6ff276a3c5970438602",
    },
    {
        name: "Loom",
        value: "Made on Powerloom",
        _id: "65e9a6ff276a3c5970438603",
    },
    {
        name: "Zari",
        value: "Tested Zari",
        _id: "65e9a6ff276a3c5970438604",
    },
    {
        name: "Wash Care",
        value: "Dry Clean",
        _id: "65e9a6ff276a3c5970438605",
    },
    {
        name: "International Eligible",
        value: "Available",
        _id: "65e9a6ff276a3c5970438606",
    },
];

interface Props {}

const ProductSpecs: React.FC<Props> = (props) => {
    return (
        <div className="">
            <div className="grid grid-flow-row lg:grid-cols-1 gap-x-4">
                <div className="flex items-center bg-gray-200 text-black font-medium py-1">
                    <div className="py-2 px-3 flex items-center justify-start  w-1/2 md:w-1/4">
                        Feature
                    </div>

                    <div className="py-2 px-3 flex items-center justify-center flex-1">Details</div>
                </div>

                {specs.map((spec) => (
                    <div key={spec._id} className="border flex items-center odd:bg-gray-100">
                        <div className="py-2 px-3 flex items-center justify-start border-r w-1/2 md:w-1/4">
                            {spec.name}
                        </div>

                        <div className="py-2 px-3 flex items-center justify-center flex-1">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSpecs;
