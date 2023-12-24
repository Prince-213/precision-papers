import type { PageServerLoad } from './$types';


type journals = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}[]

export const load = (async ( { fetch } ) => {

    const res = await fetch('/api/journals-api');
    const journals: journals = await res.json();
    

    return {
        journals: journals
    };
}) satisfies PageServerLoad;