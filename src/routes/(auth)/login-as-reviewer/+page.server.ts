import { fail } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient.js";

export const actions = {
    login: async ({ request, cookies }) => {
        const data: any = await request.formData();

       
        const email = data.get("email")
        const password = data.get("password")

        console.log(data);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (!error) {
                return { message: "Successful", error: false }
            } else {
                return fail(404, {
                    message: "Invalid Registration!",
                    status: 404,
                    error: true,
                    
                });
            }
        } catch (error) {
            console.log(error)
            return fail(404, {
                message: "Invalid Registration!",
                status: 404,
                error: true,
                
            });
        }

        

        
    },
};
