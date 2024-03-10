import React, { useCallback, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import { IBM_Plex_Sans } from "next/font/google";
import { useRouter } from "next/router";
import BrowseProductsSection from "@/sections/products/BrowseProductsSection";

const PlexFont = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const SareesPage: NextPageWithLayout = () => {
    const [selectedAttribute, setSelectedAttribute] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const [isProductsLoading, setIsProductsLoading] = useState(true);
    const [isFiltersLoading, setIsFiltersLoading] = useState(true);

    const router = useRouter();
    const attributesQuery = router.query.attributes;
    const colorsQuery = router.query.colors;

    const fetchProducts = useCallback(async () => {
        if (!router.isReady) return;
        setIsProductsLoading(true);
        const myQuery = {
            attributes: attributesQuery,
            colors: colorsQuery,
            selectedAttribute,
            selectedColors,
        };
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsProductsLoading(false);
        console.log("Fetching Products");
    }, [router.isReady, attributesQuery, colorsQuery, selectedAttribute, selectedColors]);

    const fetchFilters = useCallback(async () => {
        if (!router.isReady) return;
        setIsFiltersLoading(true);
        const myQuery = {
            attributes: attributesQuery,
            colors: colorsQuery,
        };
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsFiltersLoading(false);
        console.log("fetching filters");
    }, [router.isReady, attributesQuery, colorsQuery]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        fetchFilters();
    }, [fetchFilters]);

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

    if (isFiltersLoading) {
        return (
            <div className="flex items-center justify-center h-page-main">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className={`max-w-screen-2xl mx-auto w-11/12 ${PlexFont.className}`}>
            <BrowseProductsSection
                onSelectColor={handleColorChange}
                onSelectattribute={handleAttributeChange}
                selectedAttribute={selectedAttribute}
                selectedColors={selectedColors}
            />
        </div>
    );
};

export default SareesPage;

SareesPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
