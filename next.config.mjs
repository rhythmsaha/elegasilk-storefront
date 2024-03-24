/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,

    // Include image URL
    images: {
        // domains: ["res.cloudinary.com", "www.karagiri.com"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "res.cloudinary.com",
            },

            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },

            {
                protocol: "https",
                hostname: "www.karagiri.com",
            },
            {
                protocol: "https",
                hostname: "*",
            },
        ],
    },
};

export default nextConfig;
