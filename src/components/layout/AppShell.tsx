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

  if (shellAlreadyActive) {
    return <>{children}</>;
  }

  return (
    <AppShellContext.Provider value={true}>
      <div className="relative min-h-screen bg-slate-50">
        <Sidebar />

        <main className="relative min-h-screen lg:pl-64">
          <Header />

          <div className="p-4 pt-16 sm:p-5 sm:pt-16 lg:p-8 lg:pt-8">
            {children}
          </div>
        </main>
      </div>
    </AppShellContext.Provider>
  );
}