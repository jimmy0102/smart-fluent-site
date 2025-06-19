import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/tmp/', '/admin/', '/private/'],
    },
    sitemap: 'https://smartfluent.jp/sitemap.xml',
  }
}