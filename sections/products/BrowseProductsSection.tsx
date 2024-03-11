import BrowseTop from "@/components/browse/BrowseTop";
import FilterMenu from "@/components/browse/FilterMenu";
import SortByMenu from "@/components/browse/SortByMenu";
import { IFilterOptions } from "@/hooks/products/useFilters";
import { useFilterBarStore } from "@/store/filter/useBottomFilter";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { RxReset } from "react-icons/rx";
import StickyBox from "react-sticky-box";

interface Props {
    onSelectattribute: (id: string) => void;
    onSelectColor: (id: string) => void;
    selectedAttribute: string[];
    selectedColors: string[];
    filterOptions: IFilterOptions | null;
    resetFilters: () => void;
}

const BrowseProductsSection: React.FC<Props> = ({
    onSelectColor,
    onSelectattribute,
    selectedAttribute,
    selectedColors,
    filterOptions,
    resetFilters,
}) => {
    const { closeMSort, closeMFilter, isMFilterOpen, isMSortOpen } = useFilterBarStore(
        (state) => state
    );

    const filters = [
        ...(filterOptions?.attributes?.flatMap((attr) => attr.subcategories) || []),
        ...(filterOptions?.colors || []),
    ];

    return (
        <div>
            {filterOptions && (
                <BrowseTop
                    selectedAttribute={selectedAttribute}
                    selectedColors={selectedColors}
                    onReset={resetFilters}
                    filterOptions={filters}
                />
            )}

            <div className="flex items-start gap-10 w-full mb-20 mt-10 lg:mt-0">
                <StickyBox
                    offsetTop={78 + 81}
                    offsetBottom={20}
                    className="w-1/5 bg-white hidden lg:block "
                >
                    <div className="mt-6">
                        {filterOptions && (
                            <FilterMenu
                                onSelectattribute={onSelectattribute}
                                onSelectColor={onSelectColor}
                                selectedAttribute={selectedAttribute}
                                selectedColors={selectedColors}
                                filterOptions={filterOptions}
                            />
                        )}
                    </div>
                </StickyBox>
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                                quisquam ab fugit rerum error libero architecto molestiae non
                                repellat. Facere quas enim impedit. Quas repudiandae exercitationem,
                                debitis provident rem error.
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {filterOptions && isMFilterOpen && (
                <div className="fixed z-30 inset-0 backdrop-blur flex items-end">
                    <div className="overflow-auto w-full p-6 h-3/4 mt-auto bg-white flex flex-col justify-between">
                        <FilterMenu
                            onSelectattribute={onSelectattribute}
                            onSelectColor={onSelectColor}
                            selectedAttribute={selectedAttribute}
                            selectedColors={selectedColors}
                            filterOptions={filterOptions}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                className="w-full bg-white text-black  border-2 border-black rounded-full p-2"
                                onClick={resetFilters}
                            >
                                Reset
                            </button>

                            <button
                                className="w-full bg-black text-white rounded-full p-2  border-2 border-black"
                                onClick={resetFilters}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BrowseProductsSection;
