import type { PageServerLoad } from './$types';

type search = {
    id: number,
    title: string,
    subject_area: string,
    date: string,
    main_author: string,
    views: number,
    volume: string,
    journal_id: number,
    journal_category: string,
    address: string
    intro: string
}


export const load = (async ( { fetch, params, url } ) => {

    const { searchId } = params;

    console.log(url.pathname)

    const res = await fetch(`http://localhost:4000/searched-journals`);
    const searchJournals: search[] = await res.json();
    const filteredJournals = searchJournals.filter( ( item: search ) => item.journal_id == parseInt(searchId) )

    return {
        journals: filteredJournals,
        key: searchId
    };
}) satisfies PageServerLoad;