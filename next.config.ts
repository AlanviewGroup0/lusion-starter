import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
  },
  // Trigger redeploy
  env: {
    DEPLOY_ID: '2',
  },
};

export default nextConfig;
