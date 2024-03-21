import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

type Categories = {
    id: number;
    created_at: string;
    title: string;
    poster: string;
    intro: string;
    description: string;
    short: string;
}


export const load = (async ( { fetch, params } ) => {

    const { category } = params;

    

    const articles = (await supabase
    .from('journals')
    .select("*")
    .eq('category', category)
    .eq('state', 'published')).data

    const cat = await fetch('/api/journal-categories');
	const categories: Categories[] = await cat.json();

    const filtered = categories.filter(item => item.short == category)
    

    /* let { data, error } = await supabase
    .from('categories')
    .select("*")
    .eq('short', category)
 */
    

    return {
        journals: filtered ?? [],
        article: articles ?? [],
        id: category
    };
}) satisfies PageServerLoad;