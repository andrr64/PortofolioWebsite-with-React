import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/portofolio',
  assetPrefix: '/portofolio/',
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true, // ⬅️ penting buat static export
  },
};

export default nextConfig;
