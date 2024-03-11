import sortData from "@/lib/Products_SortData";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
    onClose: () => void;
}

const SortMenu: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="lg:hidden fixed z-30 inset-0 backdrop-blur flex items-end">
            <div className="max-h-[35%] relative w-full mt-auto bg-white flex flex-col justify-between items-center">
                <button
                    className="text-3xl absolute -top-16 bg-white rounded-full p-2 shadow-lg"
                    onClick={onClose}
                >
                    <IoCloseSharp />
                </button>

                <div className="overflow-auto w-full">
                    <div>
                        {sortData.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="w-full p-4 border-b-2 border-gray-300"
                                >
                                    <button className="w-full text-left">{item.name}</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortMenu;
