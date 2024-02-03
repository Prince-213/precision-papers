import type { RequestHandler } from './$types';



import { Email }  from '$lib/smtp' 


import { json } from "@sveltejs/kit";

import nodeMailer from 'nodemailer';



type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}

export const GET: RequestHandler = async (requestEvent) => {
    const { params } = requestEvent
    const email = params['emailkey']
    const title = params['title']
    const link = params['link']

    const html = `
    <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

    <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

        <h1 style="color: #333;">Your Manuscript Has Been Published!</h1>

        

        <p style="color: #666;">We are delighted to inform you that your manuscript titled "${title}" has been successfully published on our platform. Congratulations!</p>

        <p style="color: #666;">You can access your published manuscript by clicking on the following link:</p>

        <a href={${link}} style="color: #4caf50; text-decoration: none;">View Published Manuscript</a>

        <p style="color: #666;">Feel free to share this link with your colleagues and peers. We appreciate your valuable contribution to our platform.</p>

        <p style="color: #666;">If you have any questions or require further assistance, please contact us at <a href="mailto:precisionchronicles@gmail.com" style="color: #4caf50; text-decoration: none;">precisionchronicles@gmail.com</a>.</p>

        <p style="color: #666;">Thank you for choosing our platform for publishing your work.</p>

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
            pass: 'rcinxergssvykcyz'
        }
    })
    
    const info = await transporter.sendMail({
        from: 'precisionchronicles@gmail.com',
        to: `${email}`,
        subject: 'Manuscript Published',
        html: html
    })

    
    
    
    
    return json({info});
};