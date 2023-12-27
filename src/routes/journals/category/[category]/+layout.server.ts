import { supabase } from '$lib/supabaseClient';
import type { LayoutServerLoad } from './$types';

type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}[]

export const load = (async ( { fetch } ) => {

    const res = await fetch('/api/journals-api');
    const journals: journal = await res.json();
    
    let { data, error } = await supabase
    .from('categories')
    .select('*')

    return {
        journals: journals,
        updated: data?? []
    };
}) satisfies LayoutServerLoad;