import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative min-h-screen lg:pl-64">
        <Header />

        <div className="p-5 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}