import sortData, { ISortItem } from "@/lib/Products_SortData";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
    onClose: () => void;
    onChange: (item: ISortItem) => void;
    sortBy: ISortItem;
}

const SortMenu: React.FC<Props> = ({ onClose, onChange, sortBy }) => {
    const selectedId = sortBy.id;

    return (
        <div className="lg:hidden fixed z-30 inset-0 backdrop-blur flex items-end bg-black bg-opacity-50">
            <div className="max-h-[35%] relative w-full mt-auto bg-white shadow flex flex-col justify-between items-center pb-10">
                <button
                    className="text-3xl absolute -top-16 bg-white rounded-full p-2 shadow-lg"
                    onClick={onClose}
                >
                    <IoCloseSharp />
                </button>

                <div className="overflow-auto w-full ">
                    <div className="p-4">
                        {sortData.map((item) => {
                            return (
                                <button
                                    key={item.id}
                                    className="w-full py-4 border-b-2 last:border-none border-gray-100 text-sm sm:text-base relative flex items-center justify-between"
                                    onClick={() => onChange(item)}
                                >
                                    <span className="w-full text-left">{item.name}</span>

                                    {selectedId === item.id && (
                                        <FaCheckCircle className=" text-xl" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortMenu;
