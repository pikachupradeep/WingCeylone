import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS hostnames
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;
