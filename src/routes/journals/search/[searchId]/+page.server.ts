import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

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
}


export const load = (async ( { fetch, params, url } ) => {

    const { searchId } = params;

    let { data, error } = await supabase
    .from('journals')
    .select("*")
    .eq('category', searchId)
    .eq('state', 'published')

    let title = (await supabase
    .from('categories')
    .select("*")
    .eq('short', searchId)
    
    ).data

    



    return {
        journals: data ?? [],
        key: searchId,
        title: title[0].title ?? ''
    };
}) satisfies PageServerLoad;