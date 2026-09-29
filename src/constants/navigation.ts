import {
  AlertTriangle,
  BarChart3,
  ClipboardCheck,
  FileCheck2,
  FileText,
  LayoutDashboard,
  ScrollText,
  Settings,
  Users,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Tenders",
    href: "/tenders",
    icon: FileText,
  },
  {
    name: "Bidders",
    href: "/bidders",
    icon: Users,
  },
  {
    name: "Verification",
    href: "/verification",
    icon: ClipboardCheck,
  },
  {
    name: "Compliance",
    href: "/compliance",
    icon: FileCheck2,
  },
  {
    name: "Risk Alerts",
    href: "/risk-alerts",
    icon: AlertTriangle,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

export const systemNavigation = [
  {
    name: "Audit Trail",
    href: "/audit-trail",
    icon: ScrollText,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];