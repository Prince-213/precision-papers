import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async () => {


    
    let { data, error } = await supabase
    .from('journals')
    .select('*')
    .range(0, 3)

    
        
    return {

        blog: data ?? []
    };
}) satisfies PageServerLoad;

export const prerender = true;