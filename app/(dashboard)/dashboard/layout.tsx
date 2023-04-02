import "server-only";
import { redirect } from "next/navigation";
import SupabaseProvider from "lib/contexts/supabase";
import { getSession } from "lib/auth/supabase";
import CONFIG from "lib/config.json";
import "@/app/tailwind.css";
import Header from "@/components/admin/UI/Header";

export const revalidate = 120;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.access_token) redirect(CONFIG.LOGGED_OUT);

  return (
    <html lang="en">
      <body>
        <SupabaseProvider serverAccessToken={session?.access_token}>
          <div className="min-h-full">
            <Header />
            {children}
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
