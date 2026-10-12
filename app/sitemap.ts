import type { MetadataRoute } from 'next';
import { getPortfolioData } from '@/lib/portfolio-service';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolio = await getPortfolioData();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mohdabdullah.dev';

  // Base landing page route
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Dynamic project case study routes
  for (const project of portfolio.projects) {
    routes.push({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return routes;
}
