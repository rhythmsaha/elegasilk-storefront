import React from "react";
import SectionContainer from "./SectionContainer";
import SeectionHeading from "./SeectionHeading";
import CollectionLinkTitleOutside from "../CollectionItems/CollectionLinkTitleOutside";

interface Props {
    fabricsData: any[];
}

const FabricsSection: React.FC<Props> = ({ fabricsData }) => {
    return (
        <SectionContainer>
            <SeectionHeading
                heading="Fabric Fantasies"
                subHeading={`Indulge in Luxurious Fabrics Tailored to Your Tastes`}
            />

            <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-4 gap-2 sm:gap-3 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-8">
                {fabricsData.map((fabric, index) => (
                    <CollectionLinkTitleOutside
                        key={index}
                        img={fabric.image}
                        name={fabric.name}
                        path={fabric.path || ""}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default FabricsSection;
