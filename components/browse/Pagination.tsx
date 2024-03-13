import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface Props {
    page: number;
    maxPage: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination: React.FC<Props> = ({ page, maxPage, onNext, onPrev }) => {
    return (
        <div className="flex items-center justify-between  gap-2 mt-10">
            <p className="text-gray-400">
                Page {page} of {maxPage}
            </p>

            <div className="flex items-center gap-2">
                <button
                    className="bg-black text-white rounded-full p-3 disabled:bg-gray-100 disabled:text-black "
                    onClick={onPrev}
                    disabled={page === 1}
                >
                    <HiChevronLeft className="text-lg" />
                </button>

                <button
                    className="bg-black text-white rounded-full p-3 disabled:bg-gray-100 disabled:text-black "
                    onClick={onNext}
                    disabled={page === maxPage}
                >
                    <HiChevronRight className="text-lg" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
