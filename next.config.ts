import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  // Configure images for Next.js Image component
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
  },
};

export default nextConfig;
