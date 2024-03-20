import React from "react";

interface Props {
    SectionHeading: string;
}

const PageHeading: React.FC<Props> = ({ SectionHeading }) => {
    return (
        <div className="w-full bg-gray-100 h-36 lg:h-48 flex items-center justify-center">
            <h2 className="text-xl font-medium lg:text-2xl">{SectionHeading}</h2>
        </div>
    );
};

export default PageHeading;
