import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, url }) => {
    if (!cookies.get("status")) {
        throw redirect(307, `/admin/login?redirectTo=${url.pathname}`)
    }
    return {};
}) satisfies LayoutServerLoad;

