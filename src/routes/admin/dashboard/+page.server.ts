import type { PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'


import { supabase } from "$lib/supabaseClient.js";
import { v4 as uuidv4 } from "uuid";
import { goto } from '$app/navigation';


export const load = (async ({ cookies, url }) => {

    const subscribers = (await supabase.from("subscribers").select()).data

    const editors = (await supabase.from("users").select()).data

    const manuscript = (await supabase.from("journals").select()).data

    if (!cookies.get("status")) {
        throw redirect(307, `/admin/login?redirectTo=${url.pathname}`)
    }
    return {
        editors: editors?.length,
        subscribers: subscribers?.length,
        manuscript: manuscript?.length
    };
}) satisfies PageServerLoad;

export const actions = {
    logout: async ({ request, cookies, url }) => {
        
        console.log('fired')

        
        
        cookies.set("status", "", {
            httpOnly: true,
            path: '/',
            maxAge: 0
        })

        
    },
};
