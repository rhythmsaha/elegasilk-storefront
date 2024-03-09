import Banner from "@/components/Home/Banner/Banner";
import BestSellerSection from "@/components/Home/Sections/BestSellerSection";
import FabricsSection from "@/components/Home/Sections/FabricsSection";
import OccassionsSection from "@/components/Home/Sections/OccassionsSection";
import SpecialCollectionsSection from "@/components/Home/Sections/SpecialCollectionsSection";
import React from "react";

interface Props {
    occasionData: any[];
    fabricsData: any[];
    collectionsData: any[];
}

const HomeCollections: React.FC<Props> = ({
    collectionsData,
    fabricsData,
    occasionData,
}) => {
    return (
        <>
            <Banner />

            <FabricsSection fabricsData={fabricsData} />

            <hr className="lg:hidden mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <BestSellerSection bestSellerData={[]} />

            <hr className="lg:hidden mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <OccassionsSection occasionData={occasionData} />

            <hr className="mt-10 lg:mt-20 max-w-xs lg:max-w-screen-xl border-gray-300 mx-auto w-10/12" />

            <SpecialCollectionsSection collectionsData={collectionsData} />
        </>
    );
};

export default HomeCollections;
