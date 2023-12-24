import type { PageServerLoad } from './$types';

type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}


export const load = (async ( { fetch, params, url } ) => {

    const { category } = params;

    console.log(url.pathname)

    const res = await fetch(`/api/journals-api/${category}`);
    const journals: journal = await res.json();
    

    return {
        journals: journals
    };
}) satisfies PageServerLoad;