"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  BarChart3,
  ClipboardCheck,
  FileCheck2,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  ScrollText,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Tenders", href: "/tenders", icon: FileText },
  { name: "Bidders", href: "/bidders", icon: Users },
  { name: "Verification", href: "/verification", icon: ClipboardCheck },
  { name: "Compliance", href: "/compliance", icon: FileCheck2 },
  { name: "Risk Alerts", href: "/risk-alerts", icon: AlertTriangle },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  {
    name: "Advanced AI",
    href: "/advanced-intelligence",
    icon: Sparkles,
  },
];

const systemNavigation = [
  { name: "Audit Trail", href: "/audit-trail", icon: ScrollText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    return (
      pathname === href ||
      (href !== "/dashboard" && pathname.startsWith(`${href}/`))
    );
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const navigationContent = (
    <>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Intelligence
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all " +
                  (active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900")
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          System
        </p>

        <nav className="space-y-1">
          {systemNavigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all " +
                  (active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900")
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <a
            href="/login"
            onClick={closeMobile}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            <span>Switch Portal</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 p-4">
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-700">
            Procurement Officer
          </p>

          <p className="mt-1 text-[11px] text-slate-500">
            CPCL Evaluation Cell
          </p>

          <div className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Officer Workspace
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open officer navigation"
        className="fixed left-4 top-4 z-[120] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-[100] hidden h-screen w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        {/* Brand */}
        <div className="flex h-20 shrink-0 items-center border-b border-slate-200 px-6">
          <a href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight text-slate-900">
                TenderShield AI
              </div>

              <div className="text-[10px] font-semibold tracking-widest text-slate-400">
                OFFICER PLATFORM
              </div>
            </div>
          </a>
        </div>

        {navigationContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close officer navigation"
          onClick={closeMobile}
          className="fixed inset-0 z-[130] bg-slate-950/30 lg:hidden"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={
          "fixed left-0 top-0 z-[140] flex h-screen w-[min(82vw,20rem)] flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 lg:hidden " +
          (mobileOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        {/* Mobile brand */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 px-5">
          <a
            href="/dashboard"
            onClick={closeMobile}
            className="flex min-w-0 items-center gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-bold tracking-tight text-slate-900">
                TenderShield AI
              </div>

              <div className="text-[9px] font-semibold tracking-widest text-slate-400">
                OFFICER PLATFORM
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close navigation"
            className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {navigationContent}
      </aside>
    </>
  );
}