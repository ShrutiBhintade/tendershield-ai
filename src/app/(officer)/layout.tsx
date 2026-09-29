import { ReactNode } from "react";
import AppShell from "@/components/layout/AppShell";
import RoleGuard from "@/components/auth/RoleGuard";

export default function OfficerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RoleGuard allowedRole="officer">
      <AppShell>{children}</AppShell>
    </RoleGuard>
  );
}