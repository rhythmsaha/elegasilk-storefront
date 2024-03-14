import React from "react";
import { BsShieldCheck } from "react-icons/bs";
import { IoCubeOutline, IoRibbonOutline } from "react-icons/io5";

interface Props {}

const Assurance: React.FC<Props> = (props) => {
    return (
        <div className="space-y-2 mt-4 xl:mt-6">
            <p className="leading-3">
                <BsShieldCheck className="text-lg inline mr-1" />
                Authentic & Quality Assured
            </p>

            <p className="leading-3">
                <IoRibbonOutline className="text-lg inline mr-1" />
                100% money back guarantee
                <span className="underline text-gray-500 font-light text-sm">*Learn more</span>
            </p>

            <p className="leading-3">
                <IoCubeOutline className="text-lg inline mr-1" />
                Free Shipping & Returns
                <span className="underline text-gray-500 font-light text-sm">*Learn more</span>
            </p>
        </div>
    );
};

export default Assurance;
