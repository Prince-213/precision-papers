const posts = [
	{ title: 'Search Id', slug: 'searchId', updatedAt: '2024-05-30' },
	{ title: 'Paper Id', slug: 'paperId', updatedAt: '2024-05-30' }
]; //list of posts containing a slug [{title: "Test title", slug: "test-title", updatedAt: "2023-01-01"}]

const pages = [
	'about',
	'eligibility',
	'final-manuscript-submission',
	'initial-manuscript-submission',
	'journals',
	'search'
]; //list of pages as a string ex. ["about", "blog", "contact"]

const site = 'https://www.precisionchronicles.com';
const website = 'https://www.precisionchronicles.com';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(posts, pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${website}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
  ${posts
		.map((post) =>
			post.visible
				? null
				: `
  <url>
    <loc>${website}/journal/search/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
