"use client";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import * as React from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

type SupabaseContext = {
  supabase: SupabaseClient;
};

const Context = React.createContext<SupabaseContext | undefined>(undefined);

export default function SupaProvider({
  serverAccessToken,
  children,
}: {
  serverAccessToken?: string;
  children: React.ReactNode;
}) {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, router, supabase]);

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export function useSupabase() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
}
