"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileText,
  GitBranch,
  History,
  Layers3,
  Menu,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const problems = [
  {
    icon: FileText,
    title: "Document Overload",
    description:
      "Procurement teams review large volumes of financial, technical and compliance documents manually.",
  },
  {
    icon: Search,
    title: "Hidden Inconsistencies",
    description:
      "Critical discrepancies can remain hidden across multiple documents and bidder submissions.",
  },
  {
    icon: TrendingUp,
    title: "Invisible Risk Patterns",
    description:
      "Unusual bid behaviour and participation patterns are difficult to identify at scale.",
  },
  {
    icon: ShieldAlert,
    title: "Delayed Investigation",
    description:
      "Officers need actionable evidence and context instead of isolated alerts and disconnected records.",
  },
];

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "AI-Powered Verification",
    description:
      "Map tender requirements to submitted evidence and identify missing, inconsistent or suspicious information.",
  },
  {
    icon: GitBranch,
    title: "Cross-Document Intelligence",
    description:
      "Connect information across financial, technical, statutory and authorization documents.",
  },
  {
    icon: BarChart3,
    title: "Explainable Risk Scoring",
    description:
      "Turn multiple findings into an understandable risk score with clear contributing factors.",
  },
  {
    icon: ShieldAlert,
    title: "Proactive Risk Alerts",
    description:
      "Surface high-priority procurement anomalies so officers can investigate them early.",
  },
  {
    icon: Users,
    title: "Bidder Investigation",
    description:
      "Move from a risk alert to the bidder, tender, evidence and findings behind the alert.",
  },
  {
    icon: History,
    title: "Complete Audit Trail",
    description:
      "Maintain a traceable record of verification, investigation and officer actions.",
  },
];

const workflow = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    description:
      "Bring tender and bidder documents into one intelligent procurement workspace.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Verify",
    description:
      "Extract evidence and compare it against tender requirements and compliance rules.",
  },
  {
    number: "03",
    icon: ShieldAlert,
    title: "Investigate",
    description:
      "Prioritize anomalies and understand the evidence contributing to each risk finding.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Decide",
    description:
      "Give procurement officers the evidence and auditability needed for informed decisions.",
  },
];

const modules = [
  "Dashboard",
  "Tenders",
  "Bidders",
  "Verification",
  "Compliance",
  "Risk Alerts",
  "Documents",
  "Analytics",
  "Audit Trail",
];

export default function HomePage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileMenu(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
              <ShieldCheck className="h-6 w-6 text-slate-950" />
            </div>

            <div className="text-left">
              <div className="text-lg font-bold tracking-tight text-white">
                TenderShield AI
              </div>
              <div className="text-[9px] font-semibold tracking-[0.22em] text-slate-400">
                PROCUREMENT INTEGRITY
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            <button
              onClick={() => scrollTo("solution")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Product
            </button>

            <button
              onClick={() => scrollTo("workflow")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollTo("capabilities")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Why TenderShield
            </button>

            <button
              onClick={() => scrollTo("demo")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Demo
            </button>

            <a
              href="/dashboard"
              className="group flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Launch Platform
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <button
                onClick={() => scrollTo("solution")}
                className="py-2 text-left text-sm text-slate-300"
              >
                Product
              </button>

              <button
                onClick={() => scrollTo("workflow")}
                className="py-2 text-left text-sm text-slate-300"
              >
                How It Works
              </button>

              <button
                onClick={() => scrollTo("capabilities")}
                className="py-2 text-left text-sm text-slate-300"
              >
                Why TenderShield
              </button>

              <button
                onClick={() => scrollTo("demo")}
                className="py-2 text-left text-sm text-slate-300"
              >
                Demo
              </button>

              <a
                href="/dashboard"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950"
              >
                Launch Platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-slate-700/20 blur-3xl" />
          <div className="absolute right-[-200px] top-[300px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-[-200px] top-[500px] h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-slate-200" />
              AI-POWERED · EXPLAINABLE · EVIDENCE-DRIVEN
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Detect risks.
              <br />
              <span className="text-slate-400">Verify evidence.</span>
              <br />
              Protect decisions.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              TenderShield AI brings procurement verification, risk
              intelligence and auditability into one intelligent workspace —
              helping officers identify inconsistencies and investigate
              potential risks before they impact procurement decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Explore Platform
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo("workflow")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See How It Works
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-slate-400" />
                Evidence-backed insights
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-slate-400" />
                Explainable risk
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-slate-400" />
                Officer decision support
              </span>
            </div>
          </div>

          {/* HERO PRODUCT PREVIEW */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-white/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Risk Intelligence
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Bidder Investigation
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600">
                  DEMO DATA
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="rounded-xl border border-red-100 bg-red-50/70 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                        Risk Score
                      </p>
                      <p className="mt-1 text-5xl font-bold tracking-tight text-slate-950">
                        91
                        <span className="text-xl text-slate-400">/100</span>
                      </p>
                    </div>

                    <span className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white">
                      CRITICAL
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                    Contributing Findings
                  </p>

                  <div className="space-y-2.5">
                    {[
                      "Bid price deviation detected",
                      "Financial turnover discrepancy",
                      "Participation pattern detected",
                      "OEM authorization requires review",
                    ].map((finding, index) => (
                      <div
                        key={finding}
                        className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-3"
                      >
                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            index === 3
                              ? "bg-amber-100 text-amber-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {index === 3 ? (
                            <ShieldAlert className="h-3.5 w-3.5" />
                          ) : (
                            <Zap className="h-3.5 w-3.5" />
                          )}
                        </div>

                        <span className="text-xs font-medium text-slate-700">
                          {finding}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-100 p-3">
                    <p className="text-[10px] text-slate-400">Evidence Items</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">12</p>
                  </div>

                  <div className="rounded-lg border border-slate-100 p-3">
                    <p className="text-[10px] text-slate-400">Verified</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      8 / 12
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50 px-5 py-3 text-[10px] text-slate-400">
                Synthetic demonstration — not a real procurement decision.
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
          {[
            ["Evidence", "Driven verification"],
            ["Explainable", "Risk intelligence"],
            ["Proactive", "Risk monitoring"],
            ["Traceable", "Audit activity"],
          ].map(([title, subtitle]) => (
            <div key={title} className="px-5 py-7 text-center">
              <p className="text-sm font-bold text-slate-900">{title}</p>
              <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              The Challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Procurement decisions shouldn&apos;t rely on fragmented
              evidence.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              As procurement becomes more document-heavy and data-driven,
              manual verification can make it difficult to see the complete
              picture behind a bidder or tender.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              The TenderShield Approach
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              One intelligence layer for the procurement lifecycle.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
              TenderShield connects documents, requirements, verification and
              risk intelligence so officers can move from raw evidence to
              actionable investigation.
            </p>
          </div>

          <div className="mt-16 overflow-x-auto pb-5">
            <div className="mx-auto flex min-w-[950px] items-center justify-center gap-2">
              {[
                ["Tender", FileText],
                ["Requirements", Layers3],
                ["Documents", FileText],
                ["Evidence", Search],
                ["Verification", FileCheck2],
                ["Risk Analysis", BarChart3],
                ["Alerts", ShieldAlert],
                ["Decision", CheckCircle2],
                ["Audit Trail", History],
              ].map(([label, Icon], index, array) => {
                const IconComponent = Icon as typeof FileText;

                return (
                  <div key={label as string} className="flex items-center">
                    <div className="flex w-24 flex-col items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <p className="mt-3 text-[11px] font-semibold leading-4 text-slate-700">
                        {label as string}
                      </p>
                    </div>

                    {index < array.length - 1 && (
                      <ArrowRight className="mx-1 h-4 w-4 shrink-0 text-slate-300" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                  From isolated documents to connected intelligence.
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Instead of treating every document as an isolated file,
                  TenderShield connects evidence across the procurement
                  lifecycle to help reveal inconsistencies and risk signals.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Extract", "Turn documents into structured evidence."],
                  ["02", "Connect", "Relate evidence to requirements and entities."],
                  ["03", "Explain", "Show the findings behind each risk signal."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="text-[10px] font-bold tracking-widest text-slate-400">
                      {number}
                    </span>

                    <h4 className="mt-4 text-sm font-bold text-slate-900">
                      {title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Why TenderShield
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Built for evidence, intelligence and action.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Every capability is designed to help procurement teams move
              faster without losing transparency or traceability.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-slate-950 p-7 transition hover:bg-slate-900"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-base font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLAINABLE AI */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Explainable Intelligence
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Don&apos;t just show a risk score.
              <br />
              <span className="text-slate-400">Explain it.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
              TenderShield is designed around evidence-backed decision support.
              Instead of presenting an unexplained number, the platform
              surfaces the findings and evidence contributing to a risk
              signal.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Identify the specific finding",
                "Connect it to supporting evidence",
                "Show its contribution to overall risk",
                "Let the officer investigate before deciding",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-200/50 sm:p-7">
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Explainable Risk
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Apex Infrastructure Pvt. Ltd.
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-red-600">91</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-red-500">
                    Critical
                  </p>
                </div>
              </div>

              <div className="space-y-3 p-5">
                {[
                  ["Bid price deviation", "High", "Financial Analysis"],
                  ["Turnover discrepancy", "High", "Financial Statement"],
                  ["Participation pattern", "Medium", "Bid History"],
                  ["OEM authorization", "Review", "Authorization Letter"],
                ].map(([finding, severity, evidence]) => (
                  <div
                    key={finding}
                    className="rounded-xl border border-slate-100 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-slate-800">
                        {finding}
                      </span>

                      <span
                        className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                          severity === "High"
                            ? "bg-red-50 text-red-600"
                            : severity === "Medium"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {severity}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400">
                      <FileText className="h-3 w-3" />
                      {evidence}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 bg-slate-50 p-4 text-[10px] leading-5 text-slate-400">
                Demonstration only. Risk findings shown above use synthetic
                procurement data.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              From upload to informed decision.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
              TenderShield fits into the procurement workflow without replacing
              the officer&apos;s judgement.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.number} className="relative">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-slate-300">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {index < workflow.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white">
                        <ArrowRight className="h-3 w-3 text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="demo" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                The Platform
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                One workspace.
                <br />
                <span className="text-slate-400">Complete visibility.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
                From tender monitoring to bidder investigation and audit
                activity, TenderShield brings the procurement intelligence
                workflow into one connected platform.
              </p>

              <a
                href="/dashboard"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Enter the Platform
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module, index) => (
                <div
                  key={module}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-bold text-slate-500 group-hover:bg-slate-900 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-5xl">
            Make every procurement decision more transparent.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            TenderShield AI brings verification, risk intelligence and
            auditability into one procurement workspace.
          </p>

          <a
            href="/dashboard"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Launch TenderShield
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>

          <p className="mt-6 text-[10px] uppercase tracking-widest text-slate-600">
            Demonstration environment · Synthetic procurement data
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 px-5 py-10 text-slate-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
              <ShieldCheck className="h-5 w-5 text-slate-950" />
            </div>

            <div>
              <p className="text-sm font-bold text-white">TenderShield AI</p>
              <p className="text-[9px] tracking-widest text-slate-500">
                PROCUREMENT INTEGRITY
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <button
              onClick={() => scrollTo("solution")}
              className="transition hover:text-white"
            >
              Product
            </button>

            <button
              onClick={() => scrollTo("workflow")}
              className="transition hover:text-white"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollTo("capabilities")}
              className="transition hover:text-white"
            >
              Capabilities
            </button>

            <a
              href="/dashboard"
              className="transition hover:text-white"
            >
              Platform
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-[10px] text-slate-600">
          TenderShield AI · AI-Powered Procurement Integrity & Risk Monitoring
        </div>
      </footer>
    </main>
  );
}