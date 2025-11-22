// next.config.ts
import type { NextConfig } from "next";

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  experimental: { appDir: true },

  // static export for GitHub Pages (if needed)
  output: "export",
  images: { unoptimized: true },

  // use repoBase ("" in dev, "/my-portfolio" in prod)
  basePath: repoBase,
  assetPrefix: repoBase,
  trailingSlash: true,
};

export default nextConfig;
