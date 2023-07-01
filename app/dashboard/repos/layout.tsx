import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ReposLayout({ children }: Props) {
  return <>{children}</>;
}
