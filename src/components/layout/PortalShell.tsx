"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AppShell from "./AppShell";
import BidderShell from "./BidderShell";

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
];

const bidderRoutes = [
  "/bidder",
];

function matchesRoute(pathname: string, routes: string[]) {
  return routes.some(
    (route) =>
      pathname === route || pathname.startsWith(`${route}/`)
  );
}

export default function PortalShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  // Bidder portal
  if (matchesRoute(pathname, bidderRoutes)) {
    return <BidderShell>{children}</BidderShell>;
  }

  // Officer portal
  if (matchesRoute(pathname, officerRoutes)) {
    return <AppShell>{children}</AppShell>;
  }

  // Landing / login / other public pages
  return <>{children}</>;
}