import "server-only";
import "@/app/tailwind.css";
import SupabaseProvider from "lib/contexts/supabase";
import { redirect } from "next/navigation";
import { hasSession } from "lib/auth/supabase";
import CONFIG from "lib/config.json";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (await hasSession()) redirect(CONFIG.LOGGED_IN);

  return (
    <html lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
