"use client";

import { ReactNode, createContext, useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppShellContext = createContext(false);

export default function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  const shellAlreadyActive = useContext(AppShellContext);

  // Some existing pages already contain AppShell.
  // If the global shell is already wrapping the page,
  // don't render a second sidebar/header.
  if (shellAlreadyActive) {
    return <>{children}</>;
  }

  return (
    <AppShellContext.Provider value={true}>
      <div className="relative min-h-screen bg-slate-50">
        <Sidebar />

        <main className="relative min-h-screen lg:pl-64">
          <Header />

          <div className="p-5 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </AppShellContext.Provider>
  );
}