"use client";

import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, Search } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 lg:px-8">
      <div className="flex items-center gap-4">
        {pathname !== "/dashboard" && (
          <a
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden font-medium text-sm sm:inline">Back to Dashboard</span>
          </a>
        )}
        <div>
          <p className="text-xs font-medium text-slate-500">
            Procurement Intelligence Platform
          </p>

          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            TenderShield AI
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="hidden rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 md:block"
        >
          <Search className="h-4 w-4" />
        </button>

        <div className="hidden rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold text-amber-700 sm:block">
          DEMO · SYNTHETIC DATA
        </div>

        <button
          type="button"
          className="relative rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
        >
          <Bell className="h-4 w-4" />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
          PO
        </div>
      </div>
    </header>
  );
}