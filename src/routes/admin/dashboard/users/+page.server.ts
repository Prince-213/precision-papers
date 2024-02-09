
import { supabase } from '$lib/supabaseClient.js'





export const load = async ({  }) => {


    const data = (await supabase.from("users").select("*")).data

    const auths = (await supabase.from("journals").select("*")).data

    

    return {
        subscribers: data ?? [],
        authors: auths ?? []
    };
}