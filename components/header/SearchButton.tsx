import React, { ButtonHTMLAttributes, ReactHTMLElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SearchButton = (props: Props) => {
    return (
        <button {...props}>
            <AiOutlineSearch />
        </button>
    );
};

export default SearchButton;
