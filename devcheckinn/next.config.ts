import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["picsum.photos"], // 👈 allow external images from this domain
  },
};

export default nextConfig;
