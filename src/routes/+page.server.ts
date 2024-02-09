import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './auth/$types' 

export const load = (async () => {


    
    const { data, error } = await supabase
    .from('journals')
    .select('*')
    .eq('state', 'published')

    console.log(data)


        
    return {

        blog: data ?? []
    };
}) satisfies PageServerLoad;

