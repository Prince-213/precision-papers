import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'


import { supabase } from "$lib/supabaseClient.js";
import { v4 as uuidv4 } from "uuid";


export const actions = {
    login: async ({ request, cookies, url }) => {
        const data = await request.formData();

        const name = data.get("name")
        const pass = data.get("password")

        console.log(data)

        if (name == 'dog' && pass == 'dog') {
            cookies.set("status", 'admin', {path: '/'})
            return { message: "Access Grandted", error: false }
            throw redirect(303, url.searchParams.get('redirectTo') || '/')
            
        }else {
            //cookies.delete("status")
            return fail(404, { message: "Access Denied", error: true })
        }

        let file;
        const bucket = "journals";

        
    },
};
