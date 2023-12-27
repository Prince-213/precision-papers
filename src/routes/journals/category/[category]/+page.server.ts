import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';




export const load = (async ( { fetch, params, url } ) => {

    const { category } = params;
    

    let { data, error } = await supabase
    .from('categories')
    .select("*")
    .eq('short', category)

    

    return {
        journals: data ?? [],
        
    };
}) satisfies PageServerLoad;