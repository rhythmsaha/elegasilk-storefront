import BrowseTop from "@/components/browse/BrowseTop";
import FilterMenu from "@/components/browse/FilterMenu";
import MFilterMenu from "@/components/browse/mobile/MFilterMenu";
import SortMenu from "@/components/browse/mobile/SortMenu";
import { IFilterOptions } from "@/hooks/products/useFilters";
import { ISortItem } from "@/lib/Products_SortData";
import { useFilterBarStore } from "@/store/filter/useBottomFilter";
import React from "react";
import StickyBox from "react-sticky-box";

interface Props {
    onSelectattribute: (id: string) => void;
    onSelectColor: (id: string) => void;
    selectedAttribute: string[];
    selectedColors: string[];
    filterOptions: IFilterOptions | null;
    resetFilters: () => void;
    sortBy: ISortItem;
    onSortChange: React.Dispatch<React.SetStateAction<ISortItem>>;
}

const BrowseProductsSection: React.FC<Props> = ({
    onSelectColor,
    onSelectattribute,
    selectedAttribute,
    selectedColors,
    filterOptions,
    resetFilters,
    onSortChange,
    sortBy,
}) => {
    const { isMFilterOpen, isMSortOpen, closeMSort, closeMFilter } = useFilterBarStore(
        (state) => state
    );

    const filters = [
        ...(filterOptions?.attributes?.flatMap((attr) => attr.subcategories) || []),
        ...(filterOptions?.colors || []),
    ];

    const onResetFilters = () => {
        resetFilters();
        if (isMFilterOpen) {
            closeMFilter();
        }
    };

    const onMSortChange = (item: ISortItem) => {
        onSortChange(item);

        if (isMSortOpen) {
            closeMSort();
        }
    };

    return (
        <div>
            {filterOptions && (
                <BrowseTop
                    selectedAttribute={selectedAttribute}
                    selectedColors={selectedColors}
                    onReset={resetFilters}
                    filterOptions={filters}
                    sortBy={sortBy}
                    onSortChange={onSortChange}
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

            {/* Mobile Sort and Filter Menu */}
            <>
                {filterOptions && isMFilterOpen && (
                    <MFilterMenu
                        onSelectattribute={onSelectattribute}
                        onSelectColor={onSelectColor}
                        selectedAttribute={selectedAttribute}
                        selectedColors={selectedColors}
                        filterOptions={filterOptions}
                        onResetFilters={onResetFilters}
                        closeMFilter={closeMFilter}
                    />
                )}

                {isMSortOpen && (
                    <SortMenu onClose={closeMSort} onChange={onMSortChange} sortBy={sortBy} />
                )}
            </>
        </div>
    );
};

export default BrowseProductsSection;
