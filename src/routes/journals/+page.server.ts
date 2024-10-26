import type { PageServerLoad } from './$types';

type journals = {
	id: number;
	title: string;
	poster: string;
	intro: string;
	description: string[];
}[];

/* type updated = {
    id: number;
    created_at: string;
    category: string;
    title: string;
    poster: string;
    intro: string;
    description: string;
    short: string;
}[]
 */
export const load = (async ({ fetch }) => {
	const res = await fetch('/api/journals-api');
	const journals: journals = await res.json();

	const cat = await fetch('/api/journal-categories');
	const categories = await cat.json();

	/* let { data, error } = await supabase
    .from('categories')
    .select('*') */

	return {
		journals: journals,

		streamed: {
			updated: categories ?? []
		}
	};
}) satisfies PageServerLoad;

export const prerender = true;
