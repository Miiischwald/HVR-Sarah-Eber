/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.hausverwaltung-ebner.de',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
