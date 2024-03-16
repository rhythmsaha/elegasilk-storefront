import React from "react";
import Card from "./Card";

interface Props {
    _default?: boolean;
}

const AddressCard: React.FC<Props> = ({ _default }) => {
    return (
        <Card _default={_default}>
            <div>
                <h3>Rhythm Saha</h3>
                <p>
                    <span>{60},</span>
                    <span>{"Paramartha Ganguly Lane, Bhangi Para, Nadia"}</span>
                </p>

                <p>
                    <span>{"Santipur"},</span>
                    <span>{"West Bengal"}.</span>
                    <span>{"741404"}.</span>
                </p>

                <p>
                    <span>Phone:</span>
                    <span>{7001120671}</span>
                </p>
            </div>

            <div className="mt-2">
                <button className="text-gray-700 hover:text-black underline">Edit</button>
                <button className="text-gray-700 hover:text-black underline ml-2">Delete</button>
                {!_default && <button className="text-gray-700 hover:text-black underline ml-2">Set as Default</button>}
            </div>
        </Card>
    );
};

export default AddressCard;
