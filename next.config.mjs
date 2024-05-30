/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    loader: 'custom',
    loaderFile: './utils/customLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cachefly-tigris.internal',
        port: '',
      },
    ],
  },
};

export default nextConfig;
