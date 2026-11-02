const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  // Force webpack instead of Turbopack
  turbopack: {},
  async redirects() {
    const phpPages = [
      ['/index.php', '/'],
      ['/about.php', '/about'],
      ['/contact.php', '/contact'],
      ['/feed-mills.php', '/feed-mills'],
      ['/products.php', '/products'],
      ['/terms-of-use.php', '/terms-of-use'],
      ['/privacy-policy.php', '/privacy-policy'],
      ['/purchase-locations.php', '/purchase-locations'],
      ['/custom-dairy-feed.php', '/custom-dairy-feed'],
      ['/calf-feed.php', '/calf-feed'],
      ['/heifer-feed.php', '/heifer-feed'],
      ['/transitional-feed.php', '/transitional-feed'],
      ['/organic-feed.php', '/organic-feed'],
      ['/beef-feed.php', '/beef-feed'],
      ['/small-ruminants.php', '/small-ruminants'],
      ['/horse-feed.php', '/horse-feed'],
      ['/forage-inoculants.php', '/forage-inoculants'],
      ['/forage-innoculants.php', '/forage-inoculants'],
      ['/forage-innoculants', '/forage-inoculants'],
    ]

    return phpPages.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
  // Webpack configuration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    }
    return config
  },
}

module.exports = nextConfig
