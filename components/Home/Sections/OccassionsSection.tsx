import React from "react";
import SectionContainer from "./SectionContainer";
import SeectionHeading from "./SeectionHeading";
import CollectionLinkTitleInside from "../CollectionItems/CollectionLinkTitleInside";

interface Props {
    occasionData: any[];
}

const OccassionsSection: React.FC<Props> = ({ occasionData }) => {
    return (
        <SectionContainer>
            <SeectionHeading
                heading="Elevate Your Style"
                subHeading="Discover the Perfect Saree for Every Occasion"
            />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 xl:grid-cols-6 xl:gap-4 mt-6 md:mt-8 lg:mt-10">
                {occasionData.map((occasion, index) => (
                    <CollectionLinkTitleInside
                        key={index}
                        img={occasion.img}
                        name={occasion.name}
                        path={occasion.path}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default OccassionsSection;
