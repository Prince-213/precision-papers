import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { paperId } = params;

	const journal = (await supabase.from('journals').select('*').eq('journal_id', paperId)).data;

	try {
		const { data } = await supabase.rpc('increment', {
			row_id: `${paperId}`
		});
		if (data) {
			console.log('added vies');
		}
	} catch (error) {
		console.log(error);
	}

	return {
		journals: journal ?? [],
		key: paperId
	};
}) satisfies PageServerLoad;

export const ssr = true;
