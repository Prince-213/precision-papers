import { fail } from "@sveltejs/kit";

import { supabase } from "$lib/supabaseClient.js";
import { v4 as uuidv4 } from "uuid";
import { loading } from "../../store";
import emailjs from "@emailjs/browser";

export const actions = {
  initial: async ({ request, cookies, fetch }) => {
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

    function convertToRoman(num: number) {
      const romanNumerals = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];

      // Check if the input is within the valid range
      if (num < 1 || num > 12) {
        return "Number out of range (1 to 12)";
      }

      return romanNumerals[num - 1];
    }

    let chn;

    let current = new Date();

    const convertDate = (currentDate: Date) => {
      const options = { day: "numeric", month: "short", year: "numeric" };

      // Format the date using toLocaleDateString
      const formattedDate = currentDate.toLocaleDateString("en-US", options);

      let month = current.getMonth() + 1;

      let numeral = convertToRoman(month);

      let volume = `Volume 1 Issue ${numeral} - ${formattedDate}`;

      return volume;
    };

    let journal_id = uuidv4();

    let file;
    const bucket = "journals";

    let currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate);

    const sendMail = async (email: string, title: any) => {
      try {
        const response = await fetch(`/api/email-api/initial`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            title: title,
          }),
        });

        const responseData = await response.json();
        console.log(responseData);
      } catch (e) {
        console.error(e);
      }
    };

    const sendAdminMail = async (title: any, email: any, subject: any) => {
      try {
        const response = await fetch(`/api/email-api/custom`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            content: title,
            subject: subject
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
        .insert([
          {
            title: manuscripttitle,
            subject_area: subjectarea,
            main_author: mainauthorname,
            views: 0,
            volume: convertDate(current),
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

        await sendMail(`${mainauthoremail}`, manuscripttitle);

        await sendAdminMail(
          `A new manuscript has been submitted to Precision Chronicles \n Title: ${manuscripttitle}`,
          `precisionchronicles@gmail.com`, 'New Manuscript Submitted'
        );

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
