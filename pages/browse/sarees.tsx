import React, { useState } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import { IBM_Plex_Sans } from "next/font/google";
import BrowseProductsSection from "@/sections/products/BrowseProductsSection";
import useFilters from "@/hooks/products/useFilters";
import useProducts from "@/hooks/products/useProducts";
import LoadingScreen from "@/screens/LoadingScreen";
import MobileBottomMenu from "@/components/browse/mobile/MobileBottomMenu";
import sortData, { ISortItem } from "@/lib/Products_SortData";

const PlexFont = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const SareesPage: NextPageWithLayout = () => {
    const [selectedAttribute, setSelectedAttribute] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState<ISortItem>(sortData[0]);
    const { filterOptions, isFiltersLoading } = useFilters();
    const { productLoading, products } = useProducts(selectedAttribute, selectedColors);

    const handleAttributeChange = (id: string) => {
        const _selected = [...selectedAttribute];
        const index = _selected.indexOf(id);
        if (index === -1) {
            _selected.push(id);
        } else {
            _selected.splice(index, 1);
        }

        setSelectedAttribute(_selected);
    };

    const handleColorChange = (id: string) => {
        const _selected = [...selectedColors];
        const index = _selected.indexOf(id);
        if (index === -1) {
            _selected.push(id);
        } else {
            _selected.splice(index, 1);
        }

        setSelectedColors(_selected);
    };

    const resetFilters = () => {
        setSelectedAttribute([]);
        setSelectedColors([]);
    };

    if (isFiltersLoading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <div className={`max-w-screen-2xl mx-auto w-11/12 ${PlexFont.className}`}>
                <BrowseProductsSection
                    onSelectColor={handleColorChange}
                    onSelectattribute={handleAttributeChange}
                    selectedAttribute={selectedAttribute}
                    selectedColors={selectedColors}
                    filterOptions={filterOptions}
                    resetFilters={resetFilters}
                    sortBy={selectedSort}
                    onSortChange={setSelectedSort}
                />
            </div>

            {filterOptions && <MobileBottomMenu />}
        </>
    );
};

export default SareesPage;

SareesPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
