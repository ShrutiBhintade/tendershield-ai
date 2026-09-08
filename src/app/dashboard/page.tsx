import {
  AlertTriangle,
  CheckCircle2,
  FileCheck2,
  FileText,
  Search,
  Users,
} from "lucide-react";

import AppShell from "@/components/layout/AppShell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-7">
          <h2 className="text-2xl font-bold tracking-tight">
            Procurement Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Monitor tender compliance, verification activity and procurement
            risks from one workspace.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Kpi title="Active Tenders" value="24" icon={FileText} />
          <Kpi title="Bidders Screened" value="186" icon={Users} />
          <Kpi title="Compliance Rate" value="87.4%" icon={CheckCircle2} />
          <Kpi
            title="High Risk Findings"
            value="12"
            icon={AlertTriangle}
          />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold">Tender Intelligence</h3>

            <p className="mt-1 text-sm text-slate-500">
              Your tender analysis workspace is ready.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <Stat label="Requirements identified" value="158" />
              <Stat label="Automatically verified" value="142" />
              <Stat label="Manual review required" value="31" />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold">Priority Alerts</h3>

            <div className="mt-5 space-y-4">
              <Alert
                title="Turnover discrepancy"
                bidder="ABC Industrial Solutions"
              />

              <Alert
                title="OEM authorization ambiguity"
                bidder="Bharat Engineering Works"
              />

              <Alert
                title="Local-content mismatch"
                bidder="Southern Process Systems"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-2">
              <Search className="h-5 w-5 text-slate-700" />
            </div>

            <div>
              <h3 className="font-semibold">
                Intelligent Verification Pipeline
              </h3>

              <p className="text-xs text-slate-500">
                Tender → Requirements → Evidence → Verification → Risk
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {[
              "Tender Analysis",
              "Document Intelligence",
              "Evidence Mapping",
              "Compliance Engine",
              "Risk Assessment",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-xs font-bold text-slate-400">
                  0{index + 1}
                </p>

                <p className="mt-2 text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-500">
          <strong className="text-slate-700">Decision support only:</strong>{" "}
          TenderShield AI identifies compliance gaps and risk indicators. Final
          qualification or disqualification decisions remain with the
          authorized Procurement Officer.
        </div>
      </div>
    </AppShell>
  );
}

function Kpi({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-2xl font-bold">{value}</p>
        </div>

        <div className="rounded-lg bg-slate-100 p-2.5">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="text-xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

function Alert({
  title,
  bidder,
}: {
  title: string;
  bidder: string;
}) {
  return (
    <div className="flex gap-3">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />

      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-slate-500">{bidder}</p>
      </div>
    </div>
  );
}