import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kollektiv26.com'
  const now = new Date()
  return [
    { url: base,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/tourism`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/tourism/concierge`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tourism/approach`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entertainment`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/entertainment/events`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/entertainment/label`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/entertainment/venues`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/innovation`,              lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
