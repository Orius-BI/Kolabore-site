// src/app/sitemap.ts
// IMPORTANT: `export const dynamic = 'force-static'` is REQUIRED for output: 'export'.
// Without it, Next.js silently skips this file and out/sitemap.xml is never generated.
// See: https://github.com/vercel/next.js/issues/68667
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
      url: `${base}/expertise/`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/engajamento/`,
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
