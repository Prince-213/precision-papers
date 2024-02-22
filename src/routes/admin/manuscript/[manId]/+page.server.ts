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
    update: async ({ request, cookies, fetch }) => {
        const data = await request.formData();
        const manuscripttitle = data.get("manuscripttitle");
        const subjectarea = data.get("subjectarea");
        const totalauthors = data.get("totalauthors");
        const mainauthorname = data.get("allauthorname");
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

        function convertToRoman(num: number) {
            const romanNumerals = [
              'I',
              'II',
              'III',
              'IV',
              'V',
              'VI',
              'VII',
              'VIII',
              'IX',
              'X',
              'XI',
              'XII'
            ];
        
            // Check if the input is within the valid range
            if (num < 1 || num > 12) {
              return 'Number out of range (1 to 12)';
            }
        
            return romanNumerals[num - 1];
        }
    
        let chn;
        
        let current = new Date();

        const convertDate = (currentDate: Date) => {
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
        
            // Format the date using toLocaleDateString
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
        
            let month = current.getMonth() + 1
        
            let numeral = convertToRoman(month)
        
            let volume = `Volume 1 Issue ${numeral} - ${formattedDate}`
        
            return volume;
        };

    

        const sendPublishedMail = async ( email: string,  title: any, link: any ) => {
            try {
                const response = await fetch(`/api/email-api/publish`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email: email,
                    title: title,
                    link: link
                    }),
                });
        
                const responseData = await response.json();
                console.log(responseData);
            } catch (e) {
                console.error(e);
            }
        };

        const sendReviewMail = async ( email: string,  title: any, id: any ) => {
            try {
                const response = await fetch(`/api/email-api/review`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email: email,
                    title: title,
                    id: id
                    }),
                });
        
                const responseData = await response.json();
                console.log(responseData);
            } catch (e) {
                console.error(e);
            }
        };
    

        try {
            const { data, error } = await supabase
            .from("journals")
            .update([
                {
                title: manuscripttitle,
                subject_area: subjectarea,
                volume: convertDate(current),
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
                main_author: mainauthorname
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
                        sendPublishedMail(`${mainauthoremail}`, manuscripttitle, `/journals/search/${journal}/paper/${journalid}`)
                    } else {
                        sendReviewMail(`{mainauthoremail}`, manuscripttitle, journalid)
                    }

                    
    
                    return { message: "Updated Successfully and File Upadated! also the Email Alert has been sent", error: false };
                } else if (!updateFile && alert) {
                

                    if ( manstatus == 'published' ) {
                        sendPublishedMail(`${mainauthoremail}`, manuscripttitle, `/journals/search/${journal}/paper/${journalid}`)
                    } else {
                        sendReviewMail(`${mainauthoremail}`, manuscripttitle, journalid)
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
