import FilterMenu from "@/components/browse/FilterMenu";
import SortByMenu from "@/components/browse/SortByMenu";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { RxReset } from "react-icons/rx";
import StickyBox from "react-sticky-box";

interface Props {
    onSelectattribute: (id: string) => void;
    onSelectColor: (id: string) => void;
    selectedAttribute: string[];
    selectedColors: string[];
}

const BrowseProductsSection: React.FC<Props> = ({
    onSelectColor,
    onSelectattribute,
    selectedAttribute,
    selectedColors,
}) => {
    return (
        <div>
            <StickyBox
                offsetTop={81}
                offsetBottom={20}
                className="hidden lg:block mt-5 py-5 bg-white z-10 -mx-1 px-1"
            >
                <div className="flex items-center justify-between gap-10 bg-white">
                    <div className="flex items-center justify-between gap-8">
                        <h4 className={`text-base uppercase text-gray-600 tracking-wider`}>
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
                            <span className="px-3 py-1.5 rounded-full border text-xs">Cotton</span>
                            <span className="px-3 py-1.5 rounded-full border text-xs">Cotton</span>
                            <span className="px-3 py-1.5 rounded-full border text-xs">Cotton</span>
                            <span className="px-3 py-1.5 rounded-full border text-xs">Cotton</span>
                        </div>
                    </div>

                    <SortByMenu />
                </div>
            </StickyBox>

            <div className="flex items-start gap-10 w-full mb-20 mt-10 lg:mt-0">
                <StickyBox
                    offsetTop={78 + 81}
                    offsetBottom={20}
                    className="w-1/5 bg-white hidden lg:block "
                >
                    <div className="mt-6">
                        <FilterMenu
                            onSelectattribute={onSelectattribute}
                            onSelectColor={onSelectColor}
                            selectedAttribute={selectedAttribute}
                            selectedColors={selectedColors}
                        />
                    </div>
                </StickyBox>

                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {/* <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem /> */}
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                            quisquam ab fugit rerum error libero architecto molestiae non repellat.
                            Facere quas enim impedit. Quas repudiandae exercitationem, debitis
                            provident rem error.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseProductsSection;
