/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ayushmannagpurhospital.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.ayushmannagpurhospital.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: 'public',
} 