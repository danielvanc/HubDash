import "server-only";
import * as React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Login from "@/components/Login";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CONFIG from "lib/config.json";

export default async function Homepage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("session", session);
  if (session) return redirect(CONFIG.LOGGED_IN);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl">Welcome</h1>
      <Login />
    </div>
  );
}
