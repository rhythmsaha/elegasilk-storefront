import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BrandLogo from "../header/BrandLogo";

interface Props {}

const Footer: React.FC<Props> = (props) => {
    return (
        <footer className="bg-gray-950 text-white">
            <main className="max-w-screen-2xl w-11/12 mx-auto py-12 lg:py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <section className="space-y-2">
                        <h3 className="text-xl">Locate Us</h3>
                        <div className="space-y-2 text-gray-400">
                            <p className=" flex gap-2">
                                <FaMapMarkerAlt className="inline-block text-lg mt-1.5" />
                                Santipur - 741404
                                <br /> Nadia, West Bengal, India
                            </p>
                            <p className=" flex gap-2">
                                <MdEmail className="text-lg inline-block  mt-1" />
                                Contact@rhythmsaha.me
                            </p>
                            <p className=" flex gap-2">
                                <FaPhone className="inline-block ml-0.5 mt-1.5" />
                                +91-700-000-0000
                            </p>
                        </div>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-xl">Help</h3>
                        <div className="">
                            <span className="block hover:underline text-gray-400 hover:text-white">Privacy Policy</span>
                            <span className="block hover:underline text-gray-400 hover:text-white">
                                Returns + Exchanges
                            </span>
                            <span className="block hover:underline text-gray-400 hover:text-white">Shipping</span>
                            <span className="block hover:underline text-gray-400 hover:text-white">
                                Terms & Conditions
                            </span>
                            <span className="block hover:underline text-gray-400 hover:text-white">FAQ&apos;s</span>
                        </div>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-xl">Useful Links</h3>
                        <div>
                            <span className="block hover:underline text-gray-400 hover:text-white">Our Story</span>
                            <span className="block hover:underline text-gray-400 hover:text-white">
                                Visit Our Store
                            </span>
                            <span className="block hover:underline text-gray-400 hover:text-white">Contact Us</span>
                            <span className="block hover:underline text-gray-400 hover:text-white">About Us</span>
                            <span className="block hover:underline text-gray-400 hover:text-white">Home</span>
                        </div>
                    </section>

                    <section className="space-y-2 ">
                        <h3 className="text-xl ">Sign Up for Email</h3>
                        <div className="text-sm text-gray-400 space-y-4 ">
                            <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
                            <div className="flex flex-col xs:flex-row border border-gray-600 rounded-md overflow-hidden p-1">
                                <input
                                    type="email"
                                    className="bg-transparent outline-none border-none flex-1 px-4 py-2 rounded-l-md overflow-hidden min-w-0"
                                />

                                <button className="bg-white text-black px-4 py-2 text-sm font-medium tracking-wider rounded">
                                    Subscribe
                                </button>
                            </div>

                            <p className="text-xs sm:text-right text-gray-600">
                                *We Accept Credit Cards, Upi & Cash On Delivery
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <section>
                <div className="max-w-screen-2xl w-11/12 mx-auto ">
                    <hr className="border-gray-900" />
                    <div className="py-4 lg:py-6 flex justify-center sm:justify-between items-center">
                        <div className="hidden sm:block">
                            <BrandLogo white />
                        </div>
                        <div className="text-gray-500 text-xs sm:text-sm">
                            <p>© 2024 Elegasilk Inc. All rights reserved. Designed & Developed by Rhythm Saha</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
