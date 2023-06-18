import React from "react";
import SubHeader from "@/components/admin/UI/SubHeader";

interface Props {
  latest: React.ReactNode;
  updates: React.ReactNode;
}

export default function layout({ latest, updates }: Props) {
  return (
    <>
      <SubHeader />
      <div className="flex container justify-between">
        <main>{latest}</main>
        <aside>{updates}</aside>
      </div>
    </>
  );
}
