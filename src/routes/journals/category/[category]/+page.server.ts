import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';




export const load = (async ( { fetch, params, url } ) => {

    const { category } = params;

    

    let articles = (await supabase
    .from('journals')
    .select("*")
    .eq('category', category)
    .eq('state', 'published')).data
    

    let { data, error } = await supabase
    .from('categories')
    .select("*")
    .eq('short', category)

    

    return {
        journals: data ?? [],
        article: articles ?? [],
        id: category
    };
}) satisfies PageServerLoad;