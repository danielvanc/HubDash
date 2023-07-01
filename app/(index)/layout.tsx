import "server-only";
import "@/app/tailwind.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
