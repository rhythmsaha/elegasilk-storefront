import React from "react";

interface Props {
    title: string;
}

const SubMenuHeading = ({ title }: Props) => {
    return <h2 className="text text-black tracking-widest min-w-max text-base uppercase font-light">{title}</h2>;
};

export default SubMenuHeading;
