import type { RequestHandler } from './$types';
import { json } from "@sveltejs/kit";

import { journals } from '$lib/data/journals'

type journal = {
    id: number,
    title: string,
    poster: string,
    intro: string,
    description: string[]
}

export const GET: RequestHandler = async (requestEvent) => {
    const { params } = requestEvent
    const { journalId } = params
    const journal = journals.find(
        (journal) => journal.id === parseInt(journalId)
    )
    
    return json(journal);
};