import React, { useState } from "react";
import Description from "./Description";
import ProductSpecs from "./ProductSpecs";
import ReviewsSection from "./ReviewsSection";

interface Props {}

enum TabIDs {
    Description = "id1_Description",
    Specifications = "id2_Specifications",
    Reviews = "id3_Reviews",
}

const TabItems = [
    {
        name: "Description",
        id: TabIDs.Description,
    },
    {
        name: "Specifications",
        id: TabIDs.Specifications,
    },
    {
        name: "Reviews",
        id: TabIDs.Reviews,
    },
];

const ProductBottomTabs: React.FC<Props> = (props) => {
    const [selectedTab, setSelectedTab] = useState<TabIDs>(TabIDs.Description);

    const onSelectTab = (id: TabIDs) => {
        setSelectedTab(id);
    };

    return (
        <section className="mt-20">
            <div className="grid grid-cols-3 place-items-center mx-auto">
                {TabItems.map(({ name, id }) => (
                    <button
                        key={id}
                        onClick={() => onSelectTab(id)}
                        className={`py-2 px-2 text-sm sm:text-xl w-full bg-white border-b-2 ${
                            selectedTab === id ? "border-gray-500" : "border-gray-200"
                        }`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <div className="mt-10">
                {selectedTab === TabIDs.Description && <Description />}
                {selectedTab === TabIDs.Specifications && <ProductSpecs />}
                {selectedTab === TabIDs.Reviews && <ReviewsSection />}
            </div>
        </section>
    );
};

export default ProductBottomTabs;
