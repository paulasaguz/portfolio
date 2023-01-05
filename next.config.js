/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
}

module.exports = nextConfig
