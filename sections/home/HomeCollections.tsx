import Banner from "@/components/Home/Banner/Banner";
import ExlusiveCollection from "@/components/Home/Sections/ExlusiveCollection";
import FabricsSection from "@/components/Home/Sections/FabricsSection";
import OccassionsSection from "@/components/Home/Sections/OccassionsSection";
import SpecialCollectionsSection from "@/components/Home/Sections/SpecialCollectionsSection";
import React from "react";

interface Props {
    occasionData: any[];
    fabricsData: any[];
    collectionsData: any[];
    exclusiveCollections: any[];
}

const HomeCollections: React.FC<Props> = ({ collectionsData, fabricsData, occasionData, exclusiveCollections }) => {
    return (
        <>
            <Banner />

            <FabricsSection fabricsData={fabricsData} />

            <hr className="lg:hidden mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <SpecialCollectionsSection collectionsData={collectionsData} />

            <hr className="lg:hidden mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <OccassionsSection occasionData={occasionData} />

            <hr className="mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            {exclusiveCollections &&
                exclusiveCollections.length > 0 &&
                exclusiveCollections.map((collection, index) => (
                    <ExlusiveCollection
                        key={index}
                        heading={collection.name}
                        subHeading={collection.subtitle}
                        items={collection.data}
                    />
                ))}
        </>
    );
};

export default HomeCollections;
