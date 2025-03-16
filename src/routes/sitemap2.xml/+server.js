export async function GET() {
	const body = sitemap();
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
		<!--	created with www.mysitemapgenerator.com	-->
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://www.precisionchronicles.org/</loc>
	<lastmod>2025-03-11T17:04:43+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://www.precisionchronicles.org/journals</loc>
	<lastmod>2025-03-11T17:04:43+01:00</lastmod>
	<priority>1.0</priority>
</url>
</urlset>`;
