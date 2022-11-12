/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
};

module.exports = nextConfig;
