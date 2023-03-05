import { createClient } from "lib/supabase/server";

async function checkSession() {
  const supabase = createClient();
  return await supabase.auth.getSession();
}

export async function getSession() {
  return await (
    await checkSession()
  ).data.session;
}
