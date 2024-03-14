import React from "react";

interface Props {}

const Description: React.FC<Props> = (props) => {
    return (
        <div className="text-sm text-gray-600 lg:text-base xl:text-lg">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem asperiores
                voluptatibus ipsa, harum ea dolorum vero dicta facere! Blanditiis dolores excepturi
                corporis sunt voluptatum impedit dicta ratione officia recusandae! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Asperiores eaque dignissimos explicabo
                doloribus maiores aspernatur fuga culpa ab consequuntur minus iusto, eveniet
                mollitia sapiente assumenda dolorem. Ducimus earum illum possimus!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas cum, odit
                veniam necessitatibus sapiente reiciendis dolor magnam saepe aspernatur dignissimos
                at laudantium quaerat. Consequuntur sapiente iusto culpa enim adipisci.
            </p>
        </div>
    );
};

export default Description;
