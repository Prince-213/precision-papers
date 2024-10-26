import { supabase } from '$lib/supabaseClient';

const posts = [
	{ title: 'Search Id', slug: 'searchId', updatedAt: '2024-06-02T17:51:10.855Z' },
	{ title: 'Paper Id', slug: 'paperId', updatedAt: '2024-06-02T17:51:10.855Z' }
]; // Example posts

/**
 * @param {Date} date
 */
function formatDate(date) {
	return date.toISOString().split('.')[0] + 'Z'; // ISO format with Z for UTC
}

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
];

const site = 'https://www.precisionchronicles.com';
const website = 'https://www.precisionchronicles.com';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const { data: journals, error } = await supabase
		.from('journals')
		.select('*')
		.in('category', categories);

	if (error) {
		console.error('Error fetching journals:', error);
	}

	const body = sitemap(posts, pages, journals);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (posts, pages, journals) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
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
		.map(
			(/** @type {{ slug: any; updatedAt: string | number | Date; }} */ post) => `
  <url>
    <loc>${website}/journals/search/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${formatDate(new Date(post.updatedAt))}</lastmod>
    <priority>0.3</priority>
  </url>`
		)
		.join('')}

  ${categories
		.map(
			(item) => `
  <url>
    <loc>${website}/journals/category/${item}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${formatDate(new Date())}</lastmod>
    <priority>0.3</priority>
  </url>`
		)
		.join('')}

  ${journals
		.map(
			(
				/** @type {{ category: any; journal_id: any; created_at: string | number | Date; }} */ journal
			) => `
  <url>
    <loc>${website}/journals/search/${journal.category}/paper/${journal.journal_id}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${formatDate(new Date(journal.created_at))}</lastmod>
    <priority>0.3</priority>
  </url>`
		)
		.join('')}
</urlset>`;
