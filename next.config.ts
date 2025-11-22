import type { NextConfig } from "next";

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || "/my-portfolio";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages deployment
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // For GitHub Pages: repo subdirectory (e.g. username.github.io/my-portfolio)
  basePath: repoBase,
  // Ensure static files use the same prefix when building
  assetPrefix: repoBase,

  // GitHub Pages prefers trailing slashes for static export
  trailingSlash: true,
};

export default nextConfig;
