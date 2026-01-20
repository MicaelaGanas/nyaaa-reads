import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mangadex.org',
      },
      {
        protocol: 'https',
        hostname: 'uploads.mangadex.org',
      },
    ],
  },
  // Ensure API routes use Node.js runtime on Vercel
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
