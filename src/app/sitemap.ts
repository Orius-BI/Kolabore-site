import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kolabore.com.br'
  const lastMod = new Date('2026-04-13')
  return [
    {
      url: `${base}/`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${base}/kolabore/`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/executivos/`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/contato/`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
