"use client";
import React from "react";
import { useSupabase } from "../lib/contexts/supabase";

export default function Login() {
  const { supabase } = useSupabase();

  async function signInWithGitHub() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  return <button onClick={signInWithGitHub}>Login with Github</button>;
}
