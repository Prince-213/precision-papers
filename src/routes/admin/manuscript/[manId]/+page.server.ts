import type { PageServerLoad } from './$types';
import { supabase } from "$lib/supabaseClient"
import { journals } from '../../../../lib/data/journals';
import { fail } from '@sveltejs/kit';
import { v4 as uuidv4 } from "uuid";

type search = {
    id: number,
    title: string,
    subject_area: string,
    date: string,
    main_author: string,
    views: number,
    volume: string,
    journal_id: number,
    journal_category: string,
    address: string
    intro: string
}


export const load = (async ( { fetch, params, url } ) => {

    const { manId } = params;
    


    const editor = (await supabase
    .from('users')
    .select("*")
    .eq('verified', true)).data

    const journal = (await supabase
        .from('journals')
        .select("*")
        .eq('journal_id', manId)).data


    const res = await fetch(`http://localhost:4000/searched-journals`);
    const searchJournals: search[] = await res.json();
    const filteredJournals = searchJournals.find( ( item: search ) => item.id == parseInt(manId) )



    return {
        journals: journal ?? [],
        key: manId,
        editors: editor
    };
}) satisfies PageServerLoad;

export const actions = {
    update: async ({ request, cookies }) => {
        const data = await request.formData();
        const manuscripttitle = data.get("manuscripttitle");
        const subjectarea = data.get("subjectarea");
        const totalauthors = data.get("totalauthors");
        const mainauthorname = data.get("mainauthor name");
        const mainauthoremail = data.get("main-author email");
        const organization = data.get("organization");
        const department = data.get("department");
        const noofpages = data.get("noof pages");
        const code = data.get("code");
        const phonenumber = data.get("phonenumber");
        const country = data.get("country");
        const city = data.get("city");
        const state = data.get("state");
        const intro = data.get("intro");
        const status = data.get("personalstatus");
        const journal = data.get("publishingjournal");
        const initialmanuscript: any = data.get("initialmanuscript");
        const journalid = data.get("journalid")
        const former = data.get("formermanuscript");


        console.log(data)  
        let file;
        const bucket = "journals";

    

        try {
            const { data, error } = await supabase
            .from("journals")
            .update([
                {
                title: manuscripttitle,
                subject_area: subjectarea,
               
                views: 0,
                volume: "Volume 2 Issue XII, Dec 2023",
                category: journal,
                address: `${city}, ${state}, ${country}`,
                intro: intro,
                total_authors: totalauthors,
                author_email: mainauthoremail,
                organisation: organization,
                department: department,
                phone_number: `${code}${phonenumber}`,

                no_of_pages: noofpages,
                initial_man: former,
                },
            ])
            .eq('journal_id', journalid)
            .select();

            if (error) {
                return fail(404, {
                    message: error.message,
                    error: true,
                });
            } else {
                const { data, error } = await supabase.storage
                    .from(bucket)
                    .update(`public/${former}`, initialmanuscript, {
                    cacheControl: "3600",
                    upsert: false,
                    });

                if (error) {
                    return fail(404, {
                        message: error.message,
                        error: true,
                    });
                }

                return { message: "Registered Successfully!", error: false };
            }


        } catch (error) {
            return fail(404, {
            message: "Missing Field!",
            error: true,
            });
        } finally {
        
        }
    },
};
