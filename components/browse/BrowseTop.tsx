import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { RxReset } from "react-icons/rx";
import SortByMenu from "./SortByMenu";
import { IColorFilter, ISubCategoryFilter } from "@/hooks/products/useFilters";
import { ISortItem } from "@/lib/Products_SortData";

interface Props {
    selectedAttribute: string[];
    selectedColors: string[];
    onReset: () => void;
    filterOptions: (ISubCategoryFilter | IColorFilter)[];
    sortBy: ISortItem;
    onSortChange: React.Dispatch<React.SetStateAction<ISortItem>>;
    onFilterToggle: () => void;
}

const BrowseTop: React.FC<Props> = ({
    selectedAttribute,
    selectedColors,
    onReset,
    filterOptions,
    sortBy,
    onSortChange,
    onFilterToggle,
}) => {
    const [selected, setSelected] = useState<any[]>([]);

    useEffect(() => {
        const _selected = [...selectedAttribute, ...selectedColors];
        const filteredOptions = filterOptions.filter((option: any) => {
            return _selected.includes(option._id);
        });
        // check if all object._id are unique in the array
        const unique = new Set(filteredOptions.map((item: any) => item._id));
        const uniqueArray = Array.from(unique).map((id) => {
            return filteredOptions.find((item: any) => item._id === id);
        });
        setSelected(uniqueArray);
    }, [filterOptions, selectedAttribute, selectedColors]);

    return (
        <div className="hidden lg:block mt-5 py-5 bg-white -mx-2 px-2 select-none sticky top-20 z-10">
            <div className="flex items-center justify-between gap-10 bg-white w-full">
                <div className="flex items-center justify-between gap-8 min-w-max">
                    <h4 className={`text-base uppercase text-gray-600 tracking-wider`}>
                        Filter By
                    </h4>

                    <button
                        className="flex items-center text-sm text-gray-500 hover:text-black transition duration-75 gap-1"
                        onClick={onReset}
                    >
                        Reset
                        <RxReset className="text-sm" />
                    </button>

                    <button
                        className="bg-black text-white  rounded-full p-0.5 xl:p-1"
                        onClick={onFilterToggle}
                    >
                        <BiChevronLeft className="text-xl" />
                    </button>
                </div>

                <div className="flex-1 overflow-x-auto scrollbar-none">
                    <div className="flex items-center justify-start gap-4">
                        {selected.map((_attribute) => (
                            <span
                                key={_attribute._id}
                                className="px-3 py-1.5 rounded-full border text-xs min-w-max"
                            >
                                {_attribute.name}
                            </span>
                        ))}
                    </div>
                </div>

                <SortByMenu sortBy={sortBy} onSortChange={onSortChange} />
            </div>
        </div>
    );
};

export default BrowseTop;
