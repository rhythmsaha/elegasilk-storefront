import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ISidebarStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useSearchbarStore = create<ISidebarStore>()(
    devtools(
        (set) => ({
            isOpen: false,

            open: () => {
                set({ isOpen: true }, false, "SearchBar/open");
            },

            close: () => {
                set({ isOpen: false }, false, "SearchBar/close");
            },
        }),
        { name: "SearchBar" }
    )
);
