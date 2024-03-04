import React from "react";

interface Props {}

const UserLoggedOutMenu = (props: Props) => {
    return (
        <div className="w-56">
            <div className="">
                <button className="w-full px-4 py-2 bg-gray-950 text-white hover:bg-black hover:shadow-lg font-medium rounded-md">Login</button>
            </div>

            <div className="mt-4">
                <h2 className="text-lg text-gray-800">Not a Member Yet?</h2>
                <p className="text-sm mt-2">Join the Soch Circle for great discounts and exclusive member benefits & offers.</p>

                <button className="mt-3 py-0.5 px-0.5 font-semibold border-b-2 hover:border-b-black border-gray-800">Create Account</button>
            </div>
        </div>
    );
};

export default UserLoggedOutMenu;
