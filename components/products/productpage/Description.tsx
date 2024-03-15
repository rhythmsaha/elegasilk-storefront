import React from "react";

interface Props {
    description: string;
}

const Description: React.FC<Props> = ({ description }) => {
    return (
        <div className="text-sm text-gray-600 lg:text-base xl:text-lg">
            <p>{description}</p>
        </div>
    );
};

export default Description;
