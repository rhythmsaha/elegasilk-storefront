import Image from "next/image";
import React from "react";

interface Props {
    images: string[];
}

const DesktopImage: React.FC<Props> = ({ images }) => {
    return (
        <section className="hidden lg:flex items-start lg:gap-2 sticky top-28 h-full w-full">
            <div className="max-w-16 max-h-96 overflow-auto scrollbar-none min-w-16 grid grid-flow-row gap-4">
                {images.map((image, index) => (
                    <Image
                        key={image}
                        src={image}
                        height={120}
                        width={120}
                        alt=""
                        className="object-cover aspect-square object-top max-h-16 max-w-16 w-full h-full rounded-lg"
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 h-full flex-1 w-full overflow relative">
                <Image
                    src={images[0]}
                    height={1500}
                    width={1000}
                    objectFit="cover"
                    alt="Product Image"
                    className="object-cover object-top w-full xl:aspect-[4.5/5]"
                />
            </div>
        </section>
    );
};

export default DesktopImage;

//
