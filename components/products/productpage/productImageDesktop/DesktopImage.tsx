import Image from "next/image";
import React, { useState } from "react";

interface Props {
    images: string[];
}

const DesktopImage: React.FC<Props> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const onSelectImage = (index: number) => {
        if (images[index]) {
            setSelectedImage(images[index]);
        }
    };

    return (
        <section className="hidden lg:flex items-start lg:gap-2 sticky top-28 h-full w-full">
            <div className="min-w-16 w-16 2xl:w-24  max-h-[576px] overflow-auto scrollbar-none  grid grid-flow-row gap-4">
                {images.map((image, index) => (
                    <Image
                        key={image}
                        src={image}
                        height={120}
                        width={120}
                        alt=""
                        className={`object-cover aspect-square object-top w-full h-full rounded-lg  hover:opacity-50
                        ${selectedImage === image ? "opacity-50" : ""}
                        `}
                        onMouseEnter={() => onSelectImage(index)}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 h-full flex-1 w-full overflow relative">
                <Image
                    src={selectedImage}
                    height={1500}
                    width={1000}
                    objectFit="cover"
                    alt="Product Image"
                    className="object-cover object-top w-full lg:aspect-[2/3] xl:aspect-[4.2/5] 2xl:aspect-[4/5]"
                />
            </div>
        </section>
    );
};

export default DesktopImage;

//
