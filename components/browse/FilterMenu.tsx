import { Nunito_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import FilterItemGroup from "./FilterItemGroup";
import FilterOptions from "@/lib/FilterOptions";
import { IFilterOptions } from "@/hooks/products/useFilters";
import { useRouter } from "next/router";

const NunitoFont = Nunito_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700"],
});

interface Props {
    onSelectattribute: (id: string) => void;
    onSelectColor: (id: string) => void;
    selectedAttribute: string[];
    selectedColors: string[];
    filterOptions: IFilterOptions;
}

const FilterMenu: React.FC<Props> = ({
    onSelectattribute,
    onSelectColor,
    selectedAttribute,
    selectedColors,
    filterOptions,
}) => {
    const [expandedFilterMenu, ExpandedFilterMenu] = useState<string>();

    const onExpandMenuHandler = (id: string) => {
        if (expandedFilterMenu === id) {
            ExpandedFilterMenu("");
            return;
        }
        ExpandedFilterMenu(id);
    };

    const router = useRouter();

    let attributesQuery = router.query.attributes;

    if (typeof attributesQuery === "string") {
        attributesQuery = attributesQuery.split(",") as string[];
    } else if (typeof attributesQuery === "object" && attributesQuery.length > 0) {
        attributesQuery = attributesQuery;
    } else {
        attributesQuery = [];
    }

    let colorsQuery = router.query.colors;

    if (typeof colorsQuery === "string") {
        colorsQuery = colorsQuery.split(",") as string[];
    } else if (typeof colorsQuery === "object" && colorsQuery.length > 0) {
        colorsQuery = colorsQuery;
    } else {
        colorsQuery = [];
    }

    const _selectedAttributes: string[] = selectedAttribute.length
        ? [...selectedAttribute]
        : attributesQuery;

    const _selectedColors: string[] = selectedColors.length ? selectedColors : colorsQuery;

    return (
        <div className={`${NunitoFont.className} tracking-wider text-gray-800 select-none `}>
            {filterOptions.attributes &&
                filterOptions.attributes.length > 0 &&
                filterOptions.attributes.map((filter, index) => (
                    <FilterItemGroup
                        key={filter._id}
                        filterid={filter._id}
                        expandedId={expandedFilterMenu}
                        onExpand={onExpandMenuHandler}
                        name={filter.name}
                        items={filter.subcategories}
                        onSelect={onSelectattribute}
                        selectedItems={_selectedAttributes}
                    />
                ))}

            {filterOptions.colors && filterOptions.colors.length > 0 && filterOptions.colors && (
                <FilterItemGroup
                    filterid={"colorsFilter"}
                    expandedId={expandedFilterMenu}
                    onExpand={onExpandMenuHandler}
                    name={"Colors"}
                    items={FilterOptions.colors}
                    onSelect={onSelectColor}
                    selectedItems={_selectedColors}
                    color
                />
            )}
        </div>
    );
};

export default FilterMenu;
