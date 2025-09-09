import type { MetadataRoute } from 'next';

const SITE_URL = process.env.SITE_URL || 'example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 1,
      url: `https://${SITE_URL}/donate`,
    },
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 1,
      url: `https://${SITE_URL}/maintainance`,
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.8,
      url: `https://${SITE_URL}/prisoners`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.5,
      url: `https://${SITE_URL}/prisoner`,
    },
  ];
}
