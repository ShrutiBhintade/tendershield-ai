"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileCheck2,
  FileText,
  ShieldCheck,
  UserCheck,
  XCircle,
} from "lucide-react";

const documents = [
  {
    name: "GST Registration Certificate",
    type: "GST",
    status: "Verified",
    confidence: 98,
  },
  {
    name: "Udyam Registration Certificate",
    type: "Udyam",
    status: "Verified",
    confidence: 96,
  },
  {
    name: "PAN Card / PAN Verification",
    type: "PAN",
    status: "Verified",
    confidence: 99,
  },
  {
    name: "Financial Statement FY 2024-25",
    type: "Financial",
    status: "Review Required",
    confidence: 91,
  },
  {
    name: "Previous Experience Certificates",
    type: "Experience",
    status: "Not Met",
    confidence: 94,
  },
  {
    name: "OEM Authorization Letter",
    type: "OEM",
    status: "Ambiguous",
    confidence: 78,
  },
];

const requirements = [
  {
    requirement: "GST Registration",
    evidence: "GST Certificate",
    verification: "GSTIN matched",
    status: "Verified",
  },
  {
    requirement: "PAN",
    evidence: "PAN Verification",
    verification: "Legal name matched",
    status: "Verified",
  },
  {
    requirement: "Udyam / MSME",
    evidence: "Udyam Certificate",
    verification: "Registration active",
    status: "Verified",
  },
  {
    requirement: "Minimum Annual Turnover",
    evidence: "Financial Statement",
    verification: "₹8.4 Cr submitted vs ₹10 Cr required",
    status: "Review",
  },
  {
    requirement: "Previous Experience",
    evidence: "Experience Certificates",
    verification: "Required project threshold not established",
    status: "Not Met",
  },
  {
    requirement: "OEM Authorization",
    evidence: "OEM Authorization Letter",
    verification: "Issuer / product scope requires review",
    status: "Ambiguous",
  },
];

function statusBadge(status: string) {
  if (status === "Verified") {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  }

  if (status === "Not Met") {
    return "bg-red-50 text-red-700 border-red-200";
  }

  if (status === "Review" || status === "Review Required") {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }

  return "bg-slate-100 text-slate-700 border-slate-200";
}

export default function BidderPage() {
  const searchParams = useSearchParams();

  const bidder =
    searchParams.get("bidder") || "ABC Industrial Solutions";

  const tender =
    searchParams.get("tender") || "GEM/2026/B/10482";

  const riskScore =
    searchParams.get("riskScore") || "72";

  const riskLevel =
    searchParams.get("riskLevel") || "High";

  const alertTitle =
    searchParams.get("alert") || "Multiple verification concerns detected";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* DEMO BANNER */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs font-semibold tracking-wide text-amber-800">
        DEMO ENVIRONMENT — SYNTHETIC DATA
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-8">

        {/* BACK */}
        <Link
          href="/risk-alerts"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Risk Alerts
        </Link>

        {/* HEADER */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">

                <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                  {riskLevel} Risk
                </span>

                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                  Bidder Investigation
                </span>

              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                {bidder}
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Bidder ID: BID-2026-0047
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Tender: {tender}
              </p>

              <p className="mt-3 max-w-3xl text-sm text-slate-500">
                Investigation initiated from procurement risk monitoring.
                The system is reviewing bidder identity, submitted evidence,
                compliance requirements, and potential integrity concerns.
              </p>

            </div>

            <div className="min-w-[220px] rounded-2xl border border-red-200 bg-red-50 p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-red-600">
                Risk Score
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-bold text-red-700">
                  {riskScore}
                </span>

                <span className="mb-1 text-sm font-semibold text-red-600">
                  / 100
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-red-700">
                {riskLevel} Risk
              </p>

            </div>

          </div>

          {/* SOURCE ALERT */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4">

            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />

            <div>
              <p className="text-sm font-bold text-indigo-900">
                Investigation Trigger
              </p>

              <p className="mt-1 text-sm text-indigo-800">
                {alertTitle}
              </p>
            </div>

          </div>

        </section>

        {/* KPI CARDS */}
        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Compliance Score
              </p>
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-slate-950">
              78%
            </p>

            <p className="mt-1 text-xs font-semibold text-amber-600">
              Needs Review
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Risk Score
              </p>
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-red-700">
              {riskScore}
            </p>

            <p className="mt-1 text-xs font-semibold text-red-600">
              {riskLevel} Risk
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Requirements
              </p>
              <FileCheck2 className="h-5 w-5 text-indigo-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-slate-950">
              14
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Evaluated
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Documents
              </p>
              <FileText className="h-5 w-5 text-slate-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-slate-950">
              9
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Submitted
            </p>
          </div>

        </section>

        {/* MAIN GRID */}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* IDENTITY */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-950">
                  Identity & Verification
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Cross-checks performed against bidder registration evidence.
                </p>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    GSTIN
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    27ABCDE1234F1Z5
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Verified
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Udyam
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    UDYAM-MH-12-0012345
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Verified
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    PAN
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    ABCDE1234F
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Verified
                  </div>
                </div>

              </div>

            </section>

            {/* REQUIREMENTS */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-950">
                  Evidence → Requirement Mapping
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  AI-assisted mapping between tender requirements and bidder evidence.
                </p>
              </div>

              <div className="overflow-x-auto">

                <table className="w-full min-w-[800px] text-left">

                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200">

                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Requirement
                      </th>

                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Evidence
                      </th>

                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Verification
                      </th>

                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                        Status
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {requirements.map((item) => (
                      <tr
                        key={item.requirement}
                        className="border-b border-slate-100 last:border-0"
                      >

                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                          {item.requirement}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600">
                          {item.evidence}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600">
                          {item.verification}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={
                              "rounded-full border px-2.5 py-1 text-xs font-bold " +
                              statusBadge(item.status)
                            }
                          >
                            {item.status}
                          </span>
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </section>

            {/* CROSS DOCUMENT */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-950">
                Cross-Document Intelligence
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Potential inconsistencies identified across submitted evidence.
              </p>

              <div className="mt-5 space-y-4">

                <div className="rounded-xl border border-red-200 bg-red-50 p-5">

                  <div className="flex items-start gap-3">

                    <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />

                    <div>
                      <p className="font-bold text-red-900">
                        Turnover Discrepancy
                      </p>

                      <p className="mt-1 text-sm leading-6 text-red-800">
                        Tender requirement is ₹10 Cr. The submitted financial
                        statement reports ₹8.4 Cr, while another verification
                        source indicates ₹6.9 Cr.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">

                  <div className="flex items-start gap-3">

                    <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />

                    <div>
                      <p className="font-bold text-amber-900">
                        OEM Authorization Ambiguity
                      </p>

                      <p className="mt-1 text-sm leading-6 text-amber-800">
                        Issuer identity and product scope require officer
                        verification before accepting the authorization.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </section>

            {/* DOCUMENTS */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-950">
                  Document Intelligence
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  AI extraction and verification confidence for submitted documents.
                </p>
              </div>

              <div className="divide-y divide-slate-100">

                {documents.map((document) => (
                  <div
                    key={document.name}
                    className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"
                  >

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-slate-100 p-3">
                        <FileText className="h-5 w-5 text-slate-600" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {document.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {document.type} document
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center gap-4">

                      <div className="text-right">
                        <p className="text-xs text-slate-500">
                          AI Confidence
                        </p>

                        <p className="font-bold text-slate-900">
                          {document.confidence}%
                        </p>
                      </div>

                      <span
                        className={
                          "rounded-full border px-3 py-1 text-xs font-bold " +
                          statusBadge(document.status)
                        }
                      >
                        {document.status}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </section>

          </div>

          {/* RIGHT */}
          <aside className="space-y-6">

            {/* RISK */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-950">
                Explainable Risk Score
              </h2>

              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-center">

                <div className="text-5xl font-bold text-red-700">
                  {riskScore}
                </div>

                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-red-600">
                  {riskLevel} Risk
                </p>

              </div>

              <div className="mt-6 space-y-5">

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-600">
                      Financial discrepancy
                    </span>
                    <span className="font-bold text-red-600">
                      88%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[88%] rounded-full bg-red-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-600">
                      Experience threshold
                    </span>
                    <span className="font-bold text-amber-600">
                      64%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[64%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-600">
                      OEM ambiguity
                    </span>
                    <span className="font-bold text-amber-600">
                      58%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[58%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-600">
                      Blacklist screening
                    </span>
                    <span className="font-bold text-emerald-600">
                      15%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[15%] rounded-full bg-emerald-500" />
                  </div>
                </div>

              </div>

            </section>

            {/* AI FINDINGS */}
            <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

              <h2 className="text-lg font-bold text-indigo-950">
                Procurement AI Findings
              </h2>

              <div className="mt-5 space-y-4">

                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <p className="text-sm leading-6 text-indigo-900">
                    Turnover requirement may not be satisfied based on submitted evidence.
                  </p>
                </div>

                <div className="flex gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <p className="text-sm leading-6 text-indigo-900">
                    Experience evidence requires procurement officer review.
                  </p>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <p className="text-sm leading-6 text-indigo-900">
                    No blacklist match detected in the current screening dataset.
                  </p>
                </div>

              </div>

            </section>

            {/* DECISION */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-950">
                Officer Decision
              </h2>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">

                <div className="flex items-center gap-3">
                  <UserCheck className="h-5 w-5 text-amber-600" />

                  <div>
                    <p className="font-bold text-amber-900">
                      Review Required
                    </p>

                    <p className="mt-1 text-xs text-amber-700">
                      AI recommendation only
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-5 space-y-3">

                <button className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
                  Mark for Detailed Review
                </button>

                <button className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                  Request Clarification
                </button>

              </div>

            </section>

            {/* ACTIVITY */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-950">
                Recent Activity
              </h2>

              <div className="mt-5 space-y-5">

                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      GST verification completed
                    </p>
                    <p className="text-xs text-slate-500">
                      12 min ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Financial discrepancy detected
                    </p>
                    <p className="text-xs text-slate-500">
                      9 min ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Risk score updated to {riskScore}
                    </p>
                    <p className="text-xs text-slate-500">
                      6 min ago
                    </p>
                  </div>
                </div>

              </div>

              <Link
                href="/audit-trail"
                className="mt-6 block text-center text-sm font-bold text-indigo-600 hover:text-indigo-800"
              >
                View Full Audit Trail →
              </Link>

            </section>

          </aside>

        </div>

        {/* DISCLAIMER */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-center text-xs leading-5 text-slate-500 shadow-sm">
          ProcureAI provides decision-support intelligence only. Risk scores
          and AI findings do not constitute proof of fraud, automatic
          disqualification, or a final procurement decision. Human officer
          review remains mandatory.
        </div>

      </main>

    </div>
  );
}