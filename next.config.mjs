/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // The live build folder was created as root, so deploys write a folder the deploy user can replace.
  distDir: '.next-deploy',
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
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [55, 60, 75],
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
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.firebasestorage.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zica-zima-crm.firebasestorage.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zica-zima-testing.firebasestorage.app',
        pathname: '/**',
      },
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
