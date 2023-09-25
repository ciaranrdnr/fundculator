/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
     ignoreBuildErrors: true
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paper-sepia.vercel.app',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
