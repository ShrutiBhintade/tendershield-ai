import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RoleGuard from "@/components/auth/RoleGuard";
import PortalShell from "@/components/layout/PortalShell";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TenderShield AI | Procurement Integrity",
  description:
    "AI-powered procurement integrity, verification and risk monitoring platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RoleGuard>
  <PortalShell>{children}</PortalShell>
</RoleGuard>
      </body>
    </html>
  );
}