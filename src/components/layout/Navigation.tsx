"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, systemNavigation } from "@/constants/navigation";

function NavigationItem({
  name,
  href,
  icon: Icon,
}: {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={
        "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 " +
        (isActive
          ? "bg-slate-950 text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")
      }
    >
      <Icon
        className={
          "h-[18px] w-[18px] shrink-0 transition-colors " +
          (isActive
            ? "text-white"
            : "text-slate-500 group-hover:text-slate-800")
        }
      />

      <span>{name}</span>
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="flex flex-col">
      {/* Main Menu */}
      <div>
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        <div className="space-y-1">
          {navigation.map((item) => (
            <NavigationItem
              key={item.href}
              name={item.name}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      {/* System */}
      <div className="mt-7">
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          System
        </p>

        <div className="space-y-1">
          {systemNavigation.map((item) => (
            <NavigationItem
              key={item.href}
              name={item.name}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}