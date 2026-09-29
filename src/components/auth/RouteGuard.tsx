"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type UserRole = "officer" | "bidder";

const publicRoutes = [
  "/",
  "/login",
  "/login/officer",
  "/login/bidder",
];

const bidderRoutes = [
  "/bidder",
];

const officerRoutes = [
  "/dashboard",
  "/tenders",
  "/bidders",
  "/verification",
  "/compliance",
  "/risk-alerts",
  "/documents",
  "/analytics",
  "/audit-trail",
  "/settings",
  "/data-explorer",
  "/advanced-intelligence",
];

function isPublicRoute(pathname: string) {
  return publicRoutes.includes(pathname);
}

function matchesRoute(pathname: string, routes: string[]) {
  return routes.some(
    (route) =>
      pathname === route || pathname.startsWith(`${route}/`)
  );
}

function getRequiredRole(pathname: string): UserRole | null {
  if (matchesRoute(pathname, bidderRoutes)) {
    return "bidder";
  }

  if (matchesRoute(pathname, officerRoutes)) {
    return "officer";
  }

  return null;
}

export default function RouteGuard({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (isPublicRoute(pathname)) {
      setAuthorized(true);
      setChecking(false);
      return;
    }

    const requiredRole = getRequiredRole(pathname);

    // Unknown/non-portal routes remain accessible.
    if (!requiredRole) {
      setAuthorized(true);
      setChecking(false);
      return;
    }

    const storedRole = window.localStorage.getItem(
      "tendershield_role"
    );

    // No valid role → login.
    if (storedRole !== "officer" && storedRole !== "bidder") {
      router.replace("/login");
      return;
    }

    // Wrong portal → correct dashboard.
    if (storedRole !== requiredRole) {
      if (storedRole === "officer") {
        router.replace("/dashboard");
      } else {
        router.replace("/bidder");
      }
      return;
    }

    setAuthorized(true);
    setChecking(false);
  }, [pathname, router]);

  if (checking || !authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

          <p className="mt-4 text-sm font-medium text-slate-600">
            Loading TenderShield AI...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}