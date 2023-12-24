import type { RequestHandler } from "./$types";


import { json } from "@sveltejs/kit";

import { journals } from '$lib/data/journals'




export const GET: RequestHandler = async () => {
  return json(journals);
};
