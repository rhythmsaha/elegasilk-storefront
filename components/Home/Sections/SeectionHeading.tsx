import React, { FC } from "react";

interface Props {
    heading: string;
    subHeading?: string;
}

const SeectionHeading: FC<Props> = ({ heading, subHeading }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl uppercase lg:text-4xl font-semibold">
                {heading}
            </h2>

            {subHeading && (
                <h4 className="mt-2 lg:mt-3 text-sm text-gray-600 sm:text-base md:text-lg w-7/12 md:w-2/5 lg:w-max mx-auto">
                    {subHeading}
                </h4>
            )}
        </div>
    );
};

export default SeectionHeading;
