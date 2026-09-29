"use client";

import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  LogOut,
  Search,
  UserRound,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 lg:px-8">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {pathname !== "/dashboard" && (
          <a
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            title="Back to Dashboard"
          >
            <ArrowLeft className="h-4 w-4" />

            <span className="hidden text-sm font-medium sm:inline">
              Back to Dashboard
            </span>
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

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <button
          type="button"
          className="hidden rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50 md:block"
          title="Search"
        >
          <Search className="h-4 w-4" />
        </button>

        {/* Demo Badge */}
        <div className="hidden rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-semibold text-amber-700 sm:block">
          DEMO · SYNTHETIC DATA
        </div>

        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        {/* Officer Profile */}
        <div className="group relative">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white transition hover:bg-slate-700"
            title="Officer Profile"
          >
            PO
          </button>

          {/* Profile Menu */}
          <div className="invisible absolute right-0 top-11 w-56 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="border-b border-slate-100 px-3 py-2">
              <p className="text-sm font-semibold text-slate-900">
                Procurement Officer
              </p>

              <p className="mt-0.5 text-[11px] text-slate-500">
                CPCL Evaluation Cell
              </p>
            </div>

            <a
              href="/settings"
              className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <UserRound className="h-4 w-4" />
              Officer Settings
            </a>

            <a
              href="/login"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <LogOut className="h-4 w-4" />
              Switch Portal
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}