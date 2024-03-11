import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import FilterItem from "./FilterItem";

interface Props {
    name: string;
    filterid: string;
    expandedId?: string;
    onExpand: (id: string) => void;
    items: { name: string; _id: string; hex?: string; selected?: boolean }[];
    color?: boolean;
    selectedItems?: string[];
    onSelect?: (item: any) => void;
}

const FilterItemGroup: React.FC<Props> = ({
    name,
    items,
    filterid,
    expandedId,
    onExpand,
    color,
    onSelect,
    selectedItems,
}) => {
    const isExpanded = expandedId === filterid;

    const _items = items?.map((item) => {
        if (selectedItems?.includes(item._id)) {
            return { ...item, selected: true };
        }
        return item;
    });

    const toggleExpandHandler = () => {
        onExpand(filterid);
    };

    const selectFilterHandler = (id: string) => {
        if (onSelect) {
            onSelect(id);
        }
    };

    return (
        <div className="border-b first:border-t py-4">
            <div
                className="uppercase cursor-pointer flex items-center justify-between"
                onClick={toggleExpandHandler}
            >
                {name}

                <BiChevronDown className={`text-xl ${isExpanded && "rotate-180"} `} />
            </div>

            {isExpanded && (
                <div className="mt-8 space-y-4">
                    {_items?.map((item) => (
                        <FilterItem
                            key={item._id}
                            item={item}
                            color={color}
                            onSelect={selectFilterHandler}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterItemGroup;
