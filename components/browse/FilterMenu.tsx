import { Nunito_Sans } from "next/font/google";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const NunitoFont = Nunito_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700"],
});

interface Props {}

const FilterItem: React.FC<{
    name: string;
    filterid: string;
    expandedId?: string;
    onExpand: (id: string) => void;
    items?: [{ name: string; slug: string; _id: string }];
}> = ({ name, items, filterid, expandedId, onExpand }) => {
    const isExpanded = expandedId === filterid;

    const toggleExpandHandler = () => {
        onExpand(filterid);
    };

    return (
        <div className="border-b first:border-t py-4">
            <div
                className="uppercase cursor-pointer flex items-center justify-between"
                onClick={toggleExpandHandler}
            >
                {name}

                <BiChevronDown
                    className={`text-xl ${isExpanded && "rotate-180"} `}
                />
            </div>

            {isExpanded && (
                <div className="mt-8 space-y-4">
                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>

                    <label htmlFor="" className="flex items-center gap-2">
                        <input type="checkbox" className="filter-checkbox" />
                        <span className="leading-none">Cotton</span>
                    </label>
                </div>
            )}
        </div>
    );
};

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
            className={`${NunitoFont.className} tracking-wider text-gray-800 select-none max-h-full overflow-y-auto`}
        >
            <FilterItem
                filterid="0"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Fabric"
            />
            <FilterItem
                filterid="1"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Colour"
            />
            <FilterItem
                filterid="2"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Craft"
            />
            <FilterItem
                filterid="3"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Occassion"
            />
            <FilterItem
                filterid="4"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Origin"
            />
            <FilterItem
                filterid="5"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Zari"
            />
            <FilterItem
                filterid="6"
                expandedId={expandedFilterMenu}
                onExpand={onExpandMenuHandler}
                name="Price Range"
            />
        </div>
    );
};

export default FilterMenu;
