import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

type single = {
    id: number;
    created_at: string;
    title: string;
    subject_area: string;
    views: number;
    date: string,
    main_author: string,
    verified: boolean;
    total_authors: string;
    author_email: string;
    organisation: string;
    department: string;
    phone_number: string;
    status: string;
    no_of_pages: string;
    initial_man: string;
    author_declaration: any;
    state: string;
    enabled: boolean;
    role: string;
    volume: string,
    journal_id: string;
    category: number,
    address: string
    intro: string
}[]


export const load = (async ( { fetch, params, url } ) => {

    const { paperId } = params;
    



    const journal = (await supabase
        .from('journals')
        .select("*")
        .eq('journal_id', paperId)).data


  


    return {
        journals: journal ?? [],
        key: paperId,
        
    };
}) satisfies PageServerLoad;