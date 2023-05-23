/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  babel: {
    plugins: [['@swc/babel-plugin-styled-components', { ssr: true }]],
  },
};

module.exports = nextConfig;
