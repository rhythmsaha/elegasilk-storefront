import { IFilterOptions } from "@/hooks/products/useFilters";
import React from "react";
import FilterMenu from "../FilterMenu";

interface Props {
    onSelectattribute: (id: string) => void;
    onSelectColor: (id: string) => void;
    selectedAttribute: string[];
    selectedColors: string[];
    filterOptions: IFilterOptions;
    onResetFilters: () => void;
    closeMFilter: () => void;
}

const MFilterMenu: React.FC<Props> = ({
    onSelectattribute,
    onSelectColor,
    selectedAttribute,
    selectedColors,
    filterOptions,
    onResetFilters,
    closeMFilter,
}) => {
    return (
        <div className="lg:hidden fixed z-30 inset-0 backdrop-blur flex items-end">
            <div className="overflow-auto w-full mt-auto bg-white flex flex-col justify-between browse-filter-size">
                <div className="px-6 py-4">
                    <FilterMenu
                        onSelectattribute={onSelectattribute}
                        onSelectColor={onSelectColor}
                        selectedAttribute={selectedAttribute}
                        selectedColors={selectedColors}
                        filterOptions={filterOptions}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 sticky bottom-0 bg-white w-full px-4 py-4">
                    <button
                        className="w-full bg-white text-black  border-2 border-black rounded-full p-2"
                        onClick={onResetFilters}
                    >
                        Reset
                    </button>

                    <button
                        className="w-full bg-black text-white rounded-full p-2  border-2 border-black"
                        onClick={closeMFilter}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MFilterMenu;
