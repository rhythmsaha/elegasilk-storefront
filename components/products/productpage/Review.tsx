import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface Props {}

const Review: React.FC<Props> = (props) => {
    const [trunc, setTrunc] = useState(true);

    const onToggleTrunc = () => {
        setTrunc((val) => !val);
    };

    return (
        <div className="lg:max-w">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h3 className="text-gray-800 font-medium leading-none">Rhythm Saha</h3>
                    <span className="text-sm font-light leading-none text-gray-600">(Verified)</span>
                </div>

                <span className="text-gray-700 text-sm">1 month ago</span>
            </div>

            <div className="my-2">
                <Rating
                    className=""
                    size={20}
                    iconsCount={5}
                    initialValue={5}
                    allowFraction
                    SVGclassName="inline"
                    readonly
                    transition
                />
            </div>

            <div className="space-y-2 ">
                <h4 className="font-semibold text-gray-700">Love It: My Recent Clothing Purchase</h4>

                <p
                    className={`${trunc ? "line-clamp-5 lg:line-clamp-10" : ""} text-sm sm:text-base `}
                    onClick={onToggleTrunc}
                >
                    Delighted with my purchase from Elegasilk! Their saree exudes sheer elegance and charm, making every
                    moment draped in it truly special. A must-have for anyone craving timeless grace in their wardrobe.
                </p>
            </div>
        </div>
    );
};

export default Review;
