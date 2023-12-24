import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

type form = {
    manuscripttitle: string;
    subjectarea: string;
    totalauthors: string;
    mainauthorname: string;
    mainauthoremail: string;
    organization: string;
    department: string;
    noofpages: string;
    code: string;
    phonenumber: string;
    country: string;
    city: string;
    state: string;
    status: string;
    initialmanuscript: string;
};

export const GET: RequestHandler = async () => {
    return new Response();
};

export const POST: RequestHandler = async ({ request, cookies }) => {
    const data: form = await request.json();

    const {
        manuscripttitle,
        subjectarea,
        totalauthors,
        mainauthorname,
        mainauthoremail,
        organization,
        department,
        noofpages,
        code,
        phonenumber,
        country,
        city,
        state,
        status,
        initialmanuscript
    } = data;
    
    

    
    return json({ message: 'Registerd successfully' });
};