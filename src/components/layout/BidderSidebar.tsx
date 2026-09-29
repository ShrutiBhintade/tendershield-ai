"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  LogOut,
  User,
  WalletCards,
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

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Brand */}
      <div className="border-b border-slate-200 px-5 py-5">
        <Link
          href="/bidder"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
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

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/bidder" &&
                pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <Icon
                  className={`h-[18px] w-[18px] ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-900"
                  }`}
                  strokeWidth={1.8}
                />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="border-t border-slate-200 p-3">
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <LogOut className="h-[18px] w-[18px]" strokeWidth={1.8} />
          <span>Switch Portal</span>
        </Link>

        <div className="mt-3 rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
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
    </aside>
  );
}