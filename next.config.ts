import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages deployment
  output: "export",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Uncomment below if deploying to a subdirectory like: https://username.github.io/portfolio/
  // basePath: "/portfolio",
};

export default nextConfig;
