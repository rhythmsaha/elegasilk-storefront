import React from "react";
import { BrandHeader } from "../header";

interface Props {
    children: React.ReactNode;
}

const NoNavLayout = ({ children }: Props) => {
    return (
        <>
            <BrandHeader />
            {children}
        </>
    );
};

export default NoNavLayout;
