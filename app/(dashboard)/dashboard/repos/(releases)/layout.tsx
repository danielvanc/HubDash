import React, { Suspense } from "react";
import SubHeader from "@/components/admin/UI/SubHeader";

// TODO: Replace the below Suspsenses with NextJS's loading when provide  support for loading.tsx within @folders

export default async function ReposLayout({
  updates,
  releases,
}: {
  releases: React.ReactNode;
  updates: React.ReactNode;
}) {
  return (
    <>
      <SubHeader />
      <div className="flex container justify-between">
        <main className="container">{releases}</main>
        <aside>{updates}</aside>
      </div>
    </>
  );
}
