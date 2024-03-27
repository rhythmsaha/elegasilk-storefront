import { useSearchbarStore } from "@/store/search/useSearchBarStore";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useKeyPressEvent } from "react-use";

interface Props {}

const Searchbar: React.FC<Props> = (props) => {
    const { close } = useSearchbarStore((state) => state);
    const [searchQuery, setSearchQuery] = useState("");

    useKeyPressEvent("Escape", close);

    const router = useRouter();

    const onSearchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };

    const onSeachHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (searchQuery.trim() === "") return;

        router.push(`/browse/sarees?search=${searchQuery}`);
    };

    useKeyPressEvent("Enter", onSeachHandler as any);

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -50 }}
            transition={{ duration: 0.2 }}
            className="w-full fixed z-10 bg-white inset-0"
        >
            <div className="max-w-screen-2xl h-full w-11/12 mx-auto flex items-center ">
                <div className="w-full h-full flex items-center gap-4">
                    <button onClick={close}>
                        <IoMdClose className="text-2xl text-gray-500" />
                    </button>

                    <input
                        type="search"
                        onChange={onSearchChangeHandler}
                        placeholder="Search..."
                        className="w-full border-none outline-none  py-2"
                    />

                    <button className="bg-black text-white px-4 py-1.5 lg:py-2 rounded" onClick={onSeachHandler}>
                        Search
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Searchbar;
