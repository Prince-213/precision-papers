import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';
/* 
type search = {
    id: number,
    title: string,
    subject_area: string,
    date: string,
    main_author: string,
    views: number,
    volume: string,
    journal_id: number,
    journal_category: string,
    address: string
    intro: string
} */

type Categories = {
	id: number;
	created_at: string;
	title: string;
	poster: string;
	intro: string;
	description: string;
	short: string;
};

export const load = (async ({ fetch, params }) => {
	const { searchId } = params;

	const { data } = await supabase
		.from('journals')
		.select('*')

		.eq('state', 'published');

	const cat = await fetch('/api/journal-categories');
	const categories: Categories[] = await cat.json();

	// const title = categories.filter((item) => item.short == searchId);

	const title = searchId;

	const content = data?.filter((item) => item.title.toLowerCase().includes(title));

	/* let title = (await supabase
    .from('categories')
    .select("*")
    .eq('short', searchId)
    
    ).data */

	return {
		journals: content ?? [],

		title: title
	};
}) satisfies PageServerLoad;
