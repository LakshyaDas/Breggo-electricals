/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Only necessary for static export
  },
 // Remove this if not creating a fully static site
};

module.exports = nextConfig;
