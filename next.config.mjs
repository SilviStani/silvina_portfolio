/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
    unoptimized: false, // Cambia a true si necesitas deshabilitar la optimización
  },
};

export default nextConfig;