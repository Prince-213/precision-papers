
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

    let { email, content, subject } = await request.json();

    const html = `
    <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

        <h1 style="color: #333;">${subject}!</h1>

        <p style="color: #666;">${content} </p>
        

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
        subject: `${subject}`,
        html: html
    })
    
    return json(info, {status: 200});
};