import { fail } from "@sveltejs/kit";

import { supabase } from "$lib/supabaseClient.js";
import { v4 as uuidv4 } from "uuid";
import { loading } from "../../store";
import emailjs from '@emailjs/browser'






export const actions = {
  initial: async ({ request, cookies }) => {
    const data = await request.formData();
    const manuscripttitle = data.get("manuscripttitle");
    const subjectarea = data.get("subjectarea");
    const totalauthors = data.get("totalauthors");
    const mainauthorname = data.get("mainauthor name");
    const mainauthoremail = data.get("main-author email");
    const organization = data.get("organization");
    const department = data.get("department");
    const noofpages = data.get("noofpages");
    
    const phonenumber = data.get("phonenumber");
    const country = data.get("country");
    const city = data.get("city");
    const state = data.get("state");
    const intro = data.get("intro");
    const status = data.get("personalstatus");
    const journal = data.get("publishingjournal");
    const initialmanuscript: any = data.get("initialmanuscript");

    let journal_id = uuidv4();

    console.log(data)

    let file;
    const bucket = "journals";

    
    let currentDate = new Date().toJSON().slice(0, 10);
	  console.log(currentDate); 
    
    
    const sendMail = async (authorEmail: any, title: any, created: any) => {
      try {
        
        await emailjs.send(
          'service_066spww',
          'template_a3jpj1k',
          {
            to_name: authorEmail,
            message: `I hope this message finds you well. We appreciate your contribution to the scholarly community and your recent submission to Precision Chronicles. This email is to confirm the successful receipt of your manuscript titled ${title} on ${created}. Our editorial team is currently reviewing your work, and we will keep you informed about the progress and status of the evaluation process. `
          },
          '_VUsFZj_ItEgocPVw'
        );
      } catch (error) {
        console.log(error);
      } finally {
        
      }
    };

    const sendMailToAdmin = async (title: any, created: any) => {
      try {
        
        await emailjs.send(
          'service_066spww',
          'template_a3jpj1k',
          {
            to_name: 'steverolans@gmail.com',
            message: `A new manuscript has been successfully submitted to Precision Chronicles. Title: ${title}, Date of publication: ${created} `
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
        .insert([
          {
            title: manuscripttitle,
            subject_area: subjectarea,
            main_author: mainauthorname,
            views: 0,
            volume: "Volume 1 Issue XII, Jan 2024",
            category: journal,
            address: `${city}, ${state}, ${country}`,
            intro: intro,
            total_authors: totalauthors,
            author_email: mainauthoremail,
            organisation: organization,
            department: department,
            phone_number: `${phonenumber}`,
            status: status,
            no_of_pages: noofpages,
            initial_man: `${journal_id}.pdf`,
          },
        ])
        .select();

        

      if (error) {
        return fail(404, {
          message: error.message,
          error: true,
        });
      } else {
        const { data, error } = await supabase.storage
          .from(bucket)
          .upload(`public/${journal_id}.pdf`, initialmanuscript, {
            cacheControl: "3600",
            upsert: false,
        });

        await sendMail( mainauthoremail, manuscripttitle, currentDate )

        await sendMailToAdmin( manuscripttitle, currentDate )
        
        
        return { message: "Registered Successfully!", error: false };
      }

      
    } catch (error) {
      return fail(404, {
        message: "Missing Field!",
        error: true,
      });
    } finally {

      loading.set(false);
    }
  },
};
