import React from "react";
import SubHeader from "@/components/admin/UI/SubHeader";

export default function ReposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubHeader />
      {children}
    </>
  );
}
