"use client";
import React from "react";
import { createClient } from "lib/supabase/client";

export default function Login() {
  const supabase = createClient();

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return (
    <div className="p-10 text-center">
      <button onClick={signInWithGitHub}>Login with Github</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
