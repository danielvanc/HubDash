import "server-only";
import * as React from "react";
import Login from "@/components/Login";
import { getSession } from "lib/auth/supabase";

export const revalidate = 0;

export default async function Home() {
  const session = await getSession();

  if (session?.access_token) {
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl">Welcome</h1>
      <Login />
    </div>
  );
}
