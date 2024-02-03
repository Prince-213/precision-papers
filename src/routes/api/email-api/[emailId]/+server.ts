
import { Email }  from '$lib/smtp' 

import type { RequestHandler } from './$types';
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
    const { emailId } = params

    const html = `
        <h1>A New Update in Precision Chronicles</h1>
        <p>${emailId}</p>
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
        to: 'steverolans@gmail.com',
        subject: 'Precision Chronicles Update',
        html: html
    })

    console.log('Message sent: ' + info.messageId)
    
    
    
    return json({info});
};