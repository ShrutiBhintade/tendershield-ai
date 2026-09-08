import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  FileText,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import AppShell from "@/components/layout/AppShell";

const requirements = [
  {
    name: "GST Registration",
    category: "Statutory",
    status: "VERIFIED",
    detail: "GSTIN matched against submitted registration evidence.",
  },
  {
    name: "PAN",
    category: "Statutory",
    status: "VERIFIED",
    detail: "PAN details are consistent across submitted documents.",
  },
  {
    name: "Udyam / MSME Status",
    category: "Eligibility",
    status: "VERIFIED",
    detail: "Udyam registration evidence identified and validated.",
  },
  {
    name: "Minimum Annual Turnover",
    category: "Financial",
    status: "REVIEW",
    detail: "Tender requires ₹10 Cr. Submitted evidence indicates ₹8.4 Cr.",
  },
  {
    name: "Previous Experience",
    category: "Technical",
    status: "NOT_MET",
    detail: "Required experience threshold is not fully supported.",
  },
  {
    name: "OEM Authorization",
    category: "Technical",
    status: "AMBIGUOUS",
    detail: "Authorization document requires manual verification.",
  },
  {
    name: "Local Content",
    category: "Make in India",
    status: "MISMATCH",
    detail: "Declared local content differs from supporting evidence.",
  },
  {
    name: "Blacklisting Declaration",
    category: "Eligibility",
    status: "CLEAR",
    detail: "No matching blacklist indicator found in demo data.",
  },
];

export default async function TenderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tenderId = decodeURIComponent(id);

  return (
    <AppShell>
      <div className="mx-auto max-w-[1500px]">
        {/* Back */}
        <Link
          href="/tenders"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tenders
        </Link>

        {/* Tender Header */}
        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                  {tenderId}
                </span>

                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  UNDER REVIEW
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Industrial Pump Supply & Installation
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Chennai Petroleum Corporation Limited
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Procurement category: Industrial Equipment · Demo tender
              </p>
            </div>

            <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
              Start Verification
            </button>
          </div>
        </section>

        {/* Summary */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            label="Overall Compliance"
            value="82%"
            icon={CheckCircle2}
          />

          <SummaryCard
            label="Risk Level"
            value="MEDIUM"
            icon={AlertTriangle}
          />

          <SummaryCard
            label="Bidders"
            value="7"
            icon={ShieldCheck}
          />

          <SummaryCard
            label="Requirements"
            value="18"
            icon={FileCheck2}
          />
        </div>

        {/* Requirement Blueprint */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-slate-100 p-2.5">
                <FileCheck2 className="h-5 w-5 text-slate-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Tender Compliance Blueprint
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Requirements identified from the tender and mapped to
                  verification evidence.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">
              <thead className="bg-slate-50">
                <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                  <th className="px-6 py-3">Requirement</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Evidence Intelligence</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {requirements.map((requirement) => (
                  <tr
                    key={requirement.name}
                    className="hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold">
                        {requirement.name}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-xs text-slate-500">
                        {requirement.category}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <RequirementStatus status={requirement.status} />
                    </td>

                    <td className="max-w-md px-6 py-4 text-xs leading-5 text-slate-500">
                      {requirement.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Evidence + Risk */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Evidence Mapping */}
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-slate-100 p-2.5">
                <FileText className="h-5 w-5 text-slate-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Evidence → Requirement Mapping
                </h3>

                <p className="text-xs text-slate-500">
                  Example evidence chain for the turnover requirement
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <EvidenceStep
                number="01"
                title="Tender Requirement"
                text="Minimum annual turnover: ₹10 Crore"
              />

              <EvidenceStep
                number="02"
                title="Submitted Evidence"
                text="Financial statement reports ₹8.4 Crore turnover"
              />

              <EvidenceStep
                number="03"
                title="Verification Evidence"
                text="Demo verification record indicates ₹6.9 Crore"
              />

              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="flex gap-3">
                  <CircleAlert className="h-5 w-5 shrink-0 text-red-600" />

                  <div>
                    <p className="text-sm font-semibold text-red-800">
                      Cross-document discrepancy detected
                    </p>

                    <p className="mt-1 text-xs leading-5 text-red-700">
                      The financial figures do not consistently support the
                      tender requirement. Manual review is recommended.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Intelligence */}
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-50 p-2.5">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>

              <div>
                <h3 className="font-semibold">Risk Intelligence</h3>

                <p className="text-xs text-slate-500">
                  Explainable indicators identified during analysis
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <RiskFactor
                title="Financial discrepancy"
                severity="HIGH"
                description="Reported and verified turnover values differ."
              />

              <RiskFactor
                title="Experience threshold"
                severity="MEDIUM"
                description="Submitted project history requires further review."
              />

              <RiskFactor
                title="OEM authorization"
                severity="MEDIUM"
                description="Authorization evidence is incomplete or ambiguous."
              />

              <RiskFactor
                title="Blacklist screening"
                severity="LOW"
                description="No matching blacklist indicator in demo data."
              />
            </div>

            <div className="mt-5 rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-700">
                Risk assessment
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Risk indicators are decision-support signals. They do not
                constitute proof of fraud or grounds for automatic
                disqualification.
              </p>
            </div>
          </section>
        </div>

        {/* Submitted Bidders */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold">Submitted Bidders</h3>

          <p className="mt-1 text-sm text-slate-500">
            Bidders who have submitted proposals for this tender.
          </p>

          <div className="mt-5 rounded-lg border border-slate-200">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
                  AS
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    ABC Industrial Solutions
                  </p>
                  <p className="text-xs text-slate-500">
                    Bidder ID: BID-2026-0047
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  78% Compliance
                </span>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                  HIGH Risk
                </span>
              </div>

              <Link
                href="/bidders/BID-2026-0047"
                className="shrink-0 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Investigate Bidder
              </Link>
            </div>
          </div>
        </section>

        {/* Officer Review */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="font-semibold">Officer Review</h3>

              <p className="mt-1 text-sm text-slate-500">
                Review AI findings before making the final procurement
                decision.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600">
                Request Clarification
              </button>

              <button className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
                Mark for Review
              </button>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function SummaryCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500">{label}</p>

        <Icon className="h-5 w-5 text-slate-500" />
      </div>

      <p className="mt-3 text-2xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

function RequirementStatus({ status }: { status: string }) {
  const config: Record<
    string,
    { label: string; className: string }
  > = {
    VERIFIED: {
      label: "Verified",
      className: "bg-emerald-50 text-emerald-700",
    },
    CLEAR: {
      label: "Clear",
      className: "bg-emerald-50 text-emerald-700",
    },
    REVIEW: {
      label: "Review",
      className: "bg-amber-50 text-amber-700",
    },
    AMBIGUOUS: {
      label: "Ambiguous",
      className: "bg-amber-50 text-amber-700",
    },
    MISMATCH: {
      label: "Mismatch",
      className: "bg-red-50 text-red-700",
    },
    NOT_MET: {
      label: "Not Met",
      className: "bg-red-50 text-red-700",
    },
  };

  const item = config[status];

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.className}`}
    >
      {item.label}
    </span>
  );
}

function EvidenceStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-lg border border-slate-200 p-4">
      <div className="text-xs font-bold text-slate-400">{number}</div>

      <div>
        <p className="text-xs font-semibold text-slate-700">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function RiskFactor({
  title,
  severity,
  description,
}: {
  title: string;
  severity: string;
  description: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 p-4">
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
        {severity}
      </span>
    </div>
  );
}