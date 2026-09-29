"use client";

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  IndianRupee,
  ShieldCheck,
  Upload,
} from "lucide-react";

const bids = [
  {
    id: "GEM/2026/B/10482",
    title: "Industrial Pump Supply & Installation",
    department: "Chennai Petroleum Corporation Limited",
    status: "Under Evaluation",
    statusType: "warning",
    submitted: "12 Sep 2026",
    value: "₹42.5 Lakh",
  },
  {
    id: "GEM/2026/B/10476",
    title: "Pipeline Maintenance Equipment",
    department: "Indian Oil Corporation",
    status: "Compliance Verified",
    statusType: "success",
    submitted: "08 Sep 2026",
    value: "₹28.7 Lakh",
  },
  {
    id: "GEM/2026/B/10461",
    title: "Refinery Safety Equipment",
    department: "Bharat Petroleum Corporation",
    status: "Action Required",
    statusType: "danger",
    submitted: "02 Sep 2026",
    value: "₹18.2 Lakh",
  },
];

const documents = [
  {
    name: "GST Registration Certificate",
    status: "Verified",
    confidence: 98,
  },
  {
    name: "PAN Verification",
    status: "Verified",
    confidence: 99,
  },
  {
    name: "Udyam Registration",
    status: "Verified",
    confidence: 96,
  },
  {
    name: "Financial Statement FY 2024-25",
    status: "Review Required",
    confidence: 78,
  },
];

function statusClasses(type: string) {
  if (type === "success") {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  }

  if (type === "danger") {
    return "bg-red-50 text-red-700 border-red-200";
  }

  return "bg-amber-50 text-amber-700 border-amber-200";
}

export default function BidderDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">
                TenderShield AI
              </p>
              <p className="text-[10px] font-semibold tracking-widest text-slate-400">
                BIDDER PORTAL
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-800">
                ABC Industrial Solutions
              </p>
              <p className="text-xs text-slate-500">
                Verified Bidder
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              AI
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        {/* Welcome */}
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            Bidder Workspace
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Welcome back, ABC Industrial Solutions
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Track your tender submissions, document verification and
            compliance requirements from one transparent workspace.
          </p>
        </div>

        {/* Action Required Banner */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

            <div>
              <p className="font-semibold text-amber-900">
                Action required on 1 bid
              </p>

              <p className="mt-1 text-sm text-amber-800">
                Your Financial Statement for GEM/2026/B/10461 requires
                clarification.
              </p>
            </div>
          </div>

          <a
            href="/bidder/bids"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Review Bid
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* KPI Cards */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Active Bids
              </p>

              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <FileText className="h-4 w-4" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">3</p>
            <p className="mt-1 text-xs text-slate-500">
              Currently under evaluation
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Compliance
              </p>

              <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">86%</p>
            <p className="mt-1 text-xs text-emerald-600">
              Overall verified status
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Documents
              </p>

              <div className="rounded-lg bg-violet-50 p-2 text-violet-600">
                <FileCheck2 className="h-4 w-4" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">12</p>
            <p className="mt-1 text-xs text-slate-500">
              11 verified · 1 review
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Pending Actions
              </p>

              <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                <Clock3 className="h-4 w-4" />
              </div>
            </div>

            <p className="mt-4 text-3xl font-bold text-slate-900">1</p>
            <p className="mt-1 text-xs text-amber-600">
              Requires your attention
            </p>
          </div>
        </section>

        {/* Bids + Compliance */}
        <section className="mt-8 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          {/* My Bids */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2 className="font-semibold text-slate-900">
                  My Bids
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Track the status of your submitted tenders.
                </p>
              </div>

              <a
                href="/bidder/bids"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                View all
              </a>
            </div>

            <div className="divide-y divide-slate-100">
              {bids.map((bid) => (
                <div
                  key={bid.id}
                  className="px-6 py-5 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-semibold text-slate-400">
                          {bid.id}
                        </p>

                        <span
                          className={
                            "rounded-full border px-2.5 py-1 text-[10px] font-semibold " +
                            statusClasses(bid.statusType)
                          }
                        >
                          {bid.status}
                        </span>
                      </div>

                      <h3 className="mt-2 font-semibold text-slate-900">
                        {bid.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {bid.department}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-8">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Bid Value
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          {bid.value}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Submitted
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {bid.submitted}
                        </p>
                      </div>

                      <a
                        href="/bidder/bids"
                        className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <h2 className="font-semibold text-slate-900">
                Compliance Overview
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your latest verification results.
              </p>
            </div>

            <div className="space-y-5 p-6">
              {documents.map((document) => (
                <div key={document.name}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      {document.status === "Verified" ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 shrink-0 text-amber-500" />
                      )}

                      <p className="truncate text-sm font-medium text-slate-700">
                        {document.name}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs font-semibold text-slate-500">
                      {document.confidence}%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={
                        "h-full rounded-full " +
                        (document.status === "Verified"
                          ? "bg-emerald-500"
                          : "bg-amber-500")
                      }
                      style={{ width: `${document.confidence}%` }}
                    />
                  </div>

                  <p
                    className={
                      "mt-1 text-[10px] font-medium " +
                      (document.status === "Verified"
                        ? "text-emerald-600"
                        : "text-amber-600")
                    }
                  >
                    {document.status}
                  </p>
                </div>
              ))}

              <a
                href="/bidder/compliance"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                View Full Compliance
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom Actions */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <a
            href="/bidder/documents"
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                <Upload className="h-5 w-5" />
              </div>

              <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-600" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Upload Documents
            </h3>

            <p className="mt-1 text-sm leading-5 text-slate-500">
              Submit or replace documents required for your active bids.
            </p>
          </a>

          <a
            href="/bidder/compliance"
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-emerald-50 p-2.5 text-emerald-600">
                <FileCheck2 className="h-5 w-5" />
              </div>

              <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-600" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Check Compliance
            </h3>

            <p className="mt-1 text-sm leading-5 text-slate-500">
              See which requirements are verified and which need attention.
            </p>
          </a>

          <a
            href="/bidder/bids"
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-violet-50 p-2.5 text-violet-600">
                <IndianRupee className="h-5 w-5" />
              </div>

              <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-600" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Track My Bids
            </h3>

            <p className="mt-1 text-sm leading-5 text-slate-500">
              Monitor evaluation status and procurement updates.
            </p>
          </a>
        </section>

        {/* Transparency Notice */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Transparent verification
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                TenderShield AI shows bidders the verification status of
                their submitted evidence and highlights documents that may
                require clarification. Internal officer risk intelligence
                remains restricted to authorized procurement officers.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <p className="mt-6 text-center text-[10px] text-slate-400">
          Prototype interface · Synthetic demonstration data · Not connected
          to live GeM or government systems
        </p>
      </div>
    </main>
  );
}