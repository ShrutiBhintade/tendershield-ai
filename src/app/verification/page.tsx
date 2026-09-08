"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  FileText,
  Search,
  ShieldCheck,
  X,
  XCircle,
} from "lucide-react";

const verifications = [
  {
    type: "GST Registration",
    status: "VERIFIED",
    keyValue: "27ABCDE1234F1Z5",
    finding: "Business name and registration details match submitted documents.",
    sourceLabel: "Demo GST Verification",
    icon: BadgeCheck,
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusIcon: CheckCircle2,
    evidence: {
      requirement: "Bidder must maintain a valid GST registration with matching legal name and address.",
      document: "GST_Certificate.pdf",
      extractedFields: [
        { label: "Extracted GSTIN", value: "27ABCDE1234F1Z5" },
        { label: "Registered Name", value: "ABC Industrial Solutions" },
        { label: "Registered Address", value: "Plot 45, MIDC Industrial Area, Pune, Maharashtra" },
        { label: "Registration Date", value: "15-Jan-2018" },
        { label: "Status", value: "Active" },
      ],
      verificationResult: "GSTIN and bidder identity are consistent. Registration is active and valid.",
      confidence: 96,
      mapping: [
        { step: "Requirement", content: "Valid GST registration with matching legal identity" },
        { step: "Submitted Document", content: "GST_Certificate.pdf" },
        { step: "Extracted Field", content: "GSTIN: 27ABCDE1234F1Z5 | Name: ABC Industrial Solutions" },
        { step: "Verification Result", content: "VERIFIED — GSTIN matches bidder records; registration active" },
      ],
    },
  },
  {
    type: "Udyam / MSME",
    status: "VERIFIED",
    keyValue: "UDYAM-MH-12-0012345",
    finding: "Registration details match bidder submission.",
    sourceLabel: "Demo Udyam Verification",
    icon: Building2,
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusIcon: CheckCircle2,
    evidence: {
      requirement: "Bidder must hold a valid Udyam registration as a Micro or Small Enterprise.",
      document: "Udyam_Certificate.pdf",
      extractedFields: [
        { label: "Udyam Number", value: "UDYAM-MH-12-0012345" },
        { label: "Enterprise Name", value: "ABC Industrial Solutions" },
        { label: "Classification", value: "Small Enterprise" },
        { label: "Major Activity", value: "Manufacturing" },
        { label: "Registration Date", value: "22-Mar-2019" },
      ],
      verificationResult: "Udyam registration is active. Enterprise name and classification match submission.",
      confidence: 94,
      mapping: [
        { step: "Requirement", content: "Valid Udyam/MSME registration" },
        { step: "Submitted Document", content: "Udyam_Certificate.pdf" },
        { step: "Extracted Field", content: "UDYAM-MH-12-0012345 | Small Enterprise | Manufacturing" },
        { step: "Verification Result", content: "VERIFIED — Registration active; name and class match" },
      ],
    },
  },
  {
    type: "PAN",
    status: "VERIFIED",
    keyValue: "ABCDE1234F",
    finding: "PAN holder name matches bidder identity.",
    sourceLabel: "Demo PAN Verification",
    icon: FileCheck2,
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusIcon: CheckCircle2,
    evidence: {
      requirement: "Bidder must provide a valid PAN matching the legal entity name.",
      document: "PAN_Card.pdf",
      extractedFields: [
        { label: "PAN", value: "ABCDE1234F" },
        { label: "Name on PAN", value: "ABC Industrial Solutions" },
        { label: "Date of Incorporation", value: "10-Jan-2018" },
      ],
      verificationResult: "PAN holder name matches bidder legal name. PAN is valid.",
      confidence: 99,
      mapping: [
        { step: "Requirement", content: "Valid PAN matching legal entity name" },
        { step: "Submitted Document", content: "PAN_Card.pdf" },
        { step: "Extracted Field", content: "ABCDE1234F | ABC Industrial Solutions" },
        { step: "Verification Result", content: "VERIFIED — PAN name matches bidder identity" },
      ],
    },
  },
  {
    type: "OEM Authorization",
    status: "REVIEW REQUIRED",
    keyValue: "—",
    finding: "Authorization letter exists, but OEM relationship could not be conclusively established from the submitted evidence.",
    sourceLabel: "Document Evidence Review",
    icon: Search,
    statusClass: "bg-amber-50 text-amber-700 border-amber-200",
    statusIcon: CircleAlert,
    evidence: {
      requirement: "Valid OEM authorization must be submitted for all products offered in the tender.",
      document: "OEM_Authorization.pdf",
      extractedFields: [
        { label: "Issuing Company", value: "XYZ Manufacturing Pvt Ltd" },
        { label: "Authorized Products", value: "Industrial Pumps (Model Series: XP-200, XP-300)" },
        { label: "Authorization Date", value: "05-Sep-2025" },
        { label: "Validity", value: "12 months from issue" },
        { label: "Signatory", value: "R. Sharma, Director – Channel Sales" },
      ],
      verificationResult: "OEM relationship could not be conclusively established. Authorization letter identifies manufacturer but does not clearly establish authorization for all products covered by this tender. Scope ambiguity requires officer review.",
      confidence: 78,
      mapping: [
        { step: "Requirement", content: "Valid OEM authorization for all tendered products" },
        { step: "Submitted Document", content: "OEM_Authorization.pdf" },
        { step: "Extracted Field", content: "XYZ Manufacturing | Models: XP-200, XP-300 | Valid 12 months" },
        { step: "Verification Result", content: "REVIEW REQUIRED — Scope ambiguity; not all tendered products clearly covered" },
      ],
    },
  },
  {
    type: "Blacklist / Debarment",
    status: "CLEAR",
    keyValue: "—",
    finding: "No match found in the demonstration blacklist dataset.",
    sourceLabel: "Demo Blacklist Screening",
    icon: ShieldCheck,
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusIcon: CheckCircle2,
    evidence: {
      requirement: "Bidder must not appear on any central or state government debarment/blacklist.",
      document: "Blacklist_Screening_Report.pdf",
      extractedFields: [
        { label: "Screening Date", value: "03-Sep-2026" },
        { label: "Databases Checked", value: "Central Public Procurement Portal, State Debarment Lists, GeM Blacklist" },
        { label: "Search Criteria", value: "Legal Name, GSTIN, PAN, Director DIN" },
        { label: "Matches Found", value: "0" },
      ],
      verificationResult: "No match found in the demonstration blacklist dataset across all screened databases.",
      confidence: 92,
      mapping: [
        { step: "Requirement", content: "No debarment or blacklist record" },
        { step: "Submitted Document", content: "Blacklist_Screening_Report.pdf" },
        { step: "Extracted Field", content: "0 matches across CPPP, State lists, GeM | Criteria: Name, GSTIN, PAN, DIN" },
        { step: "Verification Result", content: "CLEAR — No blacklist match detected in demo data" },
      ],
    },
  },
];

const timeline = [
  { time: "09:15 AM", event: "GST verification completed", status: "VERIFIED", color: "emerald" },
  { time: "09:18 AM", event: "Udyam verification completed", status: "VERIFIED", color: "emerald" },
  { time: "09:21 AM", event: "PAN verification completed", status: "VERIFIED", color: "emerald" },
  { time: "09:24 AM", event: "Blacklist screening completed", status: "CLEAR", color: "emerald" },
  { time: "09:28 AM", event: "OEM authorization flagged for review", status: "REVIEW REQUIRED", color: "amber" },
];

const summary = [
  { label: "Verified", count: 3, color: "emerald", icon: CheckCircle2 },
  { label: "Clear", count: 1, color: "emerald", icon: BadgeCheck },
  { label: "Review Required", count: 1, color: "amber", icon: CircleAlert },
  { label: "Failed", count: 0, color: "red", icon: XCircle },
];

export default function VerificationCenterPage() {
  const [selectedEvidence, setSelectedEvidence] = useState<typeof verifications[0] | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Demo banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs font-semibold tracking-wide text-amber-800">
        DEMO ENVIRONMENT — SYNTHETIC DATA
      </div>

      <main className="mx-auto max-w-[1400px] px-6 py-8">
        {/* Back */}
        <Link
          href="/bidders/BID-2026-0047"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Bidder
        </Link>

        {/* Header */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-950">Verification Center</h1>
                <p className="mt-1 text-sm text-slate-500">Validate bidder credentials and procurement eligibility</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  BID-2026-0047
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  REVIEW REQUIRED
                </span>
              </div>
            </div>

            {/* Bidder Summary */}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Bidder</p>
                <p className="mt-1 font-semibold text-slate-900">ABC Industrial Solutions</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Bidder ID</p>
                <p className="mt-1 font-semibold text-slate-900">BID-2026-0047</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tender</p>
                <p className="mt-1 font-semibold text-slate-900">GEM/2026/B/10482</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Cards */}
        <section className="mb-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-950">Verification Results</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {verifications.map((verification) => (
              <VerificationCard
                key={verification.type}
                verification={verification}
                onViewEvidence={() => setSelectedEvidence(verification)}
              />
            ))}
          </div>
        </section>

        {/* Verification Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-950">Verification Summary</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summary.map((item) => (
              <SummaryCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        {/* Verification Timeline */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-950">Verification Timeline</h2>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white">
            <div className="divide-y divide-slate-100">
              {timeline.map((item, index) => (
                <TimelineItem key={index} item={item} isLast={index === timeline.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-900">Decision-Support Only</p>
              <p className="mt-1 text-xs leading-5 text-amber-800">
                Verification results are decision-support indicators based on synthetic demonstration data.
                Final qualification or disqualification remains with the Procurement Officer.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Evidence Detail Modal */}
      {selectedEvidence && (
        <EvidenceModal
          verification={selectedEvidence}
          onClose={() => setSelectedEvidence(null)}
        />
      )}
    </div>
  );
}

function VerificationCard({
  verification,
  onViewEvidence,
}: {
  verification: (typeof verifications)[0];
  onViewEvidence: () => void;
}) {
  const Icon = verification.icon;
  const StatusIcon = verification.statusIcon;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-slate-100 p-2.5 shrink-0">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-slate-900">{verification.type}</h3>
              {verification.keyValue !== "—" && (
                <p className="mt-1 text-sm font-medium text-slate-700 font-mono">{verification.keyValue}</p>
              )}
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-bold ${verification.statusClass}`}>
              <StatusIcon className="h-3.5 w-3.5 inline mr-1" />
              {verification.status}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">{verification.finding}</p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-500">Source: {verification.sourceLabel}</span>
            <button
              onClick={onViewEvidence}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              View Evidence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EvidenceModal({
  verification,
  onClose,
}: {
  verification: (typeof verifications)[0];
  onClose: () => void;
}) {
  const { evidence } = verification;
  const statusIconMap: Record<string, React.ElementType> = {
    VERIFIED: CheckCircle2,
    CLEAR: CheckCircle2,
    "REVIEW REQUIRED": CircleAlert,
  };
  const statusClassMap: Record<string, string> = {
    VERIFIED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    CLEAR: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "REVIEW REQUIRED": "bg-amber-50 text-amber-700 border-amber-200",
  };
  const StatusIcon = statusIconMap[verification.status] || CircleAlert;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-xl">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-2.5">
              <verification.icon className="h-5 w-5 text-slate-700" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-950">{verification.type}</h2>
              <p className="text-xs text-slate-500">Source: {verification.sourceLabel}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${statusClassMap[verification.status]}`}>
              <StatusIcon className="h-3.5 w-3.5" />
              {verification.status}
            </span>
            <span className="text-xs text-slate-500">Verification Status</span>
          </div>

          {/* Requirement */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Requirement</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">{evidence.requirement}</p>
          </div>

          {/* Submitted Evidence */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Submitted Evidence</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Document</p>
                <p className="mt-1 text-sm font-medium text-slate-900 font-mono">{evidence.document}</p>
              </div>
              {evidence.extractedFields.map((field, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{field.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900 font-mono">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Result */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Verification Result</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">{evidence.verificationResult}</p>
          </div>

          {/* Evidence Confidence */}
          <div className="rounded-xl border border-slate-200 bg-amber-50/50 p-5">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-amber-600" />
              <h3 className="font-semibold text-slate-900">Evidence Confidence</h3>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className="text-3xl font-bold text-amber-700">{evidence.confidence}%</div>
              <div className="flex-1 h-2 rounded-full bg-amber-100">
                <div className="h-full rounded-full bg-amber-500" style={{ width: `${evidence.confidence}%` }} />
              </div>
            </div>
            <p className="mt-2 text-xs text-amber-800">Demo AI extraction confidence</p>
          </div>

          {/* Evidence → Requirement Mapping */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Evidence → Requirement Mapping</h3>
            </div>
            <div className="mt-4 space-y-4">
              {evidence.mapping.map((item, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className="flex-shrink-0 w-8 flex-col items-center">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                      {index + 1}
                    </div>
                    {index < evidence.mapping.length - 1 && (
                      <div className="absolute left-3 top-8 h-full w-0.5 bg-slate-200" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.step}</p>
                    <p className="mt-1 text-sm text-slate-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={onClose}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  count,
  color,
  icon: Icon,
}: {
  label: string;
  count: number;
  color: string;
  icon: React.ElementType;
}) {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
        <div className={`rounded-lg ${colorMap[color]} p-2`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{count}</p>
    </div>
  );
}

function TimelineItem({
  item,
  isLast,
}: {
  item: {
    time: string;
    event: string;
    status: string;
    color: string;
  };
  isLast: boolean;
}) {
  const colorMap: Record<string, { bg: string; text: string; dot: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    amber: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  };

  const colors = colorMap[item.color] || colorMap.emerald;

  return (
    <div className={`relative flex gap-4 px-5 py-4 ${isLast ? "" : "pb-4"}`}>
      <div className="flex-shrink-0 w-8 flex-col items-center">
        <div className={`h-3 w-3 rounded-full ${colors.dot} z-10`} />
        {!isLast && <div className="h-full w-0.5 bg-slate-200 mt-1" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{item.time}</span>
          <p className="text-sm text-slate-900">{item.event}</p>
        </div>
        <span className={`inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${colors.bg} ${colors.text}`}>
          {item.status}
        </span>
      </div>
    </div>
  );
}