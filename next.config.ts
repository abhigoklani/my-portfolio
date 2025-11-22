import type { NextConfig } from "next";

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Use env-controlled base path so local dev can run at "/"
  basePath: repoBase,
  assetPrefix: repoBase,

  // Helpful for next export -> GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
