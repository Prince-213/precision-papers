import { supabase } from '$lib/supabaseClient';

const posts = [
	{ title: 'Search Id', slug: 'searchId', updatedAt: '2024-06-02T17:51:10:855' },
	{ title: 'Paper Id', slug: 'paperId', updatedAt: '2024-06-02T17:51:10:855' }
]; //list of posts containing a slug [{title: "Test title", slug: "test-title", updatedAt: "2023-01-01"}]

function formatDate(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}:${milliseconds}`;
}

const currentDate = new Date();
const formattedDate = '2024-05-30';

const categories = [
	'pdse',
	'resm',
	'ptai',
	'ccs',
	'pcs',
	'scs',
	'wtr',
	'fct',
	'crw',
	'bir',
	'sbt',
	'cet',
	'dmt',
	'sisr',
	'dlp'
];

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
	const { data: journals, error } = await supabase
		.from('journals')
		.select('*')
		.in('category', categories); // categories array

	if (error) {
		console.error('Error fetching journals:', error);
	}

	// Continue to generate the sitemap using the fetched journals
	const body = sitemap(posts, pages, journals);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (posts, pages, journals) => `<?xml version="1.0" encoding="UTF-8" ?>
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
  </url>`
		)
		.join('')}

  ${posts
		.map((post) =>
			post.visible
				? null
				: `
  <url>
    <loc>${website}/journals/search/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${formattedDate}</lastmod>
    <priority>0.3</priority>
  </url>`
		)
		.join('')}

  ${categories
		.map(
			(item) =>
				`
    <url>
      <loc>${website}/journals/category/${item}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${formattedDate}</lastmod>
      <priority>0.3</priority>
    </url>`
		)
		.join('')}

  ${journals
		.map(
			(journal) =>
				`
    <url>
      <loc>${website}/journals/search/${journal.category}/paper/${journal.journal_id}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${formatDate(Date.now())}</lastmod>
      <priority>0.3</priority>
    </url>`
		)
		.join('')}
</urlset>`;
