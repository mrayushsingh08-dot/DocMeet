/** @type {import('next').NextConfig} */

const nextConfig = {
  output: process.env.VERCEL ? undefined : "standalone",

  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;