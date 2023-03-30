import "server-only";
import "./tailwind.css";
import SupabaseProvider from "lib/contexts/supabase";
import SupaWatcher from "lib/supabase/watcher";
import { getSession } from "lib/auth/supabase";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

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
