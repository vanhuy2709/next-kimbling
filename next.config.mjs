/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kimtuyen.blog',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
