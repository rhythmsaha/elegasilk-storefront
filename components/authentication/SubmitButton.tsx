import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const SubmitButton: React.FC<Props> = ({ text }) => {
    return <button className="w-full py-2.5 px-4 hover:bg-opacity-80 bg-black text-white mt-4 rounded-md">{text}</button>;
};

export default SubmitButton;
