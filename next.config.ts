import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon_io/favicon.ico",
        permanent: true,
      },
      {
        source: "/apple-touch-icon.png",
        destination: "/favicon_io/apple-touch-icon.png",
        permanent: true,
      },
      {
        source: "/site.webmanifest",
        destination: "/favicon_io/site.webmanifest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
