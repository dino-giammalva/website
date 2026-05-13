import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.0.149"],
  images: {
    qualities: [74, 75, 78, 86],
  },
};

export default nextConfig;
