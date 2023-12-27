import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}


export const load = (async ( { fetch, params, url } ) => {

    const { category } = params;
    

    let { data, error } = await supabase
    .from('categories')
    .select("*")
    .eq('short', category)

    console.log(data)

    return {
        journals: data ?? [],
        
    };
}) satisfies PageServerLoad;