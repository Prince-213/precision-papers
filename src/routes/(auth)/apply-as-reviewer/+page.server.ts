import { fail } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient.js";

export const actions = {
    register: async ({ request, cookies }) => {
        const data: any = await request.formData();

        const firstName = data.get("firstname");
        const lastName = data.get("lastname");
        const email = data.get("email")
        const password = data.get("password")


        try {
            const { data, error } = await supabase.auth.signUp(
                {
                    email: email,
                    password: password,
                    options: {
                        data: {
                            first_name: firstName,
                            last_name: lastName,
                            status: 'editor',
                            verified: false,
                            name: email,
                            value: email
                        }
                    }
                }
                )
            
            if (!error) {

                return { message: "Registered Successfully", error: false }
            }else {
                
                return fail(404, {
                    message: "Invalid Registration!",
                    status: 404,
                    error: true,
                    
                });
            }
        } catch (error) {
            
            return fail(404, {
                message: "Invalid Registration!",
                status: 404,
                error: true,
                
            });
        }

        

        
    },
};
