/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/courses/degree/bvoc-animation-graphic-design',
        destination: '/courses/degree/bvoc-animation',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      '@tabler/icons-react',
      'framer-motion',
      'firebase/firestore',
      'firebase/app',
    ],
  },
}

export default nextConfig
