"use client";

import { useState } from "react";
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  ShieldCheck,
  Search,
  ChevronRight,
  Scale,
  Clock3,
  Info,
  Gavel,
} from "lucide-react";

type Status = "MET" | "CLEAR" | "REVIEW REQUIRED" | "NOT MET";

type Requirement = {
  id: number;
  requirement: string;
  condition: string;
  status: Status;
  evidence: string;
  verification: string;
  confidence: number;
  severity: "LOW" | "MEDIUM" | "HIGH" | "NONE";
  extracted?: string;
  finding?: string;
};

const requirements: Requirement[] = [
  {
    id: 1,
    requirement: "GST Registration",
    condition: "Valid GST registration",
    status: "MET",
    evidence: "GST Certificate.pdf",
    verification: "GST identity verified",
    confidence: 96,
    severity: "NONE",
    extracted: "27ABCDE1234F1Z5",
    finding: "GSTIN and bidder identity are consistent.",
  },
  {
    id: 2,
    requirement: "PAN",
    condition: "Valid PAN matching bidder identity",
    status: "MET",
    evidence: "PAN_Certificate.pdf",
    verification: "PAN identity matched",
    confidence: 99,
    severity: "NONE",
    extracted: "ABCDE1234F",
    finding: "PAN holder name matches bidder identity.",
  },
  {
    id: 3,
    requirement: "Udyam / MSME Registration",
    condition: "Valid Udyam registration",
    status: "MET",
    evidence: "Udyam_Certificate.pdf",
    verification: "Udyam details matched",
    confidence: 94,
    severity: "NONE",
    extracted: "UDYAM-MH-12-0012345",
    finding: "Registration details match the bidder submission.",
  },
  {
    id: 4,
    requirement: "Minimum Annual Turnover",
    condition: "Minimum ₹10 Cr",
    status: "NOT MET",
    evidence: "Financial_Statement_2025.pdf",
    verification: "Financial evidence reviewed",
    confidence: 97,
    severity: "HIGH",
    extracted: "₹8.4 Cr",
    finding: "Submitted turnover is below the tender threshold.",
  },
  {
    id: 5,
    requirement: "Previous Experience",
    condition: "Minimum 3 similar projects",
    status: "NOT MET",
    evidence: "Experience_Portfolio.pdf",
    verification: "Experience evidence reviewed",
    confidence: 91,
    severity: "MEDIUM",
    extracted: "2 qualifying projects",
    finding: "Only 2 qualifying similar projects were identified.",
  },
  {
    id: 6,
    requirement: "OEM Authorization",
    condition: "Valid OEM authorization",
    status: "REVIEW REQUIRED",
    evidence: "OEM_Authorization.pdf",
    verification: "Document evidence review",
    confidence: 78,
    severity: "MEDIUM",
    extracted: "XYZ Manufacturing",
    finding:
      "OEM relationship and authorization scope could not be conclusively established.",
  },
  {
    id: 7,
    requirement: "Local Content",
    condition: "Minimum ≥50%",
    status: "REVIEW REQUIRED",
    evidence: "Local_Content_Declaration.pdf",
    verification: "Cross-document comparison",
    confidence: 88,
    severity: "HIGH",
    extracted: "Declaration: 62% | Supporting evidence: 41%",
    finding:
      "Local-content declaration is inconsistent with supporting evidence.",
  },
  {
    id: 8,
    requirement: "Blacklisting / Debarment",
    condition: "No active blacklist/debarment match",
    status: "CLEAR",
    evidence: "Blacklist_Screening_Result",
    verification: "Demo blacklist screening",
    confidence: 92,
    severity: "NONE",
    finding: "No match found in the demonstration dataset.",
  },
  {
    id: 9,
    requirement: "Bid Security",
    condition: "Valid bid security submitted",
    status: "MET",
    evidence: "Bid_Security.pdf",
    verification: "Document present",
    confidence: 95,
    severity: "NONE",
    finding: "Bid security document is present and valid.",
  },
  {
    id: 10,
    requirement: "Technical Specification",
    condition: "Equipment meets tender specifications",
    status: "MET",
    evidence: "Technical_Compliance.pdf",
    verification: "Specification comparison",
    confidence: 90,
    severity: "NONE",
    finding: "Submitted specifications satisfy listed parameters.",
  },
  {
    id: 11,
    requirement: "Financial Capacity",
    condition: "Adequate financial capacity",
    status: "MET",
    evidence: "Financial_Capacity.pdf",
    verification: "Financial evidence reviewed",
    confidence: 89,
    severity: "NONE",
    finding: "Financial capacity evidence is available for review.",
  },
  {
    id: 12,
    requirement: "Registered Office",
    condition: "Valid registered business address",
    status: "MET",
    evidence: "Company_Profile.pdf",
    verification: "Identity details matched",
    confidence: 93,
    severity: "NONE",
    finding: "Registered address is consistent across submitted records.",
  },
  {
    id: 13,
    requirement: "Tax Compliance",
    condition: "Tax compliance declaration",
    status: "MET",
    evidence: "Tax_Compliance.pdf",
    verification: "Declaration present",
    confidence: 90,
    severity: "NONE",
    finding: "Required tax compliance declaration was submitted.",
  },
  {
    id: 14,
    requirement: "Declaration of Non-Collusion",
    condition: "Signed declaration submitted",
    status: "MET",
    evidence: "Non_Collusion_Declaration.pdf",
    verification: "Signature/document check",
    confidence: 96,
    severity: "NONE",
    finding: "Required declaration is present.",
  },
  {
    id: 15,
    requirement: "Legal Entity Documentation",
    condition: "Valid incorporation/entity proof",
    status: "MET",
    evidence: "Incorporation_Certificate.pdf",
    verification: "Document present",
    confidence: 97,
    severity: "NONE",
    finding: "Legal entity documentation is available.",
  },
  {
    id: 16,
    requirement: "Authorized Signatory",
    condition: "Authorized person signs bid",
    status: "MET",
    evidence: "Authorization_Letter.pdf",
    verification: "Signatory evidence reviewed",
    confidence: 87,
    severity: "NONE",
    finding: "Authorized signatory evidence is present.",
  },
  {
    id: 17,
    requirement: "Banking Details",
    condition: "Valid bidder banking information",
    status: "MET",
    evidence: "Bank_Details.pdf",
    verification: "Document consistency check",
    confidence: 93,
    severity: "NONE",
    finding: "Banking details are consistent with bidder information.",
  },
  {
    id: 18,
    requirement: "Tender Declaration",
    condition: "All required tender declarations submitted",
    status: "MET",
    evidence: "Tender_Declarations.pdf",
    verification: "Submission completeness check",
    confidence: 95,
    severity: "NONE",
    finding: "Required tender declarations are present.",
  },
];

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    MET: "bg-emerald-50 text-emerald-700 border-emerald-200",
    CLEAR: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "REVIEW REQUIRED": "bg-amber-50 text-amber-700 border-amber-200",
    "NOT MET": "bg-red-50 text-red-700 border-red-200",
  };

  const icons: Record<Status, React.ReactNode> = {
    MET: <CheckCircle2 className="h-3.5 w-3.5" />,
    CLEAR: <ShieldCheck className="h-3.5 w-3.5" />,
    "REVIEW REQUIRED": <AlertTriangle className="h-3.5 w-3.5" />,
    "NOT MET": <XCircle className="h-3.5 w-3.5" />,
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  );
}

function SeverityBadge({ severity }: { severity: Requirement["severity"] }) {
  if (severity === "NONE") {
    return <span className="text-xs text-slate-400">—</span>;
  }

  const styles = {
    LOW: "text-slate-600 bg-slate-100",
    MEDIUM: "text-amber-700 bg-amber-50",
    HIGH: "text-red-700 bg-red-50",
  };

  return (
    <span
      className={`rounded px-2 py-1 text-[10px] font-bold ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}

export default function CompliancePage() {
  const [selected, setSelected] = useState<Requirement | null>(null);
  const [search, setSearch] = useState("");

  const filteredRequirements = requirements.filter((item) =>
    `${item.requirement} ${item.condition} ${item.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const met = requirements.filter(
    (r) => r.status === "MET" || r.status === "CLEAR"
  ).length;
  const review = requirements.filter(
    (r) => r.status === "REVIEW REQUIRED"
  ).length;
  const notMet = requirements.filter((r) => r.status === "NOT MET").length;

  return (
    <AppShell>
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* Demo Banner */}
        <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <Info className="h-4 w-4 shrink-0" />
          <span>
            <strong>DEMO ENVIRONMENT — SYNTHETIC DATA</strong>
            <span className="ml-2 text-amber-700">
              Verification results shown here are demonstration data.
            </span>
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Link
              href="/bidders/BID-2026-0047"
              className="mb-3 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bidder Investigation
            </Link>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Compliance Intelligence
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Requirement-level compliance assessment for procurement bids
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-xs font-medium text-red-600">Overall Risk</p>
              <p className="text-sm font-bold text-red-700">HIGH</p>
            </div>
          </div>
        </div>

        {/* Tender / Bidder Context */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-5 md:grid-cols-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Tender
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                GEM/2026/B/10482
              </p>
              <p className="text-xs text-slate-500">
                Industrial Pump Supply & Installation
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Organization
              </p>
              <p className="mt-1 font-semibold text-slate-900">CPCL</p>
              <p className="text-xs text-slate-500">
                Chennai Petroleum Corporation Limited
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Bidder
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                ABC Industrial Solutions
              </p>
              <p className="text-xs text-slate-500">BID-2026-0047</p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Recommendation
              </p>
              <p className="mt-1 font-semibold text-amber-700">
                REVIEW REQUIRED
              </p>
              <p className="text-xs text-slate-500">
                Officer assessment pending
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">Overall Compliance</p>
              <Scale className="h-5 w-5 text-slate-400" />
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-900">78%</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[78%] rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Evaluated</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">18</p>
            <p className="mt-1 text-xs text-slate-400">Requirements</p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
            <p className="text-sm text-emerald-700">Requirements Met</p>
            <p className="mt-3 text-3xl font-bold text-emerald-700">{met}</p>
            <p className="mt-1 text-xs text-emerald-600">Compliant</p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5">
            <p className="text-sm text-amber-700">Review Required</p>
            <p className="mt-3 text-3xl font-bold text-amber-700">{review}</p>
            <p className="mt-1 text-xs text-amber-600">Needs officer review</p>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50/40 p-5">
            <p className="text-sm text-red-700">Not Met</p>
            <p className="mt-3 text-3xl font-bold text-red-700">{notMet}</p>
            <p className="mt-1 text-xs text-red-600">Requirement gaps</p>
          </div>
        </div>

        {/* Matrix */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center">
            <div>
              <h2 className="font-semibold text-slate-900">
                Requirement Compliance Matrix
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Click any requirement to inspect its supporting evidence.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search requirements..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-slate-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3">Requirement</th>
                  <th className="px-4 py-3">Required Condition</th>
                  <th className="px-4 py-3">Result</th>
                  <th className="px-4 py-3">Evidence</th>
                  <th className="px-4 py-3">Verification</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredRequirements.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="cursor-pointer transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                          <FileText className="h-4 w-4 text-slate-500" />
                        </div>
                        <span className="font-medium text-slate-900">
                          {item.requirement}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-600">
                      {item.condition}
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                    <td className="px-4 py-4">
                      <span className="max-w-[180px] truncate text-sm text-slate-600">
                        {item.evidence}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm text-slate-600">
                      {item.verification}
                    </td>

                    <td className="px-4 py-4">
                      <SeverityBadge severity={item.severity} />
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                      {item.confidence}%
                    </td>

                    <td className="px-4 py-4">
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Review */}
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-50 p-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">
                  Why this bidder needs review
                </h2>
                <p className="text-xs text-slate-500">
                  Highest-impact compliance findings
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-lg border border-red-100 bg-red-50/50 p-4">
                <p className="font-medium text-red-800">
                  1. Turnover below required threshold
                </p>
                <p className="mt-1 text-sm text-red-700">
                  Required ₹10 Cr; submitted evidence indicates ₹8.4 Cr.
                </p>
              </div>

              <div className="rounded-lg border border-amber-100 bg-amber-50/50 p-4">
                <p className="font-medium text-amber-800">
                  2. Experience requirement not fully satisfied
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  Tender requires 3 similar projects; 2 qualifying projects
                  were identified.
                </p>
              </div>

              <div className="rounded-lg border border-red-100 bg-red-50/50 p-4">
                <p className="font-medium text-red-800">
                  3. Cross-document local-content inconsistency
                </p>
                <p className="mt-1 text-sm text-red-700">
                  Declaration states 62%, while supporting evidence indicates
                  41%.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-slate-100 p-2">
                <Gavel className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">
                  Compliance Decision Summary
                </h2>
                <p className="text-xs text-slate-500">
                  Decision-support overview
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-3">
                <span className="text-sm text-emerald-800">
                  Eligible / compliant requirements
                </span>
                <strong className="text-emerald-700">{met}</strong>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-amber-50 px-4 py-3">
                <span className="text-sm text-amber-800">
                  Requirements requiring review
                </span>
                <strong className="text-amber-700">{review}</strong>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-red-50 px-4 py-3">
                <span className="text-sm text-red-800">
                  Requirements not met
                </span>
                <strong className="text-red-700">{notMet}</strong>
              </div>

              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
                  Overall Recommendation
                </p>
                <p className="mt-1 text-lg font-bold text-amber-800">
                  REVIEW REQUIRED
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
          <p>
            <strong className="text-slate-800">Important:</strong> Compliance
            results are decision-support indicators generated from synthetic
            demonstration data. They do not constitute automatic qualification
            or disqualification. Final procurement decisions remain with the
            authorized Procurement Officer.
          </p>
        </div>

        {/* Evidence Detail Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Requirement Evidence
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {selected.requirement}
                  </h3>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>

              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <StatusBadge status={selected.status} />
                  <SeverityBadge severity={selected.severity} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">Required Condition</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {selected.condition}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">Submitted Evidence</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {selected.evidence}
                    </p>
                  </div>
                </div>

                {selected.extracted && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Extracted Evidence
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      {selected.extracted}
                    </p>
                  </div>
                )}

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Verification Result
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {selected.finding}
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      Evidence Confidence
                    </p>
                    <span className="font-bold text-slate-900">
                      {selected.confidence}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-slate-700"
                      style={{ width: `${selected.confidence}%` }}
                    />
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Demo AI extraction confidence
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Evidence → Requirement Mapping
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      ["1", "Tender Requirement", selected.condition],
                      ["2", "Submitted Document", selected.evidence],
                      [
                        "3",
                        "Extracted Evidence",
                        selected.extracted || "Document evidence reviewed",
                      ],
                      ["4", "Verification Result", selected.status],
                    ].map(([number, label, value]) => (
                      <div
                        key={number}
                        className="flex items-start gap-3 rounded-lg bg-slate-50 p-3"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                          {number}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-400">
                            {label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-slate-800">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <div className="flex gap-3">
                    <Clock3 className="h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm leading-6 text-amber-800">
                      This result is a decision-support indicator. The
                      Procurement Officer must review the underlying evidence
                      before making a final determination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 px-6 py-4">
                <button
                  onClick={() => setSelected(null)}
                  className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Close Evidence Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}