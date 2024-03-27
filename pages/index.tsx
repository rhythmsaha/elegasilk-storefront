import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";
import HomeBrandStory from "@/sections/home/HomeBrandStory";
import HomeCollections from "@/sections/home/HomeCollections";
import "swiper/css/bundle";
import { collectionsData, fabricsData, occasionData } from "@/lib/LandingDatas";
import axios from "@/utils/axios";
import API_URLs from "@/lib/API_URLs";

interface Props {
    collections: any[];
}

const HomePage: NextPageWithLayout<Props> = ({ collections }) => {
    return (
        <>
            {/* <HomeCollections
                exclusiveCollections={collections}
                collectionsData={collectionsData}
                fabricsData={fabricsData}
                occasionData={occasionData}
            /> */}
            <HomeBrandStory />
        </>
    );
};

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

export const getStaticProps = async () => {
    try {
        const [weddingCol, partyCol, festivalCol, traditionalCol] = await Promise.all([
            axios.get(API_URLs.products.all, {
                params: {
                    attributes: "65737b5d7c5a3cb5bae715e5",
                    sortby: "relevant",
                    page: 1,
                    pageSize: 10,
                },
            }),

            axios.get(API_URLs.products.all, {
                params: {
                    attributes: "65737b958c8011c9be0b17b6",
                    sortby: "relevant",
                    page: 1,
                    pageSize: 10,
                },
            }),

            axios.get(API_URLs.products.all, {
                params: {
                    attributes: "65737b657c5a3cb5bae715ef",
                    sortby: "relevant",
                    page: 1,
                    pageSize: 10,
                },
            }),

            axios.get(API_URLs.products.all, {
                params: {
                    attributes: "65931bae1b495bff09fb1dfc",
                    sortby: "relevant",
                    page: 1,
                    pageSize: 10,
                },
            }),
        ]);

        if (
            weddingCol.data.success &&
            partyCol.data.success &&
            festivalCol.data.success &&
            traditionalCol.data.success
        ) {
            return {
                props: {
                    collections: [
                        {
                            name: "Popular in Wedding",
                            subtitle: "Shop the most popular wedding sarees from our collection.",
                            data: weddingCol.data.data,
                        },
                        {
                            name: "Popular in Party",
                            subtitle: "Shop the most popular party sarees from our collection.",
                            data: partyCol.data.data,
                        },

                        {
                            name: "Popular in Festival",
                            subtitle: "Shop the most popular festival sarees from our collection.",
                            data: festivalCol.data.data,
                        },
                        {
                            name: "Popular in Traditional",
                            subtitle: "Shop the most popular traditional sarees from our collection.",
                            data: traditionalCol.data.data,
                        },
                    ],
                },
            };
        }
    } catch (error: any) {
        console.error("Error fetching data from server", error.message);
    }

    return {
        props: {
            collections: [],
        },
    };
};

// attributes=65737b5d7c5a3cb5bae715e5&sortby=relevant&page=1&pageSize=30
