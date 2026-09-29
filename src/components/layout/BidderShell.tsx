"use client";

import { ReactNode } from "react";
import BidderSidebar from "./BidderSidebar";

export default function BidderShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <BidderSidebar />

      <main className="min-h-screen lg:pl-64">
        {children}
      </main>
    </div>
  );
}