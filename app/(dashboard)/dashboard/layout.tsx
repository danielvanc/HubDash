import "server-only";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { UserMetadata } from "@supabase/supabase-js";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import CONFIG from "lib/config.json";
import Header from "@/components/admin/UI/Header";
import "@/app/tailwind.css";
import { revalidatePath } from "next/cache";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user: user },
  } = await supabase.auth.getUser();

  if (!user) redirect(CONFIG.LOGGED_OUT);

  const signOut = async () => {
    "use server";
    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signOut();

    revalidatePath("/");
  };

  return (
    <html lang="en">
      <body>
        <div className="min-h-full">
          <Header
            user={user?.user_metadata as UserMetadata}
            signOut={signOut}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
