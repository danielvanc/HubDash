import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CONFIG from "lib/config.json";
import "@/app/tailwind.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) return redirect(CONFIG.LOGGED_IN);

  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
