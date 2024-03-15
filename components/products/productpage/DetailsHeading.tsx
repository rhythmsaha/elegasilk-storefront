import React from "react";

interface Props {
    label: string;
    toggle?: boolean;
    onToggle?: () => void;
}

const DetailsHeading: React.FC<Props> = ({ label, onToggle, toggle }) => {
    return (
        <div className="flex items-center justify-between py-4 border-b cursor-pointer select-none" onClick={onToggle}>
            <h3 className="text-xl font-medium">{label}</h3>

            {toggle ? <button className="">-</button> : <button className="">+</button>}
        </div>
    );
};

export default DetailsHeading;
