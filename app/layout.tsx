import "server-only";
import "@/tailwind.css";
import { createClient } from "lib/supabase/server";
import SupabaseProvider from "../components/providers/supabase";
import SupaWatcher from "lib/supabase/watcher";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log("session", session);
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <SupaWatcher serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
