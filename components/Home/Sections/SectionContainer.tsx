import React from "react";

interface Props {
    children: React.ReactNode;
}

const SectionContainer: React.FC<Props> = ({ children }) => {
    return (
        <section className="w-11/12 max-w-screen-2xl mx-auto mt-6 md:mt-10 lg:mt-20">
            {children}
        </section>
    );
};

export default SectionContainer;
