import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './auth/$types';

export const load = (async () => {
	const { data, error } = await supabase.from('journals').select('*').eq('state', 'published');

	data?.sort((a, b) => {
		return new Date(b.created_at) - new Date(a.created_at);
	});

	let latest = data?.slice(0, 3);

	//console.log(data)

	console.log(latest);

	return {
		blog: latest ?? []
	};
}) satisfies PageServerLoad;
