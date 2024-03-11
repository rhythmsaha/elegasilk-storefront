import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IFilterBarStore {
    isMFilterOpen: boolean;
    isMSortOpen: boolean;

    openMFilter: () => void;
    closeMFilter: () => void;
    openMSort: () => void;
    closeMSort: () => void;
}

export const useFilterBarStore = create<IFilterBarStore>()(
    devtools(
        (set) => ({
            isMFilterOpen: false,
            isMSortOpen: false,

            openMFilter: () => {
                set({ isMFilterOpen: true }, false, "filterBar/openMFilter");
            },

            closeMFilter: () => {
                set({ isMFilterOpen: false }, false, "filterBar/closeMFilter");
            },

            openMSort: () => {
                set({ isMSortOpen: true }, false, "filterBar/openMSort");
            },

            closeMSort: () => {
                set({ isMSortOpen: false }, false, "filterBar/closeMSort");
            },
        }),
        { name: "filterBar" }
    )
);
