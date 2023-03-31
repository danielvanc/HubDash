import { createClient } from "lib/supabase/server";

export async function checkSession() {
  const supabase = createClient();
  return await supabase.auth.getSession();
}

export async function getSession() {
  return await (
    await checkSession()
  ).data.session;
}

export async function hasSession() {
  const session = await getSession();

  return session?.access_token;
}
