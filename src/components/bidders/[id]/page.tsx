"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileCheck2,
  FileText,
  Fingerprint,
  Gauge,
  Search,
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
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Verified
      </span>
    );
  }

  if (status === "Not Met") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
        <XCircle className="h-3.5 w-3.5" />
        Not Met
      </span>
    );
  }

  if (status === "Review Required" || status === "Review") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
        <AlertTriangle className="h-3.5 w-3.5" />
        Review
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700">
      <CircleAlert className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

export default function BidderPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Demo banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs font-semibold tracking-wide text-amber-800">
        DEMO ENVIRONMENT — SYNTHETIC DATA
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-8">
        {/* Back */}
        <Link
          href="/tenders/GEM%2F2026%2FB%2F10482"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tender
        </Link>

        {/* Bidder header */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                  AS
                </div>

                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                      ABC Industrial Solutions
                    </h1>

                    <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      High Risk
                    </span>
                  </div>

                  <p className="text-sm text-slate-500">
                    Bidder ID: BID-2026-0047
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Tender: GEM/2026/B/10482 — Industrial Pump Supply &
                    Installation
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Export Report
                </button>

                <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                  Officer Review
                </button>
              </div>
            </div>
          </div>

          {/* Score row */}
          <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Compliance Score
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-950">78%</span>
                <span className="mb-1 text-xs font-semibold text-amber-600">
                  Needs Review
                </span>
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Risk Score
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-bold text-red-600">72</span>
                <span className="mb-1 text-xs text-slate-500">/ 100</span>
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Requirements
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-950">14</span>
                <span className="mb-1 text-xs text-slate-500">
                  evaluated
                </span>
              </div>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Documents
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-950">9</span>
                <span className="mb-1 text-xs text-slate-500">submitted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main grid */}
        <div className="grid gap-6 xl:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 xl:col-span-2">
            {/* Verification */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 p-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    Identity & Verification
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Verification status across bidder identity and
                    registrations.
                  </p>
                </div>

                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <Fingerprint className="h-5 w-5 text-emerald-600" />
                    {statusBadge("Verified")}
                  </div>

                  <p className="font-semibold text-slate-900">GSTIN</p>
                  <p className="mt-1 text-xs text-slate-500">
                    29AABCA1234M1ZX
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <UserCheck className="h-5 w-5 text-emerald-600" />
                    {statusBadge("Verified")}
                  </div>

                  <p className="font-semibold text-slate-900">Udyam</p>
                  <p className="mt-1 text-xs text-slate-500">
                    UDYAM-KA-12-0012345
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <FileCheck2 className="h-5 w-5 text-emerald-600" />
                    {statusBadge("Verified")}
                  </div>

                  <p className="font-semibold text-slate-900">PAN</p>
                  <p className="mt-1 text-xs text-slate-500">
                    AABCA1234M
                  </p>
                </div>
              </div>
            </section>

            {/* Evidence mapping */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-950">
                      Evidence → Requirement Mapping
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Every compliance conclusion is linked to evidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px]">
                  <thead className="border-b border-slate-200 bg-slate-50">
                    <tr>
                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                        Requirement
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                        Evidence
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                        Verification Finding
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {requirements.map((item) => (
                      <tr key={item.requirement} className="hover:bg-slate-50">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-slate-900">
                            {item.requirement}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <FileText className="h-4 w-4 text-slate-400" />
                            {item.evidence}
                          </div>
                        </td>

                        <td className="max-w-sm px-5 py-4 text-sm text-slate-600">
                          {item.verification}
                        </td>

                        <td className="px-5 py-4">
                          {statusBadge(item.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cross document intelligence */}
            <section className="rounded-2xl border border-red-200 bg-white shadow-sm">
              <div className="border-b border-red-100 bg-red-50/50 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-red-100 p-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-950">
                      Cross-Document Intelligence
                    </h2>

                    <p className="mt-1 text-sm text-slate-600">
                      Potential inconsistencies detected across submitted
                      evidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="rounded-xl border border-red-200 bg-red-50/40 p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-700">
                          HIGH
                        </span>

                        <h3 className="font-bold text-slate-950">
                          Turnover discrepancy
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Tender requires minimum annual turnover of ₹10 Cr.
                        Bidder financial statement reports ₹8.4 Cr, while
                        verification evidence indicates ₹6.9 Cr.
                      </p>
                    </div>

                    <button className="shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50">
                      View Evidence
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5">
                  <div className="flex items-start gap-3">
                    <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                    <div>
                      <h3 className="font-bold text-slate-950">
                        OEM authorization ambiguity
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Authorization letter identifies the manufacturer but
                        does not clearly establish authorization for all
                        products covered by this tender.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-950">
                  Document Intelligence
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  AI-extracted document classification and confidence.
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {documents.map((document) => (
                  <div
                    key={document.name}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-slate-100 p-2">
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

                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <p className="text-xs text-slate-500">
                          AI confidence
                        </p>

                        <p className="text-sm font-bold text-slate-900">
                          {document.confidence}%
                        </p>
                      </div>

                      {statusBadge(document.status)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Risk score */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    Explainable Risk Score
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Decision-support indicator
                  </p>
                </div>

                <Gauge className="h-6 w-6 text-red-600" />
              </div>

              <div className="mb-6 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-red-100">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-600">72</p>
                    <p className="text-xs font-semibold text-slate-500">
                      HIGH RISK
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-slate-600">
                      Financial discrepancy
                    </span>
                    <span className="font-bold text-red-600">High</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[88%] rounded-full bg-red-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-slate-600">
                      Experience threshold
                    </span>
                    <span className="font-bold text-amber-600">Medium</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[64%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-slate-600">
                      OEM ambiguity
                    </span>
                    <span className="font-bold text-amber-600">Medium</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[58%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-slate-600">
                      Blacklist screening
                    </span>
                    <span className="font-bold text-emerald-600">Low</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[15%] rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            </section>

            {/* AI findings */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-slate-900 p-2">
                  <Search className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-950">
                    Procurement AI Findings
                  </h2>

                  <p className="text-xs text-slate-500">
                    Evidence-grounded observations
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-red-400 pl-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Turnover requirement may not be satisfied
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Financial evidence contains values below the tender
                    threshold.
                  </p>
                </div>

                <div className="border-l-2 border-amber-400 pl-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Experience evidence needs officer review
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Submitted projects do not clearly establish the required
                    experience criteria.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-400 pl-4">
                  <p className="text-sm font-semibold text-slate-900">
                    No blacklist match detected
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Demo screening did not identify a matching record.
                  </p>
                </div>
              </div>
            </section>

            {/* Officer decision */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-slate-600" />

                <div>
                  <h2 className="font-bold text-slate-950">
                    Officer Decision
                  </h2>

                  <p className="text-xs text-slate-500">
                    Human-in-the-loop workflow
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Review Required
                </p>

                <p className="mt-1 text-xs leading-5 text-amber-800">
                  AI has identified potential compliance issues. Final
                  qualification remains with the Procurement Officer.
                </p>
              </div>

              <div className="mt-4 grid gap-2">
                <button className="rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  Mark for Detailed Review
                </button>

                <button className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Request Clarification
                </button>
              </div>
            </section>

            {/* Audit */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-bold text-slate-950">Recent Activity</h2>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      GST verification completed
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      12 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Financial discrepancy detected
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      9 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Risk score updated to 72
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      6 minutes ago
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/audit-trail"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-950"
              >
                View complete audit trail
                <ChevronRight className="h-4 w-4" />
              </Link>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-center text-xs leading-5 text-slate-500">
          <strong className="text-slate-700">Decision-support only:</strong>{" "}
          Risk scores, AI findings and verification indicators are intended
          to assist Procurement Officers. They do not constitute proof of
          fraud, automatic disqualification, or a final procurement
          decision.
        </div>
      </main>
    </div>
  );
}