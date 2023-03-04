"use client";
import React from "react";
import { createClient } from "lib/supabase/client";

export default function Login() {
  const supabase = createClient();

  async function SignUp() {
    await supabase.auth.signUp({});
  }
  async function SignIn() {
    await supabase.auth.signInWithPassword({});
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="p-10 text-center">
      <button onClick={SignIn}>Email Login</button>
      <button onClick={SignUp}>Email Signup</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
