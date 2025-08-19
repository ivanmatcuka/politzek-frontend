/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { scrollRestoration: true },
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    baseUrl: process.env.NEXT_SITE_URL,
    nodeEnv: process.env.NODE_ENV,
  },
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
        pathname: '**',
        protocol: 'https',
      },
      {
        hostname: '**',
        pathname: '**',
        protocol: 'http',
      },
    ],
  },
};

module.exports = nextConfig;
