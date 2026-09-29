"use client";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

const bids = [
  {
    id: "GEM/2026/B/10482",
    title: "Industrial Pump Supply & Installation",
    organization: "Chennai Petroleum Corporation Limited",
    submitted: "12 Sep 2026",
    value: "₹42.5 Lakh",
    status: "Under Evaluation",
    type: "warning",
    progress: 68,
    deadline: "28 Sep 2026",
  },
  {
    id: "GEM/2026/B/10476",
    title: "Pipeline Maintenance Equipment",
    organization: "Indian Oil Corporation",
    submitted: "08 Sep 2026",
    value: "₹28.7 Lakh",
    status: "Compliance Verified",
    type: "success",
    progress: 100,
    deadline: "24 Sep 2026",
  },
  {
    id: "GEM/2026/B/10461",
    title: "Refinery Safety Equipment",
    organization: "Bharat Petroleum Corporation",
    submitted: "02 Sep 2026",
    value: "₹18.2 Lakh",
    status: "Action Required",
    type: "danger",
    progress: 54,
    deadline: "30 Sep 2026",
  },
];

function statusClass(type: string) {
  if (type === "success") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (type === "danger") {
    return "border-red-200 bg-red-50 text-red-700";
  }

  return "border-amber-200 bg-amber-50 text-amber-700";
}

export default function BidderBidsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="/bidder"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Bidder Dashboard
          </a>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-slate-800" />
            <span className="font-bold text-slate-900">
              TenderShield AI
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">
            Bidder Workspace
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            My Bids
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Track your tender submissions and evaluation progress.
          </p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <FileText className="h-5 w-5 text-blue-600" />
            <p className="mt-3 text-xs font-medium text-slate-500">
              Total Submitted
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">3</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <Clock3 className="h-5 w-5 text-amber-600" />
            <p className="mt-3 text-xs font-medium text-slate-500">
              Under Evaluation
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">2</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-3 text-xs font-medium text-slate-500">
              Compliance Verified
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">1</p>
          </div>
        </div>

        <div className="space-y-5">
          {bids.map((bid) => (
            <div
              key={bid.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">
                      {bid.id}
                    </span>

                    <span
                      className={
                        "rounded-full border px-2.5 py-1 text-[10px] font-semibold " +
                        statusClass(bid.type)
                      }
                    >
                      {bid.status}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-slate-900">
                    {bid.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {bid.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <IndianRupee className="h-4 w-4" />
                  {bid.value}
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Submitted
                    </p>
                    <p className="text-sm font-medium text-slate-700">
                      {bid.submitted}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Evaluation Deadline
                    </p>
                    <p className="text-sm font-medium text-slate-700">
                      {bid.deadline}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Compliance Progress
                    </p>
                    <p className="text-xs font-semibold text-slate-600">
                      {bid.progress}%
                    </p>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-slate-800"
                      style={{ width: `${bid.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  View Bid Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] text-slate-400">
          Prototype interface · Synthetic demonstration data
        </p>
      </div>
    </main>
  );
}