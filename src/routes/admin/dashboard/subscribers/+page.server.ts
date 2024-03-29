import { journals } from "$lib/data/journals.js";
import { supabase } from "$lib/supabaseClient.js";

export const load = async ({ fetch }) => {
  const { data, error } = await supabase.from("subscribers").select("*");

  return {
    subscribers: data ?? [],
  };
};
