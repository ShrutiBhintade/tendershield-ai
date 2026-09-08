"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  FileCheck2,
  FileText,
  Filter,
  Search,
  ShieldCheck,
  UserRound,
  X,
  Zap,
} from "lucide-react";

type AuditEvent = {
  id: string;
  timestamp: string;
  action: string;
  description: string;
  actor: string;
  role: "AI Engine" | "Procurement Officer" | "System";
  entity: string;
  entityType: "Document" | "Bidder" | "Tender" | "Risk Alert" | "Verification";
  result: "Success" | "Warning" | "Critical" | "Info";
  reference: string;
};

const auditEvents: AuditEvent[] = [
  {
    id: "AUD-2026-0847",
    timestamp: "28 Sep 2026, 14:42",
    action: "Risk Alert Generated",
    description:
      "AI detected an unusual bid price pattern and generated a critical risk alert.",
    actor: "Procurement AI",
    role: "AI Engine",
    entity: "Apex Infrastructure Pvt. Ltd.",
    entityType: "Risk Alert",
    result: "Critical",
    reference: "RA-001",
  },
  {
    id: "AUD-2026-0846",
    timestamp: "28 Sep 2026, 14:40",
    action: "Risk Score Updated",
    description:
      "Bidder risk score recalculated after cross-document financial verification.",
    actor: "Risk Engine",
    role: "AI Engine",
    entity: "Apex Infrastructure Pvt. Ltd.",
    entityType: "Bidder",
    result: "Warning",
    reference: "BID-2026-0047",
  },
  {
    id: "AUD-2026-0845",
    timestamp: "28 Sep 2026, 14:38",
    action: "Financial Discrepancy Detected",
    description:
      "Declared turnover differs from the financial evidence extracted from submitted documents.",
    actor: "Document Intelligence",
    role: "AI Engine",
    entity: "Financial Statement FY 2024-25",
    entityType: "Document",
    result: "Warning",
    reference: "DOC-2026-0318",
  },
  {
    id: "AUD-2026-0844",
    timestamp: "28 Sep 2026, 14:35",
    action: "Document Verification Completed",
    description:
      "GST registration details successfully cross-verified against submitted bidder information.",
    actor: "Verification Engine",
    role: "AI Engine",
    entity: "GST Registration Certificate",
    entityType: "Verification",
    result: "Success",
    reference: "VER-2026-0921",
  },
  {
    id: "AUD-2026-0843",
    timestamp: "28 Sep 2026, 14:31",
    action: "Investigation Opened",
    description:
      "Procurement officer opened a detailed bidder investigation from the risk alert queue.",
    actor: "Ananya Sharma",
    role: "Procurement Officer",
    entity: "Apex Infrastructure Pvt. Ltd.",
    entityType: "Bidder",
    result: "Info",
    reference: "INV-2026-0174",
  },
  {
    id: "AUD-2026-0842",
    timestamp: "28 Sep 2026, 14:26",
    action: "OCR & Extraction Completed",
    description:
      "Document text and structured fields were extracted from the uploaded financial statement.",
    actor: "Document Intelligence",
    role: "AI Engine",
    entity: "Financial Statement FY 2024-25",
    entityType: "Document",
    result: "Success",
    reference: "DOC-2026-0318",
  },
  {
    id: "AUD-2026-0841",
    timestamp: "28 Sep 2026, 14:22",
    action: "Document Uploaded",
    description:
      "New financial statement uploaded for automated document intelligence processing.",
    actor: "Procurement Portal",
    role: "System",
    entity: "Financial Statement FY 2024-25",
    entityType: "Document",
    result: "Info",
    reference: "DOC-2026-0318",
  },
  {
    id: "AUD-2026-0840",
    timestamp: "28 Sep 2026, 13:58",
    action: "Clarification Requested",
    description:
      "Officer requested clarification regarding the bidder's experience certificate.",
    actor: "Rahul Mehta",
    role: "Procurement Officer",
    entity: "Metro Industrial Corp.",
    entityType: "Bidder",
    result: "Warning",
    reference: "REQ-2026-0082",
  },
  {
    id: "AUD-2026-0839",
    timestamp: "28 Sep 2026, 13:45",
    action: "Compliance Check Completed",
    description:
      "Automated compliance evaluation completed for tender eligibility requirements.",
    actor: "Compliance Engine",
    role: "AI Engine",
    entity: "TDR-2026-1029",
    entityType: "Tender",
    result: "Success",
    reference: "CMP-2026-0149",
  },
  {
    id: "AUD-2026-0838",
    timestamp: "28 Sep 2026, 13:32",
    action: "Blacklist Screening Completed",
    description:
      "Bidder screened against available blacklist and adverse-record datasets.",
    actor: "Integrity Engine",
    role: "AI Engine",
    entity: "National Engineering Works",
    entityType: "Bidder",
    result: "Success",
    reference: "SCR-2026-0441",
  },
];

const resultStyles = {
  Success: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: CheckCircle2,
  },
  Warning: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    icon: AlertTriangle,
  },
  Critical: {
    badge: "bg-red-50 text-red-700 border-red-200",
    icon: AlertTriangle,
  },
  Info: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: Activity,
  },
};

const entityIcons = {
  Document: FileText,
  Bidder: UserRound,
  Tender: FileCheck2,
  "Risk Alert": AlertTriangle,
  Verification: ShieldCheck,
};

export default function AuditTrailPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [resultFilter, setResultFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<AuditEvent | null>(null);

  const filteredEvents = useMemo(() => {
    return auditEvents.filter((event) => {
      const matchesSearch =
        event.action.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase()) ||
        event.entity.toLowerCase().includes(search.toLowerCase()) ||
        event.reference.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "All" || event.role === roleFilter;

      const matchesResult =
        resultFilter === "All" || event.result === resultFilter;

      return matchesSearch && matchesRole && matchesResult;
    });
  }, [search, roleFilter, resultFilter]);

  const navigateToEntity = (event: AuditEvent) => {
    if (event.entityType === "Bidder") {
      router.push(
        "/bidders?bidder=" + encodeURIComponent(event.entity)
      );
    } else if (event.entityType === "Risk Alert") {
      router.push("/risk-alerts");
    } else if (event.entityType === "Document") {
      router.push("/documents");
    } else if (event.entityType === "Verification") {
      router.push("/verification");
    } else if (event.entityType === "Tender") {
      router.push("/tenders");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Demo Banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2.5">
        <div className="mx-auto flex max-w-[1600px] items-center gap-2 text-sm text-amber-800">
          <Zap className="h-4 w-4" />
          <span>
            <strong>Demo Mode:</strong> Audit events shown below are
            representative system records for the TenderShield AI prototype.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] p-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <span>Audit Trail</span>
              <span>/</span>
              <span>System Activity</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Immutable Activity Record
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Complete traceability of AI decisions, verification events,
              officer actions and procurement activity.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Export Audit Log
          </button>
        </div>

        {/* KPI Cards */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            title="Total Events"
            value="2,847"
            subtitle="+184 this month"
            icon={Activity}
          />

          <KpiCard
            title="AI Actions"
            value="1,964"
            subtitle="69% of all events"
            icon={Bot}
          />

          <KpiCard
            title="Officer Actions"
            value="642"
            subtitle="22.5% of all events"
            icon={UserRound}
          />

          <KpiCard
            title="Risk Alerts Generated"
            value="241"
            subtitle="18 critical findings"
            icon={AlertTriangle}
          />
        </div>

        {/* AI Integrity Summary */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                <ShieldCheck className="h-5 w-5 text-indigo-600" />
              </div>

              <div>
                <h2 className="font-semibold text-slate-950">
                  Procurement Integrity Timeline
                </h2>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
                  Every significant system action is recorded with its
                  timestamp, actor, entity, outcome and reference ID.
                  This creates an explainable chain from document ingestion
                  to AI finding and officer decision.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Audit integrity verified
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events, entities, actions or reference IDs..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <FilterSelect
              value={roleFilter}
              onChange={setRoleFilter}
              options={[
                "All",
                "AI Engine",
                "Procurement Officer",
                "System",
              ]}
            />

            <FilterSelect
              value={resultFilter}
              onChange={setResultFilter}
              options={["All", "Success", "Warning", "Critical", "Info"]}
            />

            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-500">
              <Filter className="h-4 w-4" />
              {filteredEvents.length} events
            </div>
          </div>
        </section>

        {/* Audit Table */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-950">
                  Activity Records
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Chronological record of procurement intelligence events
                </p>
              </div>

              <div className="hidden items-center gap-2 text-xs text-slate-400 md:flex">
                <Clock3 className="h-4 w-4" />
                Latest first
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3">Timestamp</th>
                  <th className="px-5 py-3">Activity</th>
                  <th className="px-5 py-3">Actor</th>
                  <th className="px-5 py-3">Entity</th>
                  <th className="px-5 py-3">Result</th>
                  <th className="px-5 py-3">Reference</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>

              <tbody>
                {filteredEvents.map((event) => {
                  const result = resultStyles[event.result];
                  const ResultIcon = result.icon;
                  const EntityIcon = entityIcons[event.entityType];

                  return (
                    <tr
                      key={event.id}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-5 py-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <Clock3 className="h-4 w-4 text-slate-400" />
                          {event.timestamp}
                        </div>
                        <p className="mt-1 pl-6 text-[11px] text-slate-400">
                          {event.id}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold text-slate-900">
                          {event.action}
                        </p>
                        <p className="mt-1 max-w-[360px] text-xs leading-5 text-slate-500">
                          {event.description}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                            {event.role === "AI Engine" ? (
                              <Bot className="h-4 w-4 text-indigo-600" />
                            ) : event.role === "System" ? (
                              <Zap className="h-4 w-4 text-slate-500" />
                            ) : (
                              <UserRound className="h-4 w-4 text-slate-600" />
                            )}
                          </div>

                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {event.actor}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              {event.role}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <EntityIcon className="h-4 w-4 text-slate-400" />
                          <div>
                            <p className="max-w-[210px] truncate text-sm font-medium text-slate-800">
                              {event.entity}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              {event.entityType}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={
                            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold " +
                            result.badge
                          }
                        >
                          <ResultIcon className="h-3.5 w-3.5" />
                          {event.result}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600">
                          {event.reference}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
                        >
                          Details
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredEvents.length === 0 && (
              <div className="px-6 py-16 text-center">
                <Search className="mx-auto h-8 w-8 text-slate-300" />
                <h3 className="mt-3 font-semibold text-slate-800">
                  No audit events found
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Integrity Footer */}
        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <IntegrityCard
            icon={ShieldCheck}
            title="Traceability"
            text="Every AI finding can be traced back to the source document, bidder and tender."
          />

          <IntegrityCard
            icon={Bot}
            title="Explainable AI"
            text="AI-generated actions are recorded with their event type and outcome for review."
          />

          <IntegrityCard
            icon={UserRound}
            title="Human Oversight"
            text="Officer actions remain visible alongside automated system activity."
          />
        </section>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
          <strong className="text-slate-700">Important:</strong> Audit
          records shown in this prototype are simulated. In production,
          these events should be stored in an append-only audit store with
          role-based access control, timestamps, integrity checks and
          retention policies.
        </div>
      </div>

      {/* Detail Drawer */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close audit event"
            onClick={() => setSelectedEvent(null)}
            className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto border-l border-slate-200 bg-white shadow-2xl">
            <div className="sticky top-0 border-b border-slate-200 bg-white px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    Audit Event
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    {selectedEvent.action}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-slate-400">
                    {selectedEvent.id}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-6 p-6">
              <div
                className={
                  "rounded-xl border p-4 " +
                  resultStyles[selectedEvent.result].badge
                }
              >
                <div className="flex items-center gap-2">
                  {(() => {
                    const Icon = resultStyles[selectedEvent.result].icon;
                    return <Icon className="h-5 w-5" />;
                  })()}
                  <span className="font-semibold">
                    {selectedEvent.result} Event
                  </span>
                </div>
              </div>

              <DetailRow
                label="Timestamp"
                value={selectedEvent.timestamp}
              />

              <DetailRow
                label="Description"
                value={selectedEvent.description}
              />

              <DetailRow
                label="Actor"
                value={selectedEvent.actor}
              />

              <DetailRow
                label="Role"
                value={selectedEvent.role}
              />

              <DetailRow
                label="Entity"
                value={selectedEvent.entity}
              />

              <DetailRow
                label="Entity Type"
                value={selectedEvent.entityType}
              />

              <DetailRow
                label="Reference ID"
                value={selectedEvent.reference}
                mono
              />

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Integrity Metadata
                </p>

                <div className="mt-3 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between gap-4">
                    <span>Event status</span>
                    <span className="font-medium text-emerald-600">
                      Recorded
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Source</span>
                    <span className="font-medium">
                      TenderShield AI Intelligence Layer
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Audit sequence</span>
                    <span className="font-mono font-medium">
                      #{selectedEvent.id.replace("AUD-2026-", "")}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigateToEntity(selectedEvent)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Open Related Entity
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

function KpiCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
          <Icon className="h-5 w-5 text-indigo-600" />
        </div>
      </div>

      <p className="mt-3 text-xs font-medium text-slate-400">{subtitle}</p>
    </div>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}

function DetailRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p
        className={
          "mt-1 text-sm leading-6 text-slate-800 " +
          (mono ? "font-mono" : "")
        }
      >
        {value}
      </p>
    </div>
  );
}

function IntegrityCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
        <Icon className="h-5 w-5 text-slate-700" />
      </div>

      <h3 className="mt-4 font-semibold text-slate-950">{title}</h3>

      <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}