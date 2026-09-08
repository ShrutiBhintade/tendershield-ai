"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileSearch,
  FileText,
  Filter,
  Search,
  ShieldCheck,
  Upload,
  XCircle,
} from "lucide-react";

type DocumentStatus =
  | "Verified"
  | "Review Required"
  | "Processing"
  | "Mismatch";

type DocumentItem = {
  id: string;
  name: string;
  type: string;
  bidder: string;
  tender: string;
  status: DocumentStatus;
  confidence: number;
  uploaded: string;
  issue: string;
};

const documents: DocumentItem[] = [
  {
    id: "DOC-2026-00142",
    name: "GST Registration Certificate",
    type: "GST",
    bidder: "Apex Infrastructure Pvt. Ltd.",
    tender: "TDR-2026-1042",
    status: "Verified",
    confidence: 98,
    uploaded: "8 min ago",
    issue: "No issue detected",
  },
  {
    id: "DOC-2026-00141",
    name: "Financial Statement FY 2024-25",
    type: "Financial",
    bidder: "Apex Infrastructure Pvt. Ltd.",
    tender: "TDR-2026-1042",
    status: "Mismatch",
    confidence: 91,
    uploaded: "9 min ago",
    issue: "Turnover differs across submitted evidence",
  },
  {
    id: "DOC-2026-00140",
    name: "OEM Authorization Letter",
    type: "OEM",
    bidder: "Bharat Engineering Works",
    tender: "TDR-2026-1038",
    status: "Review Required",
    confidence: 78,
    uploaded: "21 min ago",
    issue: "Issuer and product scope require verification",
  },
  {
    id: "DOC-2026-00139",
    name: "Experience Certificate",
    type: "Experience",
    bidder: "Metro Industrial Corp.",
    tender: "TDR-2026-1017",
    status: "Mismatch",
    confidence: 94,
    uploaded: "32 min ago",
    issue: "Evidence supports 3 years vs 5 years required",
  },
  {
    id: "DOC-2026-00138",
    name: "PAN Verification",
    type: "PAN",
    bidder: "Shree BuildTech Solutions",
    tender: "TDR-2026-1038",
    status: "Verified",
    confidence: 99,
    uploaded: "41 min ago",
    issue: "No issue detected",
  },
  {
    id: "DOC-2026-00137",
    name: "Udyam Registration Certificate",
    type: "Udyam",
    bidder: "GreenField Contractors",
    tender: "TDR-2026-1008",
    status: "Verified",
    confidence: 96,
    uploaded: "1 hr ago",
    issue: "No issue detected",
  },
  {
    id: "DOC-2026-00136",
    name: "Technical Compliance Sheet",
    type: "Technical",
    bidder: "National Engineering Works",
    tender: "TDR-2026-1029",
    status: "Processing",
    confidence: 0,
    uploaded: "1 hr ago",
    issue: "AI extraction in progress",
  },
  {
    id: "DOC-2026-00135",
    name: "Local Content Declaration",
    type: "Compliance",
    bidder: "Southern Process Systems",
    tender: "TDR-2026-1029",
    status: "Mismatch",
    confidence: 87,
    uploaded: "2 hrs ago",
    issue: "Declared local content differs from evidence",
  },
];

const statusClasses: Record<DocumentStatus, string> = {
  Verified: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Review Required": "border-amber-200 bg-amber-50 text-amber-700",
  Processing: "border-indigo-200 bg-indigo-50 text-indigo-700",
  Mismatch: "border-red-200 bg-red-50 text-red-700",
};

export default function DocumentsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<
    DocumentStatus | "All"
  >("All");
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentItem | null>(null);

  const documentTypes = [
    "All",
    "GST",
    "Financial",
    "OEM",
    "Experience",
    "PAN",
    "Udyam",
    "Technical",
    "Compliance",
  ];

  const filteredDocuments = useMemo(() => {
    const query = search.toLowerCase().trim();

    return documents.filter((document) => {
      const matchesType =
        typeFilter === "All" || document.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" || document.status === statusFilter;

      const matchesSearch =
        query === "" ||
        document.id.toLowerCase().includes(query) ||
        document.name.toLowerCase().includes(query) ||
        document.bidder.toLowerCase().includes(query) ||
        document.tender.toLowerCase().includes(query) ||
        document.type.toLowerCase().includes(query);

      return matchesType && matchesStatus && matchesSearch;
    });
  }, [search, typeFilter, statusFilter]);

  const verifiedCount = documents.filter(
    (document) => document.status === "Verified"
  ).length;

  const reviewCount = documents.filter(
    (document) => document.status === "Review Required"
  ).length;

  const mismatchCount = documents.filter(
    (document) => document.status === "Mismatch"
  ).length;

  const processingCount = documents.filter(
    (document) => document.status === "Processing"
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

                <div className="rounded-xl bg-indigo-100 p-2">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>

                <span className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                  Document Intelligence
                </span>

              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                Documents
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                Central workspace for submitted procurement documents,
                AI extraction, verification status, and cross-document
                inconsistencies.
              </p>

            </div>

            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              <Upload className="h-4 w-4" />
              Upload Document
            </button>

          </div>

        </section>

        {/* KPI CARDS */}
        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Documents Processed
              </p>

              <FileText className="h-5 w-5 text-indigo-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-slate-950">
              438
            </p>

            <p className="mt-1 text-xs text-slate-500">
              This month
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Verified
              </p>

              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-emerald-700">
              {verifiedCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Current sample
            </p>

          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Review Required
              </p>

              <Clock3 className="h-5 w-5 text-amber-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-amber-700">
              {reviewCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Awaiting officer review
            </p>

          </div>

          <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Mismatches
              </p>

              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-red-700">
              {mismatchCount}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Require investigation
            </p>

          </div>

        </section>

        {/* AI PROCESSING SUMMARY */}
        <section className="mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-white p-3 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-indigo-600" />
            </div>

            <div className="flex-1">

              <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                AI Document Intelligence
              </p>

              <h2 className="mt-1 text-lg font-bold text-indigo-950">
                Documents are automatically extracted, classified and
                cross-checked.
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-indigo-900">
                TenderShield AI analyses uploaded evidence, extracts important
                fields, compares them against tender requirements and
                identifies inconsistencies that may require officer review.
              </p>

            </div>

            <div className="hidden text-right md:block">

              <p className="text-xs font-semibold text-indigo-600">
                Processing
              </p>

              <p className="mt-1 text-2xl font-bold text-indigo-950">
                {processingCount}
              </p>

            </div>

          </div>

        </section>

        {/* SEARCH AND FILTERS */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

              <div className="relative flex-1">

                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search document, bidder, tender..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                />

              </div>

              <div className="flex items-center gap-2">

                <Filter className="h-4 w-4 text-slate-400" />

                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(
                      event.target.value as DocumentStatus | "All"
                    )
                  }
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="Verified">Verified</option>
                  <option value="Review Required">
                    Review Required
                  </option>
                  <option value="Processing">Processing</option>
                  <option value="Mismatch">Mismatch</option>
                </select>

              </div>

            </div>

            <div className="flex flex-wrap gap-2">

              {documentTypes.map((type) => (

                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={
                    "rounded-xl border px-3 py-2 text-xs font-bold transition " +
                    (typeFilter === type
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50")
                  }
                >
                  {type}
                </button>

              ))}

            </div>

          </div>

        </section>

        {/* DOCUMENT TABLE */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-lg font-bold text-slate-950">
                Document Repository
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {filteredDocuments.length} documents matching current filters.
              </p>

            </div>

            <div className="text-sm font-semibold text-slate-500">
              AI confidence enabled
            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1200px] text-left">

              <thead className="bg-slate-50">

                <tr className="border-b border-slate-200">

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Document
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Bidder
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Tender
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    AI Confidence
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Uploaded
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredDocuments.map((document) => (

                  <tr
                    key={document.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >

                    <td className="px-6 py-5">

                      <button
                        onClick={() => setSelectedDocument(document)}
                        className="flex items-center gap-3 text-left"
                      >

                        <div className="rounded-xl bg-slate-100 p-3">
                          <FileText className="h-5 w-5 text-slate-600" />
                        </div>

                        <div>

                          <p className="text-sm font-bold text-slate-900 hover:text-indigo-600">
                            {document.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {document.id} · {document.type}
                          </p>

                        </div>

                      </button>

                    </td>

                    <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                      {document.bidder}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {document.tender}
                    </td>

                    <td className="px-6 py-5">

                      {document.status === "Processing" ? (

                        <span className="text-sm font-semibold text-slate-400">
                          Processing...
                        </span>

                      ) : (

                        <div className="flex items-center gap-3">

                          <span className="w-10 text-sm font-bold text-slate-900">
                            {document.confidence}%
                          </span>

                          <div className="h-2 w-20 rounded-full bg-slate-100">

                            <div
                              className={
                                "h-2 rounded-full " +
                                (document.confidence >= 95
                                  ? "bg-emerald-500"
                                  : document.confidence >= 85
                                  ? "bg-indigo-500"
                                  : "bg-amber-500")
                              }
                              style={{
                                width: document.confidence + "%",
                              }}
                            />

                          </div>

                        </div>

                      )}

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={
                          "rounded-full border px-3 py-1 text-xs font-bold " +
                          statusClasses[document.status]
                        }
                      >
                        {document.status}
                      </span>

                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {document.uploaded}
                    </td>

                    <td className="px-6 py-5">

                      <button
                        onClick={() => setSelectedDocument(document)}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
                      >
                        View Analysis
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredDocuments.length === 0 && (

            <div className="p-12 text-center">

              <FileSearch className="mx-auto h-8 w-8 text-slate-300" />

              <p className="mt-3 font-semibold text-slate-700">
                No documents found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Try changing the search or filters.
              </p>

            </div>

          )}

        </section>

        {/* WORKFLOW */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">

          <button
            onClick={() => router.push("/verification")}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50"
          >

            <ShieldCheck className="h-6 w-6 text-indigo-600" />

            <p className="mt-4 font-bold text-slate-900">
              Verification Center
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Review verification results generated from submitted documents.
            </p>

          </button>

          <button
            onClick={() => router.push("/bidders")}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50"
          >

            <FileCheck2 className="h-6 w-6 text-indigo-600" />

            <p className="mt-4 font-bold text-slate-900">
              Bidder Investigation
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Inspect bidder evidence and cross-document risk indicators.
            </p>

          </button>

          <button
            onClick={() => router.push("/risk-alerts")}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-red-300 hover:bg-red-50"
          >

            <AlertTriangle className="h-6 w-6 text-red-600" />

            <p className="mt-4 font-bold text-slate-900">
              Risk Alerts
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Investigate documents that generated integrity or compliance alerts.
            </p>

          </button>

        </section>

        {/* DISCLAIMER */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-center text-xs leading-5 text-slate-500 shadow-sm">
          TenderShield AI uses AI-assisted document analysis to support procurement
          officers. Document mismatches and confidence scores are indicators
          for review and do not by themselves establish fraud or wrongdoing.
        </div>

      </main>

      {/* DOCUMENT DETAIL DRAWER */}
      {selectedDocument && (

        <div className="fixed inset-0 z-50">

          <button
            aria-label="Close document analysis"
            onClick={() => setSelectedDocument(null)}
            className="absolute inset-0 bg-slate-950/30"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {selectedDocument.id}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  {selectedDocument.name}
                </h2>

              </div>

              <button
                onClick={() => setSelectedDocument(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <XCircle className="h-5 w-5" />
              </button>

            </div>

            <div className="mt-6 flex flex-wrap gap-2">

              <span
                className={
                  "rounded-full border px-3 py-1 text-xs font-bold " +
                  statusClasses[selectedDocument.status]
                }
              >
                {selectedDocument.status}
              </span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
                {selectedDocument.type}
              </span>

            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Bidder
                </p>

                <p className="mt-2 text-sm font-bold text-slate-900">
                  {selectedDocument.bidder}
                </p>

              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Tender
                </p>

                <p className="mt-2 text-sm font-bold text-slate-900">
                  {selectedDocument.tender}
                </p>

              </div>

            </div>

            <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
                AI Extraction Confidence
              </p>

              <div className="mt-2 flex items-end gap-2">

                <span className="text-5xl font-bold text-indigo-950">
                  {selectedDocument.confidence}%
                </span>

              </div>

              <div className="mt-4 h-3 rounded-full bg-white">

                <div
                  className="h-3 rounded-full bg-indigo-500"
                  style={{
                    width: selectedDocument.confidence + "%",
                  }}
                />

              </div>

            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                AI Finding
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                {selectedDocument.issue}
              </p>

            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Processing Pipeline
              </p>

              <div className="mt-4 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-800">
                    Document received
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-800">
                    Text and fields extracted
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-800">
                    Requirement mapping completed
                  </span>
                </div>

                <div className="flex items-center gap-3">

                  {selectedDocument.status === "Verified" ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  ) : selectedDocument.status === "Processing" ? (
                    <Clock3 className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  )}

                  <span className="text-sm font-semibold text-slate-800">
                    Cross-document verification
                  </span>

                </div>

              </div>

            </div>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => router.push("/verification")}
                className="flex-1 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Open Verification
              </button>

              <button
                onClick={() => router.push("/bidders")}
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Investigate Bidder
              </button>

            </div>

          </aside>

        </div>

      )}

    </div>
  );
}