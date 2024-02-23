
import { supabase } from '$lib/supabaseClient.js'





export const load = async ({  }) => {


    //const data = (await supabase.from("users").select("*")).data

    const { data } = await supabase.from("journals").select("*")


    return {
        authors: data ?? []
    };
}