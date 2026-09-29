"use client";

import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  ShieldCheck,
  Upload,
} from "lucide-react";

const documents = [
  {
    name: "GST Registration Certificate",
    category: "Tax & Registration",
    date: "12 Sep 2026",
    status: "Verified",
    confidence: 98,
  },
  {
    name: "PAN Verification",
    category: "Identity",
    date: "12 Sep 2026",
    status: "Verified",
    confidence: 99,
  },
  {
    name: "Udyam Registration",
    category: "MSME",
    date: "11 Sep 2026",
    status: "Verified",
    confidence: 96,
  },
  {
    name: "Financial Statement FY 2024-25",
    category: "Financial",
    date: "10 Sep 2026",
    status: "Review Required",
    confidence: 78,
  },
  {
    name: "OEM Authorization Letter",
    category: "Technical",
    date: "09 Sep 2026",
    status: "Verified",
    confidence: 94,
  },
];

export default function BidderDocumentsPage() {
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

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-slate-800" />
            <span className="font-bold text-slate-900">
              TenderShield AI
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Bidder Workspace
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              My Documents
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage documents submitted for procurement verification.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Upload className="h-4 w-4" />
            Upload Document
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <FileText className="h-5 w-5 text-blue-600" />
            <p className="mt-3 text-xs text-slate-500">
              Total Documents
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">12</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="mt-3 text-xs text-slate-500">
              Verified
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">11</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <Clock3 className="h-5 w-5 text-amber-600" />
            <p className="mt-3 text-xs text-slate-500">
              Review Required
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">1</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="font-semibold text-slate-900">
              Submitted Documents
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {documents.map((document) => (
              <div
                key={document.name}
                className="flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-slate-100 p-2.5">
                    <FileCheck2 className="h-5 w-5 text-slate-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      {document.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {document.category} · Submitted {document.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="min-w-28">
                    <div className="flex justify-between">
                      <span className="text-[10px] text-slate-400">
                        AI confidence
                      </span>
                      <span className="text-xs font-semibold text-slate-600">
                        {document.confidence}%
                      </span>
                    </div>

                    <div className="mt-1.5 h-1.5 rounded-full bg-slate-100">
                      <div
                        className={
                          "h-full rounded-full " +
                          (document.status === "Verified"
                            ? "bg-emerald-500"
                            : "bg-amber-500")
                        }
                        style={{
                          width: `${document.confidence}%`,
                        }}
                      />
                    </div>
                  </div>

                  <span
                    className={
                      "rounded-full border px-3 py-1.5 text-xs font-semibold " +
                      (document.status === "Verified"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-amber-200 bg-amber-50 text-amber-700")
                    }
                  >
                    {document.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-slate-500" />

            <p className="text-xs leading-5 text-slate-500">
              TenderShield AI provides evidence verification feedback to
              help bidders identify documents that may require clarification.
              Internal procurement intelligence is not exposed in the
              bidder portal.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}