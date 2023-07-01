import { delay } from "@/lib/delay";
import React from "react";

export default async function UpdatesPage() {
  await delay(2000);
  // Load in the data from a shared func, same as page.tsx
  return <div>Updates page</div>;
}
