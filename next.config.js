/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.politzek.org',
        port: '',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: { scrollRestoration: true },
  output: 'standalone',
};

module.exports = nextConfig;
