
import { Email }  from '$lib/smtp' 

import type { RequestHandler } from '../$types';
import { json } from "@sveltejs/kit";

import nodeMailer from 'nodemailer';



type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}

export const POST: RequestHandler = async (requestEvent) => {

    const { request } = requestEvent;

    let { email, title } = await request.json();

    const html = `
    <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

        <h1 style="color: #333;">Congratulations!</h1>

        <p style="color: #666;">Your manuscript has been submitted successfully. </p>
        <p style="color: #666;">Title: ${title}. </p>
        <p style="color: #666;">Thank you for choosing Precision Chronicles to share your work with us.</p>
        <p style="color: #666;">We appreciate your contribution, and our team will review your submission shortly.</p>

        <p style="color: #666;">If you have any questions or concerns, feel free to contact us at <a href="mailto:precisionchronicles@gmail.com" style="color: #4caf50; text-decoration: none;">precisionchronicles@gmail.com</a>.</p>

        <a href="www.precisionchronicles.com" style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #4caf50; color: #fff; text-decoration: none; border-radius: 3px;">View Submission Details</a>

        <p style="color: #666;">Best regards,<br>Precision Chronicles</p>

    </div>
    </body>
    `
    

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'precisionchronicles@gmail.com',
            pass: 'resjalnexerzehpc'
        }
    })
    
    const info = await transporter.sendMail({
        from: 'precisionchronicles@gmail.com',
        to: `${email}`,
        subject: 'Manuscript Submission',
        html: html
    })
    
    return json(info, {status: 200});
};