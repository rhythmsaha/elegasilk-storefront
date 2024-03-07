/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // Include image URL
    images: {
        domains: ["res.cloudinary.com", "www.karagiri.com"],
    },
};

export default nextConfig;
