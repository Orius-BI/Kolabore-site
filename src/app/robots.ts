// src/app/robots.ts
// IMPORTANT: `export const dynamic = 'force-static'` is REQUIRED for output: 'export'.
// Without it, Next.js silently skips this file and out/robots.txt is never generated.
// See: https://github.com/vercel/next.js/issues/68667
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://kolabore.com.br/sitemap.xml',
  }
}
