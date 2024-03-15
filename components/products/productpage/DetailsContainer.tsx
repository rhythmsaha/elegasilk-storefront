import React, { useState } from "react";
import DetailsHeading from "./DetailsHeading";

interface Props {
    heading: string;
    children: React.ReactNode;
}

const DetailsContainer: React.FC<Props> = ({ heading, children }) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle((toggle) => !toggle);
    };

    return (
        <div className="">
            <DetailsHeading label={heading} onToggle={handleToggle} toggle={toggle} />
            {toggle && <div className="my-4 lg:my-6">{children}</div>}
        </div>
    );
};

export default DetailsContainer;
