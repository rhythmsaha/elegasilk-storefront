import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiChevronDown, HiChevronUpDown } from "react-icons/hi2";

const people = [
    {
        id: 1,
        name: "Wade Cooper",
        avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 2,
        name: "Arlene Mccoy",
        avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 3,
        name: "Devon Webb",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
        id: 4,
        name: "Tom Cook",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 5,
        name: "Tanya Fox",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 6,
        name: "Hellen Schmidt",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 7,
        name: "Caroline Schultz",
        avatar: "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 8,
        name: "Mason Heaney",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 9,
        name: "Claudie Smitham",
        avatar: "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        id: 10,
        name: "Emil Schaefer",
        avatar: "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

const sortData = [
    {
        id: 0,
        name: "Best Matches",
        value: "best-matches",
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
        name: "Most Popular",
        value: "most-popular",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

interface Props {}

const SortByMenu: React.FC<Props> = ({}) => {
    const [selected, setSelected] = useState(sortData[3]);

    return (
        <div className="flex items-center gap-4">
            <h4>SORT BY :</h4>

            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <div className="relative">
                        <Listbox.Button className="relative min-w-52 w-full cursor-pointer rounded-md bg-white py-3 pl-4 pr-10 text-sm text-left text-gray-950 ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-gray-500 leading-none">
                            <div className="flex items-center">
                                <span className="block min-w-max">
                                    {selected.name}
                                </span>
                            </div>

                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <HiChevronDown
                                    className="text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm scrollbar-thin scrollbar-thumb-gray-200  scrollbar-track-transparent">
                                {sortData.map((sort) => (
                                    <Listbox.Option
                                        key={sort.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-gray-600 text-white"
                                                    : "text-gray-900",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={sort}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {sort.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? "text-white"
                                                                : "text-gray-500",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <HiCheck
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
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
