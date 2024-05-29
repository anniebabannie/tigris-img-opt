/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // loader: 'custom',
    // loaderFile: './utils/customLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fly.storage.tigris.dev',
        port: '',
      },
    ],
  },
};

export default nextConfig;
