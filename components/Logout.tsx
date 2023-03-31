"use client";
import { useSupabase } from "../lib/contexts/supabase";

export default function Logout() {
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return <button onClick={handleLogout}>Logout</button>;
}
