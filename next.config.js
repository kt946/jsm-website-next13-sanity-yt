/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This allows next/image to work with Sanity's image CDN
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
