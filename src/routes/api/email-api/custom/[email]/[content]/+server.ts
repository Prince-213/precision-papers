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
    const email  = params['email']
    const content = params['content']

    const html = `
        <h1>A New Message from Precision Chronicles</h1>
        <p>${content}</p>
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
        subject: 'Update from Precision Chronicles',
        html: html
    })

    console.log('Message sent: ' + info.messageId)
    
    
    
    return json({info});
};