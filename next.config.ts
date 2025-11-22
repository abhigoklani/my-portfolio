import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages deployment
  output: "export",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages subdirectory deployment
  basePath: "/my-portfolio",
};

export default nextConfig;
