import type { LayoutServerLoad } from './$types';

type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}[]

export const load = (async ( { fetch } ) => {

    const res = await fetch('/api/journals-api');
    const journals: journal = await res.json();
    

    return {
        journals: journals
    };
}) satisfies LayoutServerLoad;