export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://addymize.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
