import type { MetadataRoute } from 'next';

const routes = [
  '',
  'menu',
  'special-deals',
  'track-order',
  'locations',
  'contact',
  'about',
  'login',
  'signup',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';
  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));
}
