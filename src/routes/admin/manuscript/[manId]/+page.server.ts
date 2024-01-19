import type { PageServerLoad } from './$types';
import { supabase } from "$lib/supabaseClient"
import { journals } from '../../../../lib/data/journals';
import { fail } from '@sveltejs/kit';
import { v4 as uuidv4 } from "uuid";

import emailjs from '@emailjs/browser'

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


    //const res = await fetch(`http://localhost:4000/searched-journals`);
    //const searchJournals: search[] = await res.json();
   



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
        const noofpages = data.get("noofpages");
        const code = data.get("code");
        const phonenumber = data.get("phonenumber");
        const country = data.get("address");
        
        const intro = data.get("intro");
        const status = data.get("personalstatus");
        const journal = data.get("publishingjournal");
        const initialmanuscript: any = data.get("initialmanuscript");
        const journalid = data.get("journalid")
        const former = data.get("formermanuscript");
        const manstatus = data.get("manstatus")
        const alert = data.get("sendalert")
        const updateFile = data.get('updateFile')


        console.log(data)  
        let file;
        const bucket = "journals";

        const sendPublishedCongrats = async (authorEmail: any, title: any) => {
            try {
            
            await emailjs.send(
                'service_066spww',
                'template_a3jpj1k',
                {
                to_name: authorEmail,
                message: `We trust this message finds you well. We are pleased to inform you that your manuscript titled "${title}" has been successfully submitted to Precision Chronicles. Thank you for choosing us as the platform to showcase your valuable research.`
                },
                '_VUsFZj_ItEgocPVw'
            );
            } catch (error) {
            console.log(error);
            } finally {
            
            }
        };

        const sendMail = async (authorEmail: any, title: any, id: any) => {
            try {
            
            await emailjs.send(
                'service_066spww',
                'template_a3jpj1k',
                {
                to_name: authorEmail,
                message: `We hope this email finds you well. We wanted to inform you that your manuscript titled "${title}" has entered the review process at Precision Chronicles. Our editorial team is dedicated to conducting a thorough evaluation of your work Your Manuscript ID is ${id}.

                Here are some key points about the review process: \n The review process typically takes 2 weeks to complete. \n
                We will keep you informed about the progress of the review and notify you once the evaluation is finalized. `
                },
                '_VUsFZj_ItEgocPVw'
            );
            } catch (error) {
            console.log(error);
            } finally {
            
            }
        };

    

        try {
            const { data, error } = await supabase
            .from("journals")
            .update([
                {
                title: manuscripttitle,
                subject_area: subjectarea,
                volume: "Volume 1 Issue XII, Jan 2024",
                category: journal,
                address: country,
                intro: intro,
                total_authors: totalauthors,
                author_email: mainauthoremail,
                organisation: organization,
                department: department,
                phone_number: `${phonenumber}`,
                state: manstatus,
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
                if ( updateFile && !alert ) {
                
                    const { data, error } = await supabase
                            .storage
                        .from('journals')
                        .update(`public/${former}`, initialmanuscript, {
                            cacheControl: '3600',
                            upsert: true
                        })
    
                    if (error) {
                        console.log(error);
                        
                        return fail(404, {
                            message: `storage ${error.message} ${former}`,
                            error: true,
                        });
                    }
    
                    return { message: "Updated Successfully and File Upadated!", error: false };
                } else if (updateFile && alert) {
                    const { data, error } = await supabase
                            .storage
                        .from('journals')
                        .update(`public/${former}`, initialmanuscript, {
                            cacheControl: '3600',
                            upsert: true
                        })
    
                    if (error) {
                        console.log(error);
                        
                        return fail(404, {
                            message: `storage ${error.message} ${former}`,
                            error: true,
                        });
                    }

                    if ( manstatus == 'published' ) {
                        sendPublishedCongrats(mainauthoremail, manuscripttitle)
                    } else {
                        sendMail(mainauthoremail, manuscripttitle, journalid)
                    }

                    
    
                    return { message: "Updated Successfully and File Upadated! also the Email Alert has been sent", error: false };
                } else if (!updateFile && alert) {
                

                    if ( manstatus == 'published' ) {
                        sendPublishedCongrats(mainauthoremail, manuscripttitle)
                    } else {
                        sendMail(mainauthoremail, manuscripttitle, journalid)
                    }
    
                    return { message: "Updated Successfully! Also the Email Alert has been sent", error: false };
                }

            

                return { message: "Updated Successfully!", error: false };
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
