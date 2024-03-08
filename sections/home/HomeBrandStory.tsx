import React from "react";

interface Props {}

const HomeBrandStory = (props: Props) => {
    return (
        <section className="mt-20 bg-gray-50">
            <div className="max-w-screen-2xl w-11/12 mx-auto">
                <div className="py-14 lg:py-20">
                    <h3 className=" text-gray-700 text-sm">
                        <span className="text-black font-semibold text-base mr-2">
                            Our Journey -
                        </span>
                        Weaving Dreams into Reality
                    </h3>

                    <div className="space-y-8 md:space-y-6 xl:space-y-4 text-xs text-gray-600 text-justify lg:text-sm">
                        <p className="mt-4">
                            Welcome to <span>Elegasilk</span>, where every saree
                            tells a tale of tradition, craftsmanship, and
                            timeless elegance. Our journey began with a vision
                            to redefine the saree shopping experience, blending
                            tradition with modernity to offer a curated
                            selection that reflects the diverse tastes and
                            lifestyles of today&apos;s woman.
                        </p>

                        <p>
                            Driven by a passion for quality and authenticity, we
                            scoured the length and breadth of India to handpick
                            sarees that embody the essence of our rich cultural
                            heritage. From the intricate weaves of Benarasi silk
                            to the vibrant hues of Kanchipuram silk, each saree
                            in our collection is a masterpiece in its own right,
                            lovingly crafted by skilled artisans who have honed
                            their craft for generations.
                        </p>

                        <p>
                            But <span>Elegasilk</span> is more than just a
                            destination for saree enthusiasts; it&apos;s a
                            celebration of femininity, empowerment, and
                            self-expression. We believe that every woman
                            deserves to feel confident and beautiful in her own
                            skin, and our sarees are designed to do just that.
                            Whether you&apos;re dressing up for a special
                            occasion or simply embracing the everyday elegance
                            of Indian attire, we have the perfect saree to
                            complement your unique style and personality.
                        </p>

                        <p>
                            Join us as we continue to weave dreams into reality,
                            one saree at a time. From the timeless classics to
                            the latest trends, Elegasilk is your trusted partner
                            in elevating your wardrobe and celebrating the
                            essence of womanhood. Welcome to our world of
                            sarees, where tradition meets modernity, and every
                            drape tells a story of grace and beauty.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBrandStory;
