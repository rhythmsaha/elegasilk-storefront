import BrowseTop from "@/components/browse/BrowseTop";
import FilterMenu from "@/components/browse/FilterMenu";
import Pagination from "@/components/browse/Pagination";
import MFilterMenu from "@/components/browse/mobile/MFilterMenu";
import SortMenu from "@/components/browse/mobile/SortMenu";
import ProductItem from "@/components/products/product/ProductItem";
import { IFilterOptions } from "@/hooks/products/useFilters";
import { ISortItem } from "@/lib/Products_SortData";
import LoadingScreen from "@/screens/LoadingScreen";
import { useFilterBarStore } from "@/store/filter/useBottomFilter";
import React, { useState } from "react";
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
    products: any[];
    productLoading: boolean;
    page: number;
    maxPage: number;
    onNext: () => void;
    onPrev: () => void;
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
    productLoading,
    products,
    page,
    maxPage,
    onNext,
    onPrev,
}) => {
    const [isFiltersCollapsed, setIsFiltersCollapsed] = useState(false);

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

    const filterCollapseToggle = () => {
        setIsFiltersCollapsed((isFiltersCollapsed) => !isFiltersCollapsed);
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
                    onFilterToggle={filterCollapseToggle}
                />
            )}

            <div className="flex items-start gap-10 w-full mb-20 mt-10 lg:mt-0">
                {!isFiltersCollapsed && (
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
                )}

                <div className="flex-1">
                    {productLoading && (
                        <div>
                            <LoadingScreen />
                        </div>
                    )}

                    {products.length === 0 && !productLoading && <div>No Products Found</div>}

                    {!productLoading && products.length > 0 && (
                        <div
                            className={`grid grid-cols-2 gap-4 md:grid-cols-3  ${
                                isFiltersCollapsed
                                    ? "lg:grid-cols-4 xl:grid-cols-5"
                                    : "lg:grid-cols-3 xl:grid-cols-4"
                            }`}
                        >
                            {products &&
                                products.length > 0 &&
                                products.map((product, i) => (
                                    <ProductItem key={product._id} product={product} />
                                ))}
                        </div>
                    )}

                    <Pagination page={page} maxPage={maxPage} onNext={onNext} onPrev={onPrev} />
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
