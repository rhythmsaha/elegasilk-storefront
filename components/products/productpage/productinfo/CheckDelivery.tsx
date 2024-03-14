import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

interface Props {}

const CheckDelivery: React.FC<Props> = (props) => {
    const [value, setValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [editable, setEditable] = useState(true);

    return (
        <div className="mt-4 xl:mt-6">
            <span className="flex items-center gap-1 text-gray-800">
                <TbTruckDelivery />
                Delivery Options
            </span>

            <div className="flex items-center border rounded max-w-max px-4 py-2 mt-2">
                <input
                    type="text"
                    className="outline-none border-none focus:outline-none focus:border-none focus:ring-0 p-0 "
                />

                <button className="text-gray-800 hover:text-black font-medium">Check</button>
            </div>

            <span className="text-sm px-2 text-green-600">Delivery in 5 to 6 days</span>
        </div>
    );
};

export default CheckDelivery;
