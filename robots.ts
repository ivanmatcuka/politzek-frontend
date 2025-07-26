import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  if (process.env.nodeEnv !== 'production') {
    return {
      rules: [
        {
          disallow: '/',
          userAgent: '*',
        },
      ],
    };
  }

  return {
    rules: {
      allow: '/',
      disallow: '/download-area/*',
      userAgent: '*',
    },
  };
}
