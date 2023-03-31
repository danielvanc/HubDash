import Link from "next/link";

export default function DashboardIndex() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-[6.5rem] lg:px-28">
        <ul className="flex gap-x-5 gap-y-10 mb-10">
          <li>
            <Link href="/dashboard">Item 1</Link>
          </li>
          <li>
            <Link href="/dashboard">Item 2</Link>
          </li>
          <li>
            <Link href="/dashboard">Item 3</Link>
          </li>
          <li>
            <Link href="/dashboard">Item 4</Link>
          </li>
          <li>
            <Link href="/dashboard">Item 5</Link>
          </li>
        </ul>
        <h1>Dashboard page</h1>
      </div>
    </main>
  );
}
