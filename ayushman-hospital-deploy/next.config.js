/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['www.ayushmannagpurhospital.com', 'ayushmannagpurhospital.com'],
  },
  async redirects() {
    return [
      {
        source: '/ayushman-hospital-nagpur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/orthopedic-surgeon',
        destination: '/orthopedic-surgeon-nagpur',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 