import React from "react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
    name: string;
    filterid: string;
    expandedId?: string;
    onExpand: (id: string) => void;
    items?: { name: string; _id: string; hex?: string }[];
    color?: boolean;
}

const FilterItemGroup: React.FC<Props> = ({
    name,
    items,
    filterid,
    expandedId,
    onExpand,
    color,
}) => {
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
                    {items?.map((item) => (
                        <label
                            htmlFor={item._id}
                            className="flex items-center gap-2 cursor-pointer hover:text-black"
                            key={item._id}
                        >
                            <input
                                id={item._id}
                                name={item.name}
                                type="checkbox"
                                className="filter-checkbox"
                            />
                            <span className="leading-none flex items-center gap-2">
                                {item.name}

                                {color && (
                                    <span
                                        className="h-4 w-4 rounded-full opacity-70"
                                        style={{ backgroundColor: item.hex }}
                                    />
                                )}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterItemGroup;
