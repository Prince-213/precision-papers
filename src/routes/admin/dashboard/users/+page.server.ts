import { journals } from '$lib/data/journals.js';
import { supabase } from '$lib/supabaseClient.js'





export const load = async ({ fetch }) => {


    let data = (await supabase.from("users").select()).data

    let auths = (await supabase.from("journals").select()).data

    

    return {
        subscribers: data ?? [],
        authors: auths ?? []
    };
}