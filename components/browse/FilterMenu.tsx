import { Nunito_Sans } from "next/font/google";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import FilterItemGroup from "./FilterItemGroup";
import FilterOptions from "@/lib/FilterOptions";

const NunitoFont = Nunito_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700"],
});

interface Props {}

const FilterMenu: React.FC<Props> = (props) => {
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
                />
            ))}

            {FilterOptions.colors && (
                <FilterItemGroup
                    filterid={"colorsFilter"}
                    expandedId={expandedFilterMenu}
                    onExpand={onExpandMenuHandler}
                    name={"Colors"}
                    items={FilterOptions.colors}
                    color
                />
            )}
        </div>
    );
};

export default FilterMenu;
