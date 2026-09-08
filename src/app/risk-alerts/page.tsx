"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  FileSearch,
  Search,
  ShieldAlert,
  TrendingUp,
  X,
} from "lucide-react";

type RiskLevel = "Critical" | "High" | "Medium" | "Low";

type AlertItem = {
  id: string;
  title: string;
  tenderId: string;
  bidder: string;
  level: RiskLevel;
  score: number;
  category: string;
  description: string;
  detected: string;
  status: string;
};

const alerts: AlertItem[] = [
  {
    id: "RA-001",
    title: "Unusual Bid Price Pattern",
    tenderId: "TDR-2026-1042",
    bidder: "Apex Infrastructure Pvt. Ltd.",
    level: "Critical",
    score: 91,
    category: "Bid Pattern",
    description:
      "Bid price is significantly different from the estimated market range and historical bidder behaviour.",
    detected: "8 min ago",
    status: "Open",
  },
  {
    id: "RA-002",
    title: "Repeated Tender Participation",
    tenderId: "TDR-2026-1038",
    bidder: "Shree BuildTech Solutions",
    level: "High",
    score: 84,
    category: "Participation",
    description:
      "Bidder has participated in multiple related tenders with unusually similar participation patterns.",
    detected: "21 min ago",
    status: "Open",
  },
  {
    id: "RA-003",
    title: "Document Verification Mismatch",
    tenderId: "TDR-2026-1029",
    bidder: "National Engineering Works",
    level: "High",
    score: 79,
    category: "Documents",
    description:
      "Important bidder information differs between submitted documents and verification records.",
    detected: "34 min ago",
    status: "Under Review",
  },
  {
    id: "RA-004",
    title: "Bid Submission Timing Anomaly",
    tenderId: "TDR-2026-1017",
    bidder: "Metro Construction Co.",
    level: "Medium",
    score: 63,
    category: "Timing",
    description:
      "Submission timing is unusual compared with the bidder's historical behaviour.",
    detected: "1 hr ago",
    status: "Open",
  },
  {
    id: "RA-005",
    title: "Low Financial Capacity",
    tenderId: "TDR-2026-1008",
    bidder: "GreenField Contractors",
    level: "Medium",
    score: 57,
    category: "Financial",
    description:
      "Financial capacity appears close to or below the minimum threshold specified by the tender.",
    detected: "2 hrs ago",
    status: "Open",
  },
  {
    id: "RA-006",
    title: "Clean Verification Record",
    tenderId: "TDR-2026-0998",
    bidder: "Reliable Systems India",
    level: "Low",
    score: 12,
    category: "Verification",
    description:
      "No significant integrity concerns were detected during automated verification.",
    detected: "3 hrs ago",
    status: "Resolved",
  },
];

const riskClasses: Record<RiskLevel, string> = {
  Critical: "border-red-200 bg-red-50 text-red-700",
  High: "border-orange-200 bg-orange-50 text-orange-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  Low: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

const statusClasses: Record<string, string> = {
  Open: "border-red-200 bg-red-50 text-red-700",
  "Under Review": "border-amber-200 bg-amber-50 text-amber-700",
  Resolved: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

export default function RiskAlertsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState<RiskLevel | "All">("All");
  const [selectedAlert, setSelectedAlert] = useState<AlertItem | null>(null);

  const filteredAlerts = useMemo(() => {
    const query = search.toLowerCase().trim();

    return alerts.filter((alert) => {
      const matchesRisk =
        riskFilter === "All" || alert.level === riskFilter;

      const matchesSearch =
        query === "" ||
        alert.id.toLowerCase().includes(query) ||
        alert.title.toLowerCase().includes(query) ||
        alert.tenderId.toLowerCase().includes(query) ||
        alert.bidder.toLowerCase().includes(query) ||
        alert.category.toLowerCase().includes(query);

      return matchesRisk && matchesSearch;
    });
  }, [search, riskFilter]);

  const investigateBidder = (alert: AlertItem) => {
    const params = new URLSearchParams();

    params.set("bidder", alert.bidder);
    params.set("tender", alert.tenderId);
    params.set("riskScore", String(alert.score));
    params.set("riskLevel", alert.level);
    params.set("alert", alert.title);

    router.push("/bidders?" + params.toString());
  };

  const criticalCount = alerts.filter(
    (alert) => alert.level === "Critical"
  ).length;

  const highCount = alerts.filter(
    (alert) => alert.level === "High"
  ).length;

  const mediumCount = alerts.filter(
    (alert) => alert.level === "Medium"
  ).length;

  const lowCount = alerts.filter(
    (alert) => alert.level === "Low"
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* DEMO BANNER */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2 text-center text-xs font-semibold tracking-wide text-amber-800">
        DEMO ENVIRONMENT — SYNTHETIC DATA
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-8">

        {/* HEADER */}
        <section className="mb-6">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-xl bg-red-100 p-2">
                  <ShieldAlert className="h-5 w-5 text-red-600" />
                </div>

                <span className="text-sm font-bold uppercase tracking-wide text-red-600">
                  Integrity Monitoring
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                Risk Alerts
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                AI-generated procurement integrity alerts highlighting unusual
                bidding behaviour, document inconsistencies, financial risks,
                and other indicators requiring officer attention.
              </p>

            </div>

            <button
              onClick={() => router.push("/bidders")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              <FileSearch className="h-4 w-4" />
              Open Bidder Investigation
            </button>

          </div>

        </section>

        {/* KPI CARDS */}
        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Critical Alerts
              </p>

              <CircleAlert className="h-5 w-5 text-red-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-red-700">
              {criticalCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Immediate attention
            </p>

          </div>

          <div className="rounded-2xl border border-orange-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                High Risk
              </p>

              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-orange-700">
              {highCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Investigation recommended
            </p>

          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Medium Risk
              </p>

              <TrendingUp className="h-5 w-5 text-amber-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-amber-700">
              {mediumCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Monitor and review
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Low Risk
              </p>

              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-emerald-700">
              {lowCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              No immediate concern
            </p>

          </div>

        </section>

        {/* AI SUMMARY */}
        <section className="mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-white p-3 shadow-sm">
              <BarChart3 className="h-5 w-5 text-indigo-600" />
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                Procurement AI Summary
              </p>

              <h2 className="mt-1 text-lg font-bold text-indigo-950">
                Financial and bidder-behaviour signals require the most attention.
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-indigo-900">
                The current monitoring cycle detected multiple high-confidence
                signals involving bid pricing, repeated participation, and
                document inconsistencies. These signals should be investigated
                using the bidder evidence and audit trail before any procurement
                decision is made.
              </p>

            </div>

          </div>

        </section>

        {/* RISK DISTRIBUTION */}
        <section className="mb-6 grid gap-6 lg:grid-cols-[1fr_360px]">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Risk Distribution
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Current alerts grouped by severity.
                </p>
              </div>

              <span className="text-sm font-bold text-slate-700">
                {alerts.length} alerts
              </span>

            </div>

            <div className="mt-6 space-y-5">

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">
                    Critical
                  </span>

                  <span className="font-bold text-red-600">
                    {criticalCount}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-red-500"
                    style={{
                      width: (criticalCount / alerts.length) * 100 + "%",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">
                    High
                  </span>

                  <span className="font-bold text-orange-600">
                    {highCount}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-orange-500"
                    style={{
                      width: (highCount / alerts.length) * 100 + "%",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">
                    Medium
                  </span>

                  <span className="font-bold text-amber-600">
                    {mediumCount}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-amber-500"
                    style={{
                      width: (mediumCount / alerts.length) * 100 + "%",
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-700">
                    Low
                  </span>

                  <span className="font-bold text-emerald-600">
                    {lowCount}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-100">
                  <div
                    className="h-3 rounded-full bg-emerald-500"
                    style={{
                      width: (lowCount / alerts.length) * 100 + "%",
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-slate-950">
              Investigation Queue
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Priority cases for procurement officers.
            </p>

            <div className="mt-5 space-y-3">

              {alerts
                .filter(
                  (alert) =>
                    alert.level === "Critical" ||
                    alert.level === "High"
                )
                .map((alert) => (
                  <button
                    key={alert.id}
                    onClick={() => investigateBidder(alert)}
                    className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-bold text-slate-500">
                        {alert.id}
                      </span>

                      <ChevronRight className="h-4 w-4 text-slate-400" />

                    </div>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      {alert.bidder}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Risk score: {alert.score}/100
                    </p>

                  </button>
                ))}

            </div>

          </div>

        </section>

        {/* FILTERS */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-md">

              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search bidder, tender, alert..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
              />

            </div>

            <div className="flex flex-wrap gap-2">

              {(["All", "Critical", "High", "Medium", "Low"] as const).map(
                (level) => (
                  <button
                    key={level}
                    onClick={() => setRiskFilter(level)}
                    className={
                      "rounded-xl border px-4 py-2 text-sm font-bold transition " +
                      (riskFilter === level
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50")
                    }
                  >
                    {level}
                  </button>
                )
              )}

            </div>

          </div>

        </section>

        {/* ALERT TABLE */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 p-6">

            <h2 className="text-lg font-bold text-slate-950">
              Active Risk Alerts
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select an alert to inspect the detection details.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1100px] text-left">

              <thead className="bg-slate-50">

                <tr className="border-b border-slate-200">

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Alert
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Bidder
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Tender
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Risk
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Score
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredAlerts.map((alert) => (

                  <tr
                    key={alert.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >

                    <td className="px-6 py-5">

                      <button
                        onClick={() => setSelectedAlert(alert)}
                        className="text-left"
                      >

                        <p className="text-sm font-bold text-slate-900 hover:text-indigo-600">
                          {alert.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {alert.id} · {alert.category}
                        </p>

                      </button>

                    </td>

                    <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                      {alert.bidder}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {alert.tenderId}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={
                          "rounded-full border px-3 py-1 text-xs font-bold " +
                          riskClasses[alert.level]
                        }
                      >
                        {alert.level}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <span className="w-8 text-sm font-bold text-slate-900">
                          {alert.score}
                        </span>

                        <div className="h-2 w-20 rounded-full bg-slate-100">

                          <div
                            className={
                              "h-2 rounded-full " +
                              (alert.level === "Critical"
                                ? "bg-red-500"
                                : alert.level === "High"
                                ? "bg-orange-500"
                                : alert.level === "Medium"
                                ? "bg-amber-500"
                                : "bg-emerald-500")
                            }
                            style={{
                              width: alert.score + "%",
                            }}
                          />

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={
                          "rounded-full border px-3 py-1 text-xs font-bold " +
                          statusClasses[alert.status]
                        }
                      >
                        {alert.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <button
                        onClick={() => investigateBidder(alert)}
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-indigo-700"
                      >
                        Investigate
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredAlerts.length === 0 && (
            <div className="p-12 text-center">

              <Search className="mx-auto h-8 w-8 text-slate-300" />

              <p className="mt-3 font-semibold text-slate-700">
                No alerts found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Try changing the search or risk filter.
              </p>

            </div>
          )}

        </section>

        {/* EXPLANATION */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-950">
            How TenderShield AI Generates Risk Alerts
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

              <p className="font-bold text-slate-900">
                01 · Detect
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                AI analyses tender, bidder, document, pricing and participation
                signals to identify unusual patterns.
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

              <p className="font-bold text-slate-900">
                02 · Score
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Multiple signals are combined into an explainable risk score
                instead of relying on a single black-box prediction.
              </p>

            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

              <p className="font-bold text-slate-900">
                03 · Investigate
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Officers can open the bidder investigation workspace and inspect
                evidence before making a procurement decision.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* DETAIL DRAWER */}
      {selectedAlert && (

        <div className="fixed inset-0 z-50">

          <button
            aria-label="Close alert details"
            onClick={() => setSelectedAlert(null)}
            className="absolute inset-0 bg-slate-950/30"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {selectedAlert.id}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  {selectedAlert.title}
                </h2>

              </div>

              <button
                onClick={() => setSelectedAlert(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            <div className="mt-6 flex flex-wrap gap-2">

              <span
                className={
                  "rounded-full border px-3 py-1 text-xs font-bold " +
                  riskClasses[selectedAlert.level]
                }
              >
                {selectedAlert.level} Risk
              </span>

              <span
                className={
                  "rounded-full border px-3 py-1 text-xs font-bold " +
                  statusClasses[selectedAlert.status]
                }
              >
                {selectedAlert.status}
              </span>

            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Risk Score
              </p>

              <div className="mt-2 flex items-end gap-2">

                <span className="text-5xl font-bold text-slate-950">
                  {selectedAlert.score}
                </span>

                <span className="mb-1 text-sm text-slate-500">
                  / 100
                </span>

              </div>

            </div>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Bidder
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  {selectedAlert.bidder}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tender
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  {selectedAlert.tenderId}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Detection
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {selectedAlert.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Detected
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {selectedAlert.detected}
                </p>
              </div>

            </div>

            <button
              onClick={() => investigateBidder(selectedAlert)}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              Open Bidder Investigation
              <ArrowRight className="h-4 w-4" />
            </button>

          </aside>

        </div>

      )}

    </div>
  );
}