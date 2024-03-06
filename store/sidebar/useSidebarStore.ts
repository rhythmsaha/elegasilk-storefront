import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ISidebarStore {
    isOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

export const useSidebarStore = create<ISidebarStore>()(
    devtools(
        (set) => ({
            isOpen: false,

            openSidebar: () => {
                set({ isOpen: true }, false, "sidebar/openSidebar");
            },

            closeSidebar: () => {
                set({ isOpen: false }, false, "sidebar/closeSidebar");
            },
        }),
        { name: "sidebar" }
    )
);
