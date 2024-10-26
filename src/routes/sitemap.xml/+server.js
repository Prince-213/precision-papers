import { supabase } from '$lib/supabaseClient';

const currentTime = new Date();

const posts = [
	{
		title: 'International Journal of PowerGrid Dynamics Systems Engineering',
		short: 'pdse',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Recycled Energy Systems and Management',
		short: 'resm',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Power-Tech Advances and Innovations',
		short: 'ptai',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Engineering Design and Cognitive Computing Systems',
		short: 'ccs',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Precision Control Systems',
		short: 'pcs',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Space Communication Spectrum',
		short: 'scs',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Wireless Technologies Review',
		short: 'wtr',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Future Communication Trends',
		short: 'fct',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Cyber Resilience Review',
		short: 'crw',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Computer Science and Biometric Innovations Review',
		short: 'bir',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Computer Science and Smart Biometric Trends',
		short: 'sbt',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Biomedical and Computer Engineering Trends',
		short: 'cet',
		updatedAt: currentTime
	},
	{
		title: 'Advance Journal of Database Management Trends',
		short: 'dmt',
		updatedAt: currentTime
	},
	{
		title: 'Advance Journal of Secure Information Systems Review',
		short: 'sisr',
		updatedAt: currentTime
	},
	{
		title: 'International Journal of Advanced Deep Learning Perspectives',
		short: 'adl',
		updatedAt: currentTime
	}
];

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
	'journals'
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
			(post) => `
  <url>
    <loc>${website}/journals/search/${post.short}</loc>
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
    <loc>${website}/paper/${journal.journal_id}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${formatDate(new Date(journal.created_at))}</lastmod>
    <priority>0.3</priority>
  </url>`
		)
		.join('')}
</urlset>`;
