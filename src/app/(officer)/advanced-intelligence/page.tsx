"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  FileSearch,
  Fingerprint,
  GitBranch,
  LockKeyhole,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type IntelligenceModule = "forensics" | "network" | "local-ai";

const modules = [
  {
    id: "forensics" as IntelligenceModule,
    title: "Document Forensics",
    shortTitle: "Document Forensics",
    description:
      "Analyze procurement documents for suspicious integrity signals, metadata anomalies and potential manipulation indicators.",
    icon: FileSearch,
    status: "Advanced Analysis",
    statusClass: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "network" as IntelligenceModule,
    title: "Bidder Network Intelligence",
    shortTitle: "Bidder Network",
    description:
      "Map relationships between bidders, tenders and shared entities to surface unusual participation and relationship patterns.",
    icon: Network,
    status: "Graph Intelligence",
    statusClass: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "local-ai" as IntelligenceModule,
    title: "Privacy-Preserving Local AI",
    shortTitle: "Local AI",
    description:
      "Architecture for processing sensitive procurement intelligence within a controlled environment without sending documents to public AI services.",
    icon: LockKeyhole,
    status: "Architecture / Prototype",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export default function AdvancedIntelligencePage() {
  const [activeModule, setActiveModule] =
    useState<IntelligenceModule>("forensics");

  const active = modules.find((module) => module.id === activeModule)!;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Demo Banner */}
      <div className="mb-6 flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Demo Environment
            </p>
            <p className="text-sm text-amber-700">
              Advanced intelligence results use synthetic procurement data.
            </p>
          </div>
        </div>

        <span className="hidden rounded-full border border-amber-300 bg-white px-3 py-1 text-[11px] font-bold text-amber-700 sm:inline-flex">
          SYNTHETIC DATA
        </span>
      </div>

      {/* Header */}
      <section className="mb-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Advanced Intelligence Center
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Beyond basic compliance.
            </h1>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Advanced intelligence capabilities designed to surface deeper
              procurement integrity signals while keeping the officer in
              control of the final decision.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Active Investigation
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              GEM/2026/B/10482
            </p>
            <p className="text-xs text-slate-500">
              ABC Industrial Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Intelligence Modules */}
      <section className="mb-8 grid gap-4 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() => setActiveModule(module.id)}
              className={`group rounded-2xl border p-5 text-left transition-all ${
                isActive
                  ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    isActive
                      ? "translate-x-0 text-white"
                      : "text-slate-400 group-hover:translate-x-0.5"
                  }`}
                />
              </div>

              <div className="mt-5">
                <div
                  className={`mb-2 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    isActive
                      ? "border-white/20 bg-white/10 text-white"
                      : module.statusClass
                  }`}
                >
                  {module.status}
                </div>

                <h2
                  className={`text-lg font-bold ${
                    isActive ? "text-white" : "text-slate-950"
                  }`}
                >
                  {module.title}
                </h2>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    isActive ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {module.description}
                </p>
              </div>
            </button>
          );
        })}
      </section>

      {/* Active Module Header */}
      <section className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <active.icon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Selected Intelligence Module
            </p>
            <h2 className="text-lg font-bold text-slate-950">
              {active.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Intelligence engine available
        </div>
      </section>

      {/* Module Content */}
      {activeModule === "forensics" && <ForensicAnalysis />}
      {activeModule === "network" && <NetworkAnalysis />}
      {activeModule === "local-ai" && <LocalAIAnalysis />}

      {/* Officer Control Notice */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

          <div>
            <h3 className="text-sm font-bold text-slate-950">
              Officer remains the decision-maker
            </h3>

            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600">
              TenderShield AI surfaces evidence, relationships and risk
              indicators for investigation. These intelligence signals do not
              automatically qualify, disqualify or reject a bidder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Document Forensics                                                         */
/* -------------------------------------------------------------------------- */

function ForensicAnalysis() {
  const signals = [
    {
      label: "Metadata consistency",
      value: "Review",
      confidence: "94%",
      icon: Fingerprint,
      tone: "amber",
      description:
        "Document metadata differs from the expected submission profile.",
    },
    {
      label: "Revision indicators",
      value: "Detected",
      confidence: "89%",
      icon: ScanSearch,
      tone: "amber",
      description:
        "Multiple editing indicators were detected in the submitted document.",
    },
    {
      label: "Visual consistency",
      value: "Consistent",
      confidence: "97%",
      icon: FileSearch,
      tone: "green",
      description:
        "No major font, spacing or layout inconsistencies detected.",
    },
    {
      label: "Evidence integrity",
      value: "Review",
      confidence: "91%",
      icon: ShieldCheck,
      tone: "amber",
      description:
        "Additional officer review is recommended before relying on the evidence.",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Forensic Scan
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">
                Financial Statement FY 2024–25
              </h3>
            </div>

            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
              REVIEW REQUIRED
            </span>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <FileSearch className="h-5 w-5 text-slate-700" />

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Forensic analysis completed
                </p>
                <p className="text-xs text-slate-500">
                  4 integrity signals evaluated across the submitted evidence.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {signals.map((signal) => {
              const Icon = signal.icon;
              const isGreen = signal.tone === "green";

              return (
                <div
                  key={signal.label}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-slate-500" />
                      <p className="text-xs font-semibold text-slate-700">
                        {signal.label}
                      </p>
                    </div>

                    <span
                      className={`text-xs font-bold ${
                        isGreen ? "text-emerald-600" : "text-amber-600"
                      }`}
                    >
                      {signal.confidence}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm font-bold ${
                      isGreen ? "text-emerald-700" : "text-amber-700"
                    }`}
                  >
                    {signal.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {signal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Intelligence Principle
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Detect signals, not accusations.
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Document forensics identifies technical indicators that may deserve
            investigation. It does not conclude that a document is fraudulent
            or tampered with.
          </p>

          <div className="mt-6 space-y-3">
            <ForensicStep
              number="01"
              title="Inspect"
              text="Analyze document structure and metadata."
            />
            <ForensicStep
              number="02"
              title="Compare"
              text="Compare signals against expected document patterns."
            />
            <ForensicStep
              number="03"
              title="Explain"
              text="Show the officer why a signal was surfaced."
            />
            <ForensicStep
              number="04"
              title="Review"
              text="Officer determines whether further action is required."
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

          <div>
            <p className="text-sm font-bold text-blue-950">
              Prototype capability
            </p>
            <p className="mt-1 text-sm leading-6 text-blue-800">
              These forensic indicators are demonstrated using synthetic
              evidence. Production deployment would require validated document
              integrity models and appropriate government security controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Bidder Network Intelligence                                                */
/* -------------------------------------------------------------------------- */

function NetworkAnalysis() {
  const relationships = [
    {
      bidder: "Apex Infrastructure Pvt. Ltd.",
      relation: "Shared registered address",
      confidence: "92%",
    },
    {
      bidder: "Shree BuildTech Solutions",
      relation: "Repeated tender participation",
      confidence: "87%",
    },
    {
      bidder: "National Engineering Works",
      relation: "Common contact pattern",
      confidence: "81%",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[1.5fr_0.7fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Relationship Graph
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-950">
                Bidder relationship map
              </h3>
            </div>

            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
              3 PATTERNS
            </span>
          </div>

          {/* Graph */}
          <div className="relative mt-6 min-h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative flex min-h-[360px] items-center justify-center">
              {/* Relationship lines */}
              <div className="absolute h-px w-44 -translate-y-12 bg-violet-300" />
              <div className="absolute h-px w-44 translate-y-12 bg-violet-300" />
              <div className="absolute h-32 w-px bg-violet-300" />

              {/* Center */}
              <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-white bg-slate-950 text-center shadow-xl">
                <Network className="h-6 w-6 text-white" />
                <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Target
                </span>
                <span className="mt-0.5 px-2 text-xs font-bold text-white">
                  ABC Industrial
                </span>
              </div>

              {/* Top node */}
              <NetworkNode
                className="absolute left-1/2 top-8 -translate-x-1/2"
                name="Apex Infrastructure"
                detail="Shared address"
                icon={Users}
              />

              {/* Left node */}
              <NetworkNode
                className="absolute left-5 top-1/2 -translate-y-1/2"
                name="Shree BuildTech"
                detail="Repeated bids"
                icon={GitBranch}
              />

              {/* Right node */}
              <NetworkNode
                className="absolute right-5 top-1/2 -translate-y-1/2"
                name="National Engineering"
                detail="Contact pattern"
                icon={Users}
              />

              {/* Bottom */}
              <NetworkNode
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                name="Tender cluster"
                detail="4 related bids"
                icon={GitBranch}
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Detected Relationships
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-950">
            Investigation signals
          </h3>

          <div className="mt-5 space-y-3">
            {relationships.map((relationship) => (
              <div
                key={relationship.bidder}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-bold text-slate-900">
                    {relationship.bidder}
                  </p>

                  <span className="text-xs font-bold text-violet-600">
                    {relationship.confidence}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <CircleDot className="h-3.5 w-3.5 text-violet-500" />
                  <p className="text-xs text-slate-600">
                    {relationship.relation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <div className="flex items-start gap-3">
          <Network className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />

          <div>
            <p className="text-sm font-bold text-violet-950">
              Important: relationship ≠ collusion
            </p>

            <p className="mt-1 text-sm leading-6 text-violet-800">
              Network intelligence surfaces potentially relevant relationships
              and recurring patterns. It does not label bidders as a cartel or
              conclude collusion. The officer investigates the underlying
              evidence before making any decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Privacy-Preserving Local AI                                                */
/* -------------------------------------------------------------------------- */

function LocalAIAnalysis() {
  const architecture = [
    {
      step: "01",
      title: "Procurement Documents",
      text: "Tender files, bidder documents and supporting evidence.",
    },
    {
      step: "02",
      title: "Controlled Processing Layer",
      text: "OCR, extraction and AI inference inside the controlled environment.",
    },
    {
      step: "03",
      title: "Intelligence Engine",
      text: "Verification, anomaly detection and explainable risk analysis.",
    },
    {
      step: "04",
      title: "Officer Workspace",
      text: "Evidence-backed findings presented for human review.",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <LockKeyhole className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Privacy Architecture
              </p>

              <h3 className="text-xl font-bold text-slate-950">
                Sensitive intelligence stays controlled
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            TenderShield can be designed for deployment where sensitive
            procurement documents are processed inside an approved government
            or organizational environment rather than being sent to public
            AI services.
          </p>

          <div className="mt-6 space-y-3">
            {architecture.map((item, index) => (
              <div key={item.step} className="relative flex gap-4">
                {index < architecture.length - 1 && (
                  <div className="absolute left-4 top-9 h-10 w-px bg-slate-200" />
                )}

                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                  {item.step}
                </div>

                <div className="pb-3">
                  <p className="text-sm font-bold text-slate-900">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Deployment Concept
              </p>

              <h3 className="mt-1 text-xl font-bold">
                Local / controlled AI
              </h3>
            </div>

            <LockKeyhole className="h-6 w-6 text-emerald-400" />
          </div>

          <div className="mt-6 space-y-3">
            <SecurityPoint
              title="No public AI dependency"
              text="Sensitive documents can be processed through controlled infrastructure."
            />

            <SecurityPoint
              title="Data boundary"
              text="Procurement evidence remains within the configured processing environment."
            />

            <SecurityPoint
              title="Explainable outputs"
              text="AI results are linked back to evidence instead of producing unexplained decisions."
            />

            <SecurityPoint
              title="Human decision control"
              text="The officer remains responsible for qualification or disqualification."
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

          <div>
            <p className="text-sm font-bold text-emerald-950">
              Prototype positioning
            </p>

            <p className="mt-1 text-sm leading-6 text-emerald-800">
              For the SIH prototype, this capability is presented as a
              privacy-preserving deployment architecture. Production
              implementation would use government-approved infrastructure,
              models and security controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Small Components                                                           */
/* -------------------------------------------------------------------------- */

function ForensicStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[10px] font-bold text-white">
        {number}
      </div>

      <div>
        <p className="text-xs font-bold text-white">{title}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-400">{text}</p>
      </div>
    </div>
  );
}

function NetworkNode({
  className,
  name,
  detail,
  icon: Icon,
}: {
  className?: string;
  name: string;
  detail: string;
  icon: typeof Users;
}) {
  return (
    <div
      className={`z-10 w-36 rounded-xl border border-slate-200 bg-white p-3 shadow-md ${className ?? ""}`}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          <Icon className="h-3.5 w-3.5" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-[10px] font-bold text-slate-900">
            {name}
          </p>

          <p className="truncate text-[9px] text-violet-600">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function SecurityPoint({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

      <div>
        <p className="text-xs font-bold text-white">{title}</p>
        <p className="mt-1 text-[11px] leading-5 text-slate-400">{text}</p>
      </div>
    </div>
  );
}