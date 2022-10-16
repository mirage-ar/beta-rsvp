/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/beta',
        destination: 'https://testflight.apple.com/join/SodgdzA0',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
