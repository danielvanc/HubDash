"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
import { classNames } from "lib/utils";
import reposNav from "navData/repos";

export default function SubHeader() {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  let navItems: SubNavItems[] = [];

  if (pathname.includes("repos")) {
    navItems = reposNav;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-[6.5rem] lg:px-28">
      <ul className="flex gap-x-5 gap-y-10 mb-10">
        {navItems?.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={classNames(
                item.current === segment ? "text-purple-700" : "text-gray-900",
                "hover:text-gray-500"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
