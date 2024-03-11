import React, { useEffect, useRef } from "react";

interface Props {
    item: { name: string; _id: string; hex?: string; selected?: boolean };
    color?: boolean;
    onSelect: (id: string) => void;
}

const FilterItem: React.FC<Props> = ({ item, color, onSelect }) => {
    const changeHandler = () => {
        if (onSelect) {
            onSelect(item._id);
        }
    };

    return (
        <label
            htmlFor={item._id}
            className="flex items-center gap-2 cursor-pointer hover:text-black"
            key={item._id}
        >
            <input
                id={item._id}
                name={item.name}
                type="checkbox"
                onChange={changeHandler}
                checked={item.selected}
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
    );
};

export default FilterItem;
