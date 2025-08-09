import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    eslint: {
    ignoreDuringBuilds: true,  // disables ESLint during builds (including on Vercel)
  },
};

export default nextConfig;
