"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

const tenders = [
  {
    id: "GEM/2026/B/10482",
    title: "Industrial Pump Supply & Installation",
    organization: "Chennai Petroleum Corporation Limited",
    bidders: 7,
    compliance: 82,
    risk: "Medium",
    status: "Under Review",
  },
  {
    id: "GEM/2026/B/10476",
    title: "Pipeline Maintenance Equipment",
    organization: "Chennai Petroleum Corporation Limited",
    bidders: 5,
    compliance: 94,
    risk: "Low",
    status: "Verification Complete",
  },
  {
    id: "GEM/2026/B/10461",
    title: "Refinery Safety Equipment",
    organization: "Chennai Petroleum Corporation Limited",
    bidders: 9,
    compliance: 68,
    risk: "High",
    status: "Action Required",
  },
];

function getRiskClasses(risk: string) {
  if (risk === "High") {
    return "bg-red-50 text-red-700 border-red-200";
  }

  if (risk === "Medium") {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }

  return "bg-emerald-50 text-emerald-700 border-emerald-200";
}

function getStatusClasses(status: string) {
  if (status === "Action Required") {
    return "bg-red-50 text-red-700 border-red-200";
  }

  if (status === "Under Review") {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }

  return "bg-emerald-50 text-emerald-700 border-emerald-200";
}

export default function TendersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs font-semibold tracking-wide text-amber-800">
        DEMO ENVIRONMENT — SYNTHETIC DATA
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
              <FileText className="h-4 w-4" />
              Procurement Intelligence
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Tenders
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Monitor tenders, bidder compliance, verification status and risk.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
            <FileText className="h-4 w-4" />
            Create Demo Tender
          </button>
        </div>

        {/* Summary cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-slate-100 p-2">
                <FileText className="h-5 w-5 text-slate-700" />
              </div>
              <span className="text-xs font-semibold text-emerald-600">
                +12%
              </span>
            </div>

            <p className="text-sm text-slate-500">Active Tenders</p>
            <p className="mt-1 text-2xl font-bold text-slate-950">24</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-amber-50 p-2">
                <Clock3 className="h-5 w-5 text-amber-600" />
              </div>
              <span className="text-xs font-semibold text-amber-600">
                8 pending
              </span>
            </div>

            <p className="text-sm text-slate-500">Under Verification</p>
            <p className="mt-1 text-2xl font-bold text-slate-950">11</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-red-50 p-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-xs font-semibold text-red-600">
                Attention
              </span>
            </div>

            <p className="text-sm text-slate-500">High Risk Tenders</p>
            <p className="mt-1 text-2xl font-bold text-slate-950">4</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-emerald-50 p-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-xs font-semibold text-emerald-600">
                This month
              </span>
            </div>

            <p className="text-sm text-slate-500">Verified Bids</p>
            <p className="mt-1 text-2xl font-bold text-slate-950">87</p>
          </div>
        </div>

        {/* Search / filters */}
        <div className="mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search tender ID, title or organization..."
              className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <button className="rounded-lg border border-slate-200 px-5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            All Status
          </button>

          <button className="rounded-lg border border-slate-200 px-5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            All Risk Levels
          </button>
        </div>

        {/* Tender table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-bold text-slate-950">
              Active Tenders
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Synthetic procurement records for demonstration.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Tender
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Bidders
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Compliance
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Risk
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {tenders.map((tender) => (
                  <tr
                    key={tender.id}
                    className="transition hover:bg-slate-50"
                  >
                    {/* Tender */}
                    <td className="px-5 py-5">
                      <Link
                        href={`/tenders/${encodeURIComponent(tender.id)}`}
                        className="group block"
                      >
                        <p className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                          {tender.id}
                        </p>

                        <p className="mt-1 font-semibold text-slate-950 group-hover:text-blue-700">
                          {tender.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {tender.organization}
                        </p>
                      </Link>
                    </td>

                    {/* Bidders */}
                    <td className="px-5 py-5">
                      <p className="font-semibold text-slate-900">
                        {tender.bidders}
                      </p>

                      <p className="text-xs text-slate-500">submitted</p>
                    </td>

                    {/* Compliance */}
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-slate-800"
                            style={{
                              width: `${tender.compliance}%`,
                            }}
                          />
                        </div>

                        <span className="text-sm font-bold text-slate-900">
                          {tender.compliance}%
                        </span>
                      </div>
                    </td>

                    {/* Risk */}
                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${getRiskClasses(
                          tender.risk
                        )}`}
                      >
                        {tender.risk}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${getStatusClasses(
                          tender.status
                        )}`}
                      >
                        {tender.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-5 py-5 text-right">
                      <Link
                        href={`/tenders/${encodeURIComponent(tender.id)}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        View
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}