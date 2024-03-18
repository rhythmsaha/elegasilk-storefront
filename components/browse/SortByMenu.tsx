import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronDown } from "react-icons/hi2";
import { ISortItem } from "@/lib/Products_SortData";

const sortData = [
    {
        id: 0,
        name: "Relevant",
        value: "relevant",
    },

    {
        id: 1,
        name: "Price Low To High",
        value: "price-low-to-high",
    },
    {
        id: 2,
        name: "Price High to Low",
        value: "price-high-to-low",
    },

    {
        id: 3,
        name: "Newest First",
        value: "newest-first",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

interface Props {
    sortBy: ISortItem;
    onSortChange: React.Dispatch<React.SetStateAction<any>>;
}

const SortByMenu: React.FC<Props> = ({ sortBy, onSortChange }) => {
    return (
        <div className="flex items-center gap-4">
            <h4>SORT BY :</h4>

            <Listbox value={sortBy} onChange={onSortChange}>
                {({ open }) => (
                    <div className="relative">
                        <Listbox.Button className="relative min-w-52 w-full cursor-pointer rounded-md bg-white py-3 pl-4 pr-10 text-sm text-left text-gray-950 ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-gray-500 leading-none">
                            <div className="flex items-center">
                                <span className="block min-w-max">{sortBy.name}</span>
                            </div>

                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <HiChevronDown className="text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-2 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm scrollbar-thin scrollbar-thumb-gray-200  scrollbar-track-transparent">
                                {sortData.map((sort) => (
                                    <Listbox.Option
                                        key={sort.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? "bg-gray-600 text-white" : "text-gray-900",
                                                "relative select-none py-2 pl-3 pr-9 cursor-pointer"
                                            )
                                        }
                                        value={sort}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected ? "font-semibold" : "font-normal",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {sort.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? "text-white" : "text-gray-500",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <HiCheck className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    );
};

export default SortByMenu;
