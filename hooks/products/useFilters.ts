import API_URLs from "@/lib/API_URLs";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export interface IColorFilter {
    id: string;
    name: string;
    hex: string;
}

export interface ISubCategoryFilter {
    _id: string;
    name: string;
}

export interface IAttributeFilter {
    _id: string;
    name: string;
    subcategories: ISubCategoryFilter[];
}

export interface IFilterOptions {
    colors?: IColorFilter[];
    attributes?: IAttributeFilter[];
}

const useFilters = () => {
    const [isFiltersLoading, setIsFiltersLoading] = useState(true);
    const [filterOptions, setFilterOptions] = useState<IFilterOptions | null>(null);

    const router = useRouter();
    const attributesQuery = router.query.attributes;
    const colorsQuery = router.query.colors;
    const collectionsQuery = router.query.collectionId;

    const fetchFilters = useCallback(async () => {
        if (!router.isReady) return;

        setIsFiltersLoading(true);

        const myQuery = {} as {
            [key: string]: string[] | string;
        };

        if (attributesQuery) {
            myQuery.attributes = [];
            if (Array.isArray(attributesQuery)) {
                myQuery.attributes = attributesQuery;
            } else {
                myQuery.attributes.push(attributesQuery);
            }
        }

        if (colorsQuery) {
            myQuery.colors = [];
            if (Array.isArray(colorsQuery)) {
                myQuery.colors = colorsQuery;
            } else {
                myQuery.colors.push(colorsQuery);
            }
        }

        if (collectionsQuery) {
            myQuery.collections = [];
            if (Array.isArray(collectionsQuery)) {
                myQuery.collections = collectionsQuery;
            } else {
                myQuery.collections.push(collectionsQuery);
            }
        }

        for (const key in myQuery) {
            if (myQuery[key].length === 0) {
                delete myQuery[key];
            } else {
                myQuery[key] = Array.from(new Set(myQuery[key])).join(",");
            }
        }

        try {
            const response = await axios.get(API_URLs.products.filters, {
                params: myQuery,
            });
            if (response.status !== 200 || !response.data.success) {
                throw new Error("Error fetching filters");
            }

            const _filterOptions = response.data.filterOptions as IFilterOptions;

            if (attributesQuery) {
                const filterOptions2 = {
                    attributes: [] as IAttributeFilter[],
                    colors: _filterOptions.colors,
                } as IFilterOptions;

                _filterOptions.attributes?.map((attribute) => {
                    if (attribute.subcategories.length === 1) {
                        if (attribute.subcategories[0]._id === attributesQuery) {
                            return;
                        }
                    }
                    return filterOptions2.attributes?.push(attribute);
                });
                setFilterOptions(filterOptions2);
            } else {
                setFilterOptions(_filterOptions);
            }
        } catch (error: any) {
            setFilterOptions(null);
            console.log("Error fetching filters", error);
        } finally {
            setIsFiltersLoading(false);
        }
    }, [router.isReady, attributesQuery, colorsQuery, collectionsQuery]);

    useEffect(() => {
        fetchFilters();
    }, [fetchFilters]);

    return { isFiltersLoading, filterOptions };
};

export default useFilters;
