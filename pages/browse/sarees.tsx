import React from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import { RxReset } from "react-icons/rx";
import { BiChevronLeft } from "react-icons/bi";
import { IBM_Plex_Sans } from "next/font/google";
import SortByMenu from "@/components/browse/SortByMenu";
import ProductItem from "@/components/products/product/ProductItem";
import StickyBox from "react-sticky-box";
import FilterMenu from "@/components/browse/FilterMenu";

const PlexFont = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const SareesPage: NextPageWithLayout = () => {
    return (
        <div
            className={`max-w-screen-2xl mx-auto w-11/12 ${PlexFont.className}`}
        >
            <StickyBox
                offsetTop={81}
                offsetBottom={20}
                className="hidden lg:block mt-5 py-5 bg-white z-10"
            >
                <div className="flex items-center justify-between gap-10 bg-white">
                    <div className="flex items-center justify-between gap-8">
                        <h4
                            className={`text-base uppercase text-gray-600 tracking-wider`}
                        >
                            Filter By
                        </h4>

                        <button className="flex items-center text-sm text-gray-500 gap-1">
                            Reset
                            <RxReset className="text-sm" />
                        </button>

                        <button className="bg-black text-white rounded-full p-0.5 xl:p-1">
                            <BiChevronLeft className="text-xl" />
                        </button>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1.5 rounded-full border text-xs">
                                Cotton
                            </span>

                            <span className="px-3 py-1.5 rounded-full border text-xs">
                                Cotton
                            </span>
                            <span className="px-3 py-1.5 rounded-full border text-xs">
                                Cotton
                            </span>
                            <span className="px-3 py-1.5 rounded-full border text-xs">
                                Cotton
                            </span>
                        </div>
                    </div>

                    <SortByMenu />
                </div>
            </StickyBox>

            <div className="flex items-start gap-10 w-full">
                <StickyBox
                    offsetTop={78 + 81}
                    offsetBottom={20}
                    className="w-1/5 bg-white"
                >
                    <div className="mt-6">
                        <FilterMenu />
                    </div>
                </StickyBox>

                <div className="grid flex-1 mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi beatae magnam molestias saepe aliquid non facilis
                    vero labore ratione voluptate quis, id totam quam. Tempora
                    officia natus voluptatem id delectus? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Excepturi beatae magnam
                    molestias saepe aliquid non facilis vero labore ratione
                    voluptate quis, id totam quam. Tempora officia natus
                    voluptatem id delectus?
                </div>
            </div>
        </div>
    );
};

export default SareesPage;

SareesPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
