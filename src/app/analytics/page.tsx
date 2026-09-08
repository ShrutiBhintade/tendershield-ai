"use client";

import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileCheck2,
  ShieldAlert,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

const monthlyData = [
  { month: "Apr", tenders: 15, risks: 7, compliance: 82 },
  { month: "May", tenders: 18, risks: 9, compliance: 84 },
  { month: "Jun", tenders: 21, risks: 11, compliance: 83 },
  { month: "Jul", tenders: 20, risks: 8, compliance: 86 },
  { month: "Aug", tenders: 23, risks: 13, compliance: 85 },
  { month: "Sep", tenders: 24, risks: 12, compliance: 87 },
];

const riskCategories = [
  {
    name: "Financial Discrepancy",
    value: 34,
    count: 18,
    level: "High",
  },
  {
    name: "Document Mismatch",
    value: 26,
    count: 14,
    level: "High",
  },
  {
    name: "Experience Gap",
    value: 18,
    count: 10,
    level: "Medium",
  },
  {
    name: "Bid Pattern Anomaly",
    value: 13,
    count: 7,
    level: "Medium",
  },
  {
    name: "OEM Ambiguity",
    value: 9,
    count: 5,
    level: "Low",
  },
];

const bidderDistribution = [
  { label: "Low Risk", count: 96, percentage: 52 },
  { label: "Medium Risk", count: 54, percentage: 29 },
  { label: "High Risk", count: 27, percentage: 15 },
  { label: "Critical Risk", count: 9, percentage: 4 },
];

const departmentData = [
  {
    department: "Infrastructure",
    tenders: 8,
    compliance: 91,
    risk: 18,
  },
  {
    department: "Engineering",
    tenders: 6,
    compliance: 88,
    risk: 24,
  },
  {
    department: "Utilities",
    tenders: 5,
    compliance: 85,
    risk: 29,
  },
  {
    department: "Procurement",
    tenders: 3,
    compliance: 82,
    risk: 34,
  },
  {
    department: "IT & Systems",
    tenders: 2,
    compliance: 94,
    risk: 12,
  },
];

export default function AnalyticsPage() {
  const maxTenders = Math.max(
    ...monthlyData.map((item) => item.tenders)
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* DEMO BANNER */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs font-semibold tracking-wide text-amber-800">
        DEMO ENVIRONMENT — SYNTHETIC DATA
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-8">

        {/* HEADER */}
        <section className="mb-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2">

                <div className="rounded-xl bg-indigo-100 p-2">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                </div>

                <span className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                  Procurement Intelligence
                </span>

              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                Analytics
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                Monitor procurement performance, compliance trends, bidder
                risk and integrity indicators across the workspace.
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

              <p className="text-xs font-semibold text-slate-500">
                Analysis Period
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                April — September 2026
              </p>

            </div>

          </div>

        </section>

        {/* KPI CARDS */}
        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <p className="text-sm font-medium text-slate-500">
                Active Tenders
              </p>

              <div className="rounded-xl bg-slate-100 p-2">
                <FileCheck2 className="h-5 w-5 text-slate-600" />
              </div>

            </div>

            <div className="mt-4 flex items-end justify-between">

              <p className="text-3xl font-bold text-slate-950">
                24
              </p>

              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                +14%
              </span>

            </div>

            <p className="mt-1 text-xs text-slate-500">
              Compared with previous period
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <p className="text-sm font-medium text-slate-500">
                Bidders Screened
              </p>

              <div className="rounded-xl bg-slate-100 p-2">
                <Users className="h-5 w-5 text-slate-600" />
              </div>

            </div>

            <div className="mt-4 flex items-end justify-between">

              <p className="text-3xl font-bold text-slate-950">
                186
              </p>

              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                +18%
              </span>

            </div>

            <p className="mt-1 text-xs text-slate-500">
              Across active procurement
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <p className="text-sm font-medium text-slate-500">
                Compliance Rate
              </p>

              <div className="rounded-xl bg-emerald-50 p-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>

            </div>

            <div className="mt-4 flex items-end justify-between">

              <p className="text-3xl font-bold text-slate-950">
                87.4%
              </p>

              <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                +3.2%
              </span>

            </div>

            <p className="mt-1 text-xs text-slate-500">
              Versus last month
            </p>

          </div>

          <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <p className="text-sm font-medium text-slate-500">
                High Risk Findings
              </p>

              <div className="rounded-xl bg-red-50 p-2">
                <ShieldAlert className="h-5 w-5 text-red-600" />
              </div>

            </div>

            <div className="mt-4 flex items-end justify-between">

              <p className="text-3xl font-bold text-red-700">
                12
              </p>

              <span className="flex items-center gap-1 text-xs font-bold text-red-600">
                <TrendingDown className="h-3.5 w-3.5" />
                -8%
              </span>

            </div>

            <p className="mt-1 text-xs text-slate-500">
              4 require immediate action
            </p>

          </div>

        </section>

        {/* AI SUMMARY */}
        <section className="mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-white p-3 shadow-sm">
              <Activity className="h-5 w-5 text-indigo-600" />
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                Procurement AI Summary
              </p>

              <h2 className="mt-1 text-lg font-bold text-indigo-950">
                Overall procurement integrity is improving, with financial
                discrepancies remaining the leading risk signal.
              </h2>

              <p className="mt-2 max-w-5xl text-sm leading-6 text-indigo-900">
                Compliance increased to 87.4% while high-risk findings
                decreased compared with the previous analysis period.
                Financial discrepancies and document inconsistencies account
                for the majority of detected risk indicators and should
                receive priority officer attention.
              </p>

            </div>

          </div>

        </section>

        {/* TREND + RISK */}
        <section className="mb-6 grid gap-6 xl:grid-cols-3">

          {/* PROCUREMENT TREND */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-lg font-bold text-slate-950">
                  Procurement Activity Trend
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Tender activity and detected risk findings
                </p>

              </div>

              <div className="flex gap-4 text-xs font-semibold">

                <span className="flex items-center gap-2 text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  Tenders
                </span>

                <span className="flex items-center gap-2 text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  Risk Findings
                </span>

              </div>

            </div>

            <div className="mt-8 flex h-64 items-end gap-4 border-b border-slate-200 pb-2">

              {monthlyData.map((item) => {

                const tenderHeight =
                  (item.tenders / maxTenders) * 100;

                const riskHeight =
                  (item.risks / maxTenders) * 100;

                return (
                  <div
                    key={item.month}
                    className="flex h-full flex-1 items-end justify-center gap-1"
                  >

                    <div className="flex h-full items-end">

                      <div
                        className="w-7 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-600"
                        style={{
                          height: tenderHeight + "%",
                        }}
                        title={item.tenders + " tenders"}
                      />

                    </div>

                    <div className="flex h-full items-end">

                      <div
                        className="w-7 rounded-t-lg bg-red-400 transition hover:bg-red-500"
                        style={{
                          height: riskHeight + "%",
                        }}
                        title={item.risks + " risk findings"}
                      />

                    </div>

                    <span className="absolute mt-[280px] text-xs font-semibold text-slate-500">
                      {item.month}
                    </span>

                  </div>
                );
              })}

            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-slate-50 p-4">

                <p className="text-xs font-semibold text-slate-500">
                  Total Tenders
                </p>

                <p className="mt-1 text-xl font-bold text-slate-950">
                  121
                </p>

              </div>

              <div className="rounded-xl bg-slate-50 p-4">

                <p className="text-xs font-semibold text-slate-500">
                  Risk Findings
                </p>

                <p className="mt-1 text-xl font-bold text-slate-950">
                  60
                </p>

              </div>

              <div className="rounded-xl bg-slate-50 p-4">

                <p className="text-xs font-semibold text-slate-500">
                  Avg. Compliance
                </p>

                <p className="mt-1 text-xl font-bold text-emerald-700">
                  84.5%
                </p>

              </div>

            </div>

          </div>

          {/* RISK CATEGORIES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div>

              <h2 className="text-lg font-bold text-slate-950">
                Risk Distribution
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Leading integrity indicators
              </p>

            </div>

            <div className="mt-6 space-y-5">

              {riskCategories.map((risk) => (

                <div key={risk.name}>

                  <div className="flex items-center justify-between">

                    <p className="text-sm font-semibold text-slate-700">
                      {risk.name}
                    </p>

                    <span className="text-sm font-bold text-slate-900">
                      {risk.value}%
                    </span>

                  </div>

                  <div className="mt-2 h-2.5 rounded-full bg-slate-100">

                    <div
                      className={
                        "h-2.5 rounded-full " +
                        (risk.level === "High"
                          ? "bg-red-500"
                          : risk.level === "Medium"
                          ? "bg-amber-500"
                          : "bg-emerald-500")
                      }
                      style={{
                        width: risk.value + "%",
                      }}
                    />

                  </div>

                  <div className="mt-1 flex justify-between">

                    <span className="text-xs text-slate-400">
                      {risk.count} findings
                    </span>

                    <span
                      className={
                        "text-xs font-bold " +
                        (risk.level === "High"
                          ? "text-red-600"
                          : risk.level === "Medium"
                          ? "text-amber-600"
                          : "text-emerald-600")
                      }
                    >
                      {risk.level}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* BIDDER DISTRIBUTION + VERIFICATION */}
        <section className="mb-6 grid gap-6 lg:grid-cols-2">

          {/* BIDDER RISK */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div>

              <h2 className="text-lg font-bold text-slate-950">
                Bidder Risk Distribution
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Risk classification across 186 screened bidders
              </p>

            </div>

            <div className="mt-6 space-y-5">

              {bidderDistribution.map((item) => (

                <div key={item.label}>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span
                        className={
                          "h-2.5 w-2.5 rounded-full " +
                          (item.label === "Critical Risk"
                            ? "bg-red-600"
                            : item.label === "High Risk"
                            ? "bg-red-400"
                            : item.label === "Medium Risk"
                            ? "bg-amber-500"
                            : "bg-emerald-500")
                        }
                      />

                      <span className="text-sm font-semibold text-slate-700">
                        {item.label}
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <span className="text-sm font-bold text-slate-900">
                        {item.count}
                      </span>

                      <span className="text-xs text-slate-400">
                        {item.percentage}%
                      </span>

                    </div>

                  </div>

                  <div className="mt-2 h-2.5 rounded-full bg-slate-100">

                    <div
                      className={
                        "h-2.5 rounded-full " +
                        (item.label === "Critical Risk"
                          ? "bg-red-600"
                          : item.label === "High Risk"
                          ? "bg-red-400"
                          : item.label === "Medium Risk"
                          ? "bg-amber-500"
                          : "bg-emerald-500")
                      }
                      style={{
                        width: item.percentage + "%",
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-4">

              <div className="flex gap-3">

                <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />

                <div>

                  <p className="text-sm font-bold text-red-800">
                    36 bidders require attention
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-700">
                    High and critical risk bidders should be prioritized for
                    detailed investigation and evidence review.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* VERIFICATION PERFORMANCE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div>

              <h2 className="text-lg font-bold text-slate-950">
                Verification Performance
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Automated verification engine performance
              </p>

            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Requirements Evaluated
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-950">
                  158
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Across active tenders
                </p>

              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Automatically Verified
                </p>

                <p className="mt-2 text-3xl font-bold text-emerald-700">
                  142
                </p>

                <p className="mt-1 text-xs text-emerald-700">
                  89.9% automation rate
                </p>

              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  Manual Review
                </p>

                <p className="mt-2 text-3xl font-bold text-amber-700">
                  16
                </p>

                <p className="mt-1 text-xs text-amber-700">
                  Require officer decision
                </p>

              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">
                  Documents Analyzed
                </p>

                <p className="mt-2 text-3xl font-bold text-indigo-700">
                  438
                </p>

                <p className="mt-1 text-xs text-indigo-700">
                  AI-assisted processing
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* DEPARTMENT ANALYTICS */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 p-6">

            <h2 className="text-lg font-bold text-slate-950">
              Department-wise Procurement Risk
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Compare compliance and risk indicators across procurement
              departments.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[800px] text-left">

              <thead className="bg-slate-50">

                <tr className="border-b border-slate-200">

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Department
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Active Tenders
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Compliance
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Risk Index
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Assessment
                  </th>

                </tr>

              </thead>

              <tbody>

                {departmentData.map((item) => (

                  <tr
                    key={item.department}
                    className="border-b border-slate-100 last:border-0"
                  >

                    <td className="px-6 py-5">

                      <p className="text-sm font-bold text-slate-900">
                        {item.department}
                      </p>

                    </td>

                    <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                      {item.tenders}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <span className="w-12 text-sm font-bold text-slate-900">
                          {item.compliance}%
                        </span>

                        <div className="h-2 w-24 rounded-full bg-slate-100">

                          <div
                            className="h-2 rounded-full bg-emerald-500"
                            style={{
                              width: item.compliance + "%",
                            }}
                          />

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={
                          "rounded-full border px-3 py-1 text-xs font-bold " +
                          (item.risk >= 30
                            ? "border-red-200 bg-red-50 text-red-700"
                            : item.risk >= 20
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700")
                        }
                      >
                        {item.risk}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={
                          "text-sm font-semibold " +
                          (item.risk >= 30
                            ? "text-red-600"
                            : item.risk >= 20
                            ? "text-amber-600"
                            : "text-emerald-600")
                        }
                      >
                        {item.risk >= 30
                          ? "Needs Attention"
                          : item.risk >= 20
                          ? "Monitor"
                          : "Healthy"}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* INSIGHT CARDS */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <TrendingUp className="h-6 w-6 text-emerald-600" />

            <p className="mt-4 text-sm font-bold text-slate-900">
              Compliance improving
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Overall compliance increased by 3.2 percentage points compared
              with the previous month.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <AlertTriangle className="h-6 w-6 text-amber-600" />

            <p className="mt-4 text-sm font-bold text-slate-900">
              Financial risk remains dominant
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Financial discrepancies represent the largest category of
              detected procurement risk.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <ShieldAlert className="h-6 w-6 text-indigo-600" />

            <p className="mt-4 text-sm font-bold text-slate-900">
              Automation is reducing workload
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Nearly 90% of evaluated requirements are being automatically
              verified before reaching officers.
            </p>

          </div>

        </section>

        {/* DISCLAIMER */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-center text-xs leading-5 text-slate-500 shadow-sm">
          Analytics are decision-support indicators generated from synthetic
          demonstration data. Risk scores and trends should be interpreted
          alongside underlying procurement evidence and officer review.
        </div>

      </main>
    </div>
  );
}