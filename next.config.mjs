/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**', 
      },
      {
        protocol: 'https', 
        hostname: '**.google.com', 
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;