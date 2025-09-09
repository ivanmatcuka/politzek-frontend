import type { MetadataRoute } from 'next';

import { getPrisoners } from './actions/getPrisoners';

const SITE_URL = process.env.SITE_URL || 'example.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const prisoners = await getPrisoners();

  const prisonerUrls: MetadataRoute.Sitemap =
    prisoners?.edges.map((edge) => ({
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.5,
      url: `${SITE_URL}/prisoner/${edge?.node?.slug}`,
    })) ?? [];

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
    ...prisonerUrls,
  ];
}
