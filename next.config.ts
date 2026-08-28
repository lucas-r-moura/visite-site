import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages will publish the generated `out` directory.
  output: "export",
  // Static export cannot run the Next image optimization server.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
