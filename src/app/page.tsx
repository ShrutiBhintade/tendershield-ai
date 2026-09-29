import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Fingerprint,
  GitBranch,
  Lock,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Upload,
} from "lucide-react";

const workflow = [
  {
    step: "01",
    title: "Upload",
    description:
      "Tender requirements and bidder documents enter one controlled workspace.",
    icon: Upload,
  },
  {
    step: "02",
    title: "Verify",
    description:
      "AI extracts evidence and checks it against procurement requirements.",
    icon: ScanSearch,
  },
  {
    step: "03",
    title: "Investigate",
    description:
      "Cross-document intelligence surfaces inconsistencies and risk signals.",
    icon: TriangleAlert,
  },
  {
    step: "04",
    title: "Decide",
    description:
      "Officers receive explainable findings before making procurement decisions.",
    icon: CheckCircle2,
  },
];

const capabilities = [
  {
    title: "Evidence-Grounded Verification",
    description:
      "Every compliance finding is connected to extracted evidence rather than a black-box prediction.",
    icon: FileSearch,
  },
  {
    title: "Explainable Risk Intelligence",
    description:
      "Risk scores are supported by visible findings so officers can understand why attention is required.",
    icon: BrainCircuit,
  },
  {
    title: "Cross-Document Intelligence",
    description:
      "Tender requirements, bidder submissions and supporting documents can be examined together.",
    icon: GitBranch,
  },
  {
    title: "Proactive Risk Monitoring",
    description:
      "Potential issues are surfaced as actionable alerts instead of waiting for manual discovery.",
    icon: TriangleAlert,
  },
  {
    title: "Role-Based Workspaces",
    description:
      "Officers receive procurement intelligence while bidders receive only their own bid and compliance information.",
    icon: Fingerprint,
  },
  {
    title: "Traceable Audit Activity",
    description:
      "Important verification and decision events can be maintained as a transparent activity trail.",
    icon: Lock,
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
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <ShieldCheck className="h-5 w-5 text-slate-950" />
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight">
                TenderShield AI
              </p>
              <p className="text-[8px] font-semibold tracking-[0.2em] text-slate-500">
                PROCUREMENT INTEGRITY
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#product" className="transition hover:text-white">
              Product
            </a>
            <a href="#workflow" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#why" className="transition hover:text-white">
              Why TenderShield
            </a>
            <a href="#demo" className="transition hover:text-white">
              Demo
            </a>
          </div>

          <a
            href="/login"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-slate-200"
          >
            Launch Platform
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Procurement Integrity
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Detect risks.
                <br />
                Verify evidence.
                <br />
                <span className="text-slate-400">Protect decisions.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                TenderShield uses explainable AI to verify bidder evidence,
                detect procurement anomalies and surface hidden risks before
                they impact public procurement decisions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                >
                  Explore TenderShield
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Evidence Driven",
                  "Explainable AI",
                  "Risk Monitoring",
                  "Audit Ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-400"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-slate-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCT PREVIEW */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-2xl">
                <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        RISK INTELLIGENCE
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        Bidder Investigation
                      </p>
                    </div>

                    <span className="rounded-full border border-red-400/20 bg-red-400/10 px-2.5 py-1 text-[10px] font-bold text-red-300">
                      CRITICAL
                    </span>
                  </div>

                  <div className="mt-7 flex items-center gap-6">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-red-400/20">
                      <div className="text-center">
                        <p className="text-3xl font-bold">91</p>
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Risk Score
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Apex Infrastructure Pvt. Ltd.
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        GEM/2026/B/10482
                      </p>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <TriangleAlert className="h-3.5 w-3.5 text-red-300" />
                          Unusual bid price pattern
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <TriangleAlert className="h-3.5 w-3.5 text-amber-300" />
                          Financial evidence mismatch
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      Contributing Findings
                    </p>

                    <div className="mt-3 space-y-2">
                      {[
                        ["Bid Price Pattern", "High"],
                        ["Financial Evidence", "Review"],
                        ["Document Consistency", "Review"],
                      ].map(([label, status]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0"
                        >
                          <span className="text-xs text-slate-400">
                            {label}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-300">
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-center text-[10px] text-slate-600">
                Synthetic demonstration data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          {[
            ["Evidence Driven", "Verification"],
            ["Explainable Risk", "Intelligence"],
            ["Proactive", "Risk Monitoring"],
            ["Traceable", "Audit Activity"],
          ].map(([top, bottom]) => (
            <div key={top} className="px-5 py-6 text-center">
              <p className="text-sm font-bold">{top}</p>
              <p className="mt-1 text-xs text-slate-500">{bottom}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section id="product" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            The Challenge
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Procurement risk can hide inside ordinary documents.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Procurement officers often work across large volumes of tender
            requirements, certificates, financial records and supporting
            documents. Important inconsistencies can be difficult to discover
            manually.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "01",
              "Document Overload",
              "Large numbers of bidder documents make manual evidence review time-consuming.",
            ],
            [
              "02",
              "Hidden Inconsistencies",
              "Important conflicts may exist across certificates, financial records and declarations.",
            ],
            [
              "03",
              "Invisible Risk Patterns",
              "Individual documents may look valid while combined evidence reveals unusual patterns.",
            ],
            [
              "04",
              "Delayed Investigation",
              "Potential issues may only receive attention after substantial manual review.",
            ],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
            >
              <span className="text-xs font-bold text-slate-600">
                {number}
              </span>

              <h3 className="mt-8 text-lg font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section id="workflow" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              The Solution
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              One intelligence layer for the procurement lifecycle.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              TenderShield connects evidence, verification and risk
              intelligence into one traceable workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-white/10 bg-slate-950 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600">
                      {item.step}
                    </span>

                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <h3 className="mt-8 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              [
                "Extract",
                "Convert unstructured procurement documents into structured evidence.",
              ],
              [
                "Connect",
                "Compare requirements and evidence across the procurement workflow.",
              ],
              [
                "Explain",
                "Turn detected issues into understandable findings for officers.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Why TenderShield
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built around evidence, explainability and action.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-slate-300" />
                </div>

                <h3 className="mt-6 text-base font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Explainable Intelligence
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A risk score is useful only when you can explain it.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                TenderShield presents the evidence and findings contributing
                to a risk signal so officers can investigate instead of
                relying on an unexplained prediction.
              </p>

              <a
                href="/login"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white"
              >
                Explore the demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">SYNTHETIC BIDDER</p>
                  <p className="mt-1 text-lg font-bold">
                    Apex Infrastructure Pvt. Ltd.
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold">91</p>
                  <p className="text-[9px] uppercase tracking-widest text-red-300">
                    Critical
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  "Unusual bid price pattern detected",
                  "Financial evidence requires review",
                  "Document consistency requires investigation",
                  "Multiple risk indicators contribute to score",
                ].map((finding, index) => (
                  <div
                    key={finding}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold">
                      {index + 1}
                    </div>

                    <p className="text-xs leading-5 text-slate-400">
                      {finding}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From documents to decisions.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-4">
          {[
            ["01", "Upload", "Add tender and bidder evidence."],
            ["02", "Verify", "Check evidence against requirements."],
            ["03", "Investigate", "Review explainable risk findings."],
            ["04", "Decide", "Take an informed procurement action."],
          ].map(([number, title, description]) => (
            <div key={number} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold">
                {number}
              </div>

              <h3 className="mt-5 text-sm font-bold">{title}</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Procurement Workspace
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything officers need in one platform.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                A unified workspace connects tender management, evidence
                verification, compliance intelligence and risk investigation.
              </p>

              <a
                href="/login/officer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-950"
              >
                Open Officer Platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950 p-4"
                >
                  <BadgeCheck className="h-4 w-4 text-slate-500" />
                  <span className="text-xs font-medium text-slate-300">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-5 py-28 text-center lg:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
          <ShieldCheck className="h-7 w-7 text-slate-950" />
        </div>

        <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
          Make every procurement decision more evidence-driven.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Explore the TenderShield prototype and experience the officer and
          bidder workflows built for transparent procurement.
        </p>

        <a
          href="/login"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
        >
          Launch TenderShield
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-400">TenderShield AI</p>
            <p className="mt-1">
              AI-Powered Procurement Integrity & Risk Monitoring
            </p>
          </div>

          <p>
            Prototype · Synthetic demonstration data · Smart India Hackathon
          </p>
        </div>
      </footer>
    </main>
  );
}