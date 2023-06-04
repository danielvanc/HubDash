import "server-only";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { UserMetadata } from "@supabase/gotrue-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CONFIG from "lib/config.json";
import Header from "@/components/admin/UI/Header";
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

  if (!session) redirect(CONFIG.LOGGED_OUT);

  const user = session?.user?.user_metadata as UserMetadata;

  return (
    <html lang="en">
      <body>
        <div className="min-h-full">
          <Header user={user} />
          {children}
        </div>
      </body>
    </html>
  );
}
