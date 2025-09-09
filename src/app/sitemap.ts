import type { MetadataRoute } from 'next';

const SITE_URL = process.env.SITE_URL || 'example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'daily',
      lastModified: new Date(),
      priority: 1,
      url: `${SITE_URL}`,
    },
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 0.9,
      url: `${SITE_URL}/donate`,
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE_URL}/prisoners`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.5,
      url: `${SITE_URL}/prisoner`,
    },
  ];
}
