/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.ayushmannagpurhospital.com'],
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