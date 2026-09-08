"use client";

import {
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  LayoutDashboard,
  Search,
  Settings,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Tenders", icon: FileText },
  { label: "Bidders", icon: Users },
  { label: "Verification", icon: ClipboardCheck },
  { label: "Compliance", icon: FileCheck2 },
  { label: "Risk Alerts", icon: AlertTriangle },
  { label: "Documents", icon: FileText },
  { label: "Analytics", icon: BarChart3 },
];

const tenders = [
  {
    id: "GEM/2026/B/10482",
    title: "Industrial Pump Supply & Installation",
    bidders: 7,
    compliance: "82%",
    risk: "Medium",
    status: "Under Review",
  },
  {
    id: "GEM/2026/B/10476",
    title: "Pipeline Maintenance Equipment",
    bidders: 5,
    compliance: "94%",
    risk: "Low",
    status: "Verification Complete",
  },
  {
    id: "GEM/2026/B/10461",
    title: "Refinery Safety Equipment",
    bidders: 9,
    compliance: "68%",
    risk: "High",
    status: "Action Required",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight"TenderShield AI</h1>
              <p className="text-[11px] font-medium text-slate-500">
                PROCUREMENT INTELLIGENCE
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    item.active
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            System
          </p>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100">
            <BarChart3 className="h-4.5 w-4.5" />
            Audit Trail
          </button>

          <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100">
            <Settings className="h-4.5 w-4.5" />
            Settings
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-semibold text-slate-700">
              Procurement Officer
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              CPCL Evaluation Cell
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur lg:px-8">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Procurement Intelligence Platform
            </p>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 sm:block">
              DEMO ENVIRONMENT · SYNTHETIC DATA
            </div>

            <button className="relative rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              PO
            </div>
          </div>
        </header>

        <div className="p-5 lg:p-8">
          {/* Welcome */}
          <div className="mb-7">
            <h3 className="text-2xl font-bold tracking-tight">
              Procurement Overview
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Monitor tender compliance, verification status and procurement
              risks from one workspace.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <KpiCard
              title="Active Tenders"
              value="24"
              change="+4 this month"
              icon={FileText}
            />

            <KpiCard
              title="Bidders Screened"
              value="186"
              change="+18% this month"
              icon={Users}
            />

            <KpiCard
              title="Compliance Rate"
              value="87.4%"
              change="+3.2% vs last month"
              icon={CheckCircle2}
            />

            <KpiCard
              title="High Risk Findings"
              value="12"
              change="4 require action"
              icon={AlertTriangle}
              danger
            />
          </div>

          {/* Main Grid */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
            {/* Tender Table */}
            <section className="rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h4 className="font-semibold">Active Tenders</h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Latest procurement verification activity
                  </p>
                </div>

                <button className="text-xs font-semibold text-slate-700 hover:underline">
                  View all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Tender</th>
                      <th className="px-5 py-3 font-semibold">Bidders</th>
                      <th className="px-5 py-3 font-semibold">Compliance</th>
                      <th className="px-5 py-3 font-semibold">Risk</th>
                      <th className="px-5 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {tenders.map((tender) => (
                      <tr key={tender.id} className="hover:bg-slate-50">
                        <td className="px-5 py-4">
                          <p className="text-xs font-semibold text-slate-900">
                            {tender.id}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">
                            {tender.title}
                          </p>
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-600">
                          {tender.bidders}
                        </td>

                        <td className="px-5 py-4">
                          <span className="font-semibold text-slate-800">
                            {tender.compliance}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <RiskBadge risk={tender.risk} />
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge status={tender.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Risk Panel */}
            <section className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-5 py-4">
                <h4 className="font-semibold">Priority Risk Alerts</h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  Findings requiring officer attention
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                <RiskItem
                  title="Turnover discrepancy"
                  bidder="ABC Industrial Solutions"
                  detail="₹8.4 Cr reported vs ₹6.9 Cr verified"
                />

                <RiskItem
                  title="OEM authorization ambiguity"
                  bidder="Bharat Engineering Works"
                  detail="Authorization document requires review"
                />

                <RiskItem
                  title="Local content mismatch"
                  bidder="Southern Process Systems"
                  detail="Declared 65% · Evidence indicates 48%"
                />

                <RiskItem
                  title="Experience requirement"
                  bidder="Metro Industrial Corp."
                  detail="Required 5 years · Evidence supports 3 years"
                />
              </div>

              <div className="p-4">
                <button className="w-full rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                  Open Risk Center
                </button>
              </div>
            </section>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={ShieldCheck}
              title="Verification Engine"
              value="142 / 158"
              description="requirements automatically verified"
            />

            <InfoCard
              icon={FileCheck2}
              title="Documents Processed"
              value="438"
              description="documents analyzed this month"
            />

            <InfoCard
              icon={Search}
              title="Manual Reviews"
              value="31"
              description="cases currently awaiting officer review"
            />
          </div>

          {/* Footer disclaimer */}
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex gap-3">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

              <p className="text-xs leading-5 text-slate-500">
                <strong className="text-slate-700">Decision support only:</strong>{" "}
                TenderShield AI assists procurement officers by identifying
                compliance gaps, inconsistencies and risk indicators. Final
                qualification or disqualification decisions remain with the
                authorized Procurement Officer.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function KpiCard({
  title,
  value,
  change,
  icon: Icon,
  danger = false,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
        </div>

        <div
          className={`rounded-lg p-2.5 ${
            danger
              ? "bg-red-50 text-red-600"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">{change}</p>
    </div>
  );
}

function RiskBadge({ risk }: { risk: string }) {
  const styles =
    risk === "High"
      ? "bg-red-50 text-red-700 border-red-200"
      : risk === "Medium"
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-emerald-50 text-emerald-700 border-emerald-200";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles}`}
    >
      {risk}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isAction = status === "Action Required";
  const isComplete = status === "Verification Complete";

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        isAction
          ? "bg-red-50 text-red-700"
          : isComplete
            ? "bg-emerald-50 text-emerald-700"
            : "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

function RiskItem({
  title,
  bidder,
  detail,
}: {
  title: string;
  bidder: string;
  detail: string;
}) {
  return (
    <div className="px-5 py-4">
      <div className="flex gap-3">
        <div className="mt-0.5 rounded-md bg-red-50 p-2 text-red-600">
          <AlertTriangle className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-0.5 truncate text-xs text-slate-500">{bidder}</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  description,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 p-2.5 text-slate-700">
          <Icon className="h-5 w-5" />
        </div>

        <p className="text-sm font-semibold">{title}</p>
      </div>

      <p className="mt-5 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}