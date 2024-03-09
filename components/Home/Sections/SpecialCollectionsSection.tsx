import React from "react";
import SectionContainer from "./SectionContainer";
import SeectionHeading from "./SeectionHeading";
import CollectionLinkTitleInside from "../CollectionItems/CollectionLinkTitleInside";

interface Props {
    collectionsData: any[];
}

const SpecialCollectionsSection: React.FC<Props> = ({ collectionsData }) => {
    return (
        <SectionContainer>
            <SeectionHeading
                heading="Discover Our Diverse Collections"
                subHeading="Explore Our Wide Range of Collections available in our Store"
            />

            <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 2xl:grid-cols-6 2xl:gap-2">
                {collectionsData.map((collection, index) => (
                    <CollectionLinkTitleInside
                        key={index}
                        img={collection.image}
                        name={collection.name}
                        path={collection.path}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default SpecialCollectionsSection;
