import API_URLs from "@/lib/API_URLs";
import { ISortItem } from "@/lib/Products_SortData";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useProducts = (
    selectedAttribute: string[],
    selectedColors: string[],
    selectedCollection: string[] | undefined | null = null,
    selectedSort: ISortItem
) => {
    const [productLoading, setProductLoading] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const [productsError, setProductsError] = useState<any>(false);

    const [pageSize, setPageSize] = useState(30);
    const [maxPage, setMaxPage] = useState(1);
    const [page, setPage] = useState(1);

    const onNext = () => {
        if (page < maxPage) {
            setPage((prev) => prev + 1);
        } else {
            return;
        }
    };

    const onPrev = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        } else {
            return;
        }
    };

    const router = useRouter();
    const attributesQuery = router.query.attributes;
    const colorsQuery = router.query.colors;
    const collectionsQuery = router.query.collectionId;
    const searchQuery = router.query.search;

    const fetchProducts = useCallback(async () => {
        if (!router.isReady) return;

        setProductLoading(true);

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

        if (selectedAttribute.length) {
            // check if myquery has attributes and it is an array
            if (myQuery.attributes && Array.isArray(myQuery.attributes)) {
                myQuery.attributes = myQuery.attributes.concat(selectedAttribute);
            } else {
                myQuery.attributes = selectedAttribute;
            }
        }

        if (selectedColors.length) {
            if (myQuery.colors && Array.isArray(myQuery.colors)) {
                myQuery.colors = myQuery.colors.concat(selectedColors);
            } else {
                myQuery.colors = selectedColors;
            }
        }

        if (selectedCollection?.length) {
            if (myQuery.collections && Array.isArray(myQuery.collections)) {
                myQuery.collections = myQuery.collections.concat(selectedCollection);
            } else {
                myQuery.collections = selectedCollection;
            }
        }

        for (const key in myQuery) {
            if (myQuery[key].length === 0) {
                delete myQuery[key];
            } else {
                myQuery[key] = Array.from(new Set(myQuery[key])).join(",");
            }
        }

        if (searchQuery && typeof searchQuery === "string" && searchQuery.length > 0) {
            myQuery.search = searchQuery;
        }

        if (selectedSort) {
            myQuery.sortby = selectedSort.value;
        }

        if (page) myQuery.page = page.toString();
        if (pageSize) myQuery.pageSize = pageSize.toString();

        try {
            const response = await axios.get(API_URLs.products.all, {
                params: myQuery,
            });

            if (response.status !== 200 || !response.data.success) {
                throw new Error("Error fetching products");
            }

            setProducts(response.data.data);
            setMaxPage(+response.data.maxPage);
        } catch (error) {
            setProductsError(error);
        } finally {
            setProductLoading(false);
        }
    }, [
        router.isReady,
        attributesQuery,
        colorsQuery,
        collectionsQuery,
        selectedAttribute,
        selectedColors,
        selectedCollection,
        page,
        pageSize,
        selectedSort,
        searchQuery,
    ]);

    useEffect(() => {
        fetchProducts();

        return () => {
            window.scrollTo(0, 0);
        };
    }, [fetchProducts]);

    return { productLoading, products, productsError, page, maxPage, pageSize, onNext, onPrev };
};

export default useProducts;
