import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
// import type { Database } from "../lib/database.types";

// const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareSupabaseClient({ req, res });

  await supabase.auth.getSession();

  return res;
}
