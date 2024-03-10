import { Nunito_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import FilterItemGroup from "./FilterItemGroup";
import FilterOptions from "@/lib/FilterOptions";

const NunitoFont = Nunito_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700"],
});

interface Props {
    onSelectattribute: (id: string) => void;
    onSelectColor: (id: string) => void;
    selectedAttribute: string[];
    selectedColors: string[];
}

const FilterMenu: React.FC<Props> = ({
    onSelectattribute,
    onSelectColor,
    selectedAttribute,
    selectedColors,
}) => {
    const [expandedFilterMenu, ExpandedFilterMenu] = useState<string>();

    const onExpandMenuHandler = (id: string) => {
        if (expandedFilterMenu === id) {
            ExpandedFilterMenu("");
            return;
        }
        ExpandedFilterMenu(id);
    };

    return (
        <div
            className={`${NunitoFont.className} tracking-wider text-gray-800 select-none max-h-full overflow-y-auto `}
        >
            {FilterOptions.attributes.map((filter, index) => (
                <FilterItemGroup
                    key={filter._id}
                    filterid={filter._id}
                    expandedId={expandedFilterMenu}
                    onExpand={onExpandMenuHandler}
                    name={filter.name}
                    items={filter.subcategories}
                    onSelect={onSelectattribute}
                />
            ))}

            {FilterOptions.colors && (
                <FilterItemGroup
                    filterid={"colorsFilter"}
                    expandedId={expandedFilterMenu}
                    onExpand={onExpandMenuHandler}
                    name={"Colors"}
                    items={FilterOptions.colors}
                    onSelect={onSelectColor}
                    color
                />
            )}
        </div>
    );
};

export default FilterMenu;
