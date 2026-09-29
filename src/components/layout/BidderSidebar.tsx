"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  User,
  WalletCards,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/bidder",
    icon: LayoutDashboard,
  },
  {
    name: "My Bids",
    href: "/bidder/bids",
    icon: WalletCards,
  },
  {
    name: "My Documents",
    href: "/bidder/documents",
    icon: FileText,
  },
  {
    name: "Compliance",
    href: "/bidder/compliance",
    icon: ClipboardCheck,
  },
  {
    name: "Notifications",
    href: "/bidder/notifications",
    icon: Bell,
  },
  {
    name: "Profile",
    href: "/bidder/profile",
    icon: User,
  },
];

export default function BidderSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    return (
      pathname === href ||
      (href !== "/bidder" && pathname.startsWith(`${href}/`))
    );
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const navigationContent = (
    <>
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition " +
                  (active
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")
                }
              >
                <Icon
                  className={
                    "h-[18px] w-[18px] shrink-0 " +
                    (active
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-900")
                  }
                  strokeWidth={1.8}
                />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-slate-200 p-3">
        <Link
          href="/login"
          onClick={closeMobile}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <LogOut
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />

          <span>Switch Portal</span>
        </Link>

        <div className="mt-3 rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
              AI
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-slate-900">
                ABC Industrial Solutions
              </p>

              <p className="mt-0.5 text-[11px] text-emerald-600">
                Verified Bidder
              </p>
            </div>
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
        aria-label="Open bidder navigation"
        className="fixed left-4 top-4 z-[120] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-[100] hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        {/* Brand */}
        <div className="border-b border-slate-200 px-5 py-5">
          <Link
            href="/bidder"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L19 6V11.5C19 16.2 16.1 20.1 12 21C7.9 20.1 5 16.2 5 11.5V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M9.2 12.1L11.1 14L15 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight text-slate-950">
                TenderShield AI
              </div>

              <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Bidder Portal
              </div>
            </div>
          </Link>
        </div>

        {navigationContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close bidder navigation"
          onClick={closeMobile}
          className="fixed inset-0 z-[130] bg-slate-950/30 lg:hidden"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={
          "fixed inset-y-0 left-0 z-[140] flex w-[min(82vw,20rem)] flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-200 lg:hidden " +
          (mobileOpen
            ? "translate-x-0"
            : "-translate-x-full")
        }
      >
        {/* Mobile brand */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 px-5">
          <Link
            href="/bidder"
            onClick={closeMobile}
            className="flex min-w-0 items-center gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L19 6V11.5C19 16.2 16.1 20.1 12 21C7.9 20.1 5 16.2 5 11.5V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M9.2 12.1L11.1 14L15 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-bold tracking-tight text-slate-950">
                TenderShield AI
              </div>

              <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                Bidder Portal
              </div>
            </div>
          </Link>

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