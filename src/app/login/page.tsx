"use client";

import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 lg:px-8">
        {/* Top Brand */}
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
              <ShieldCheck className="h-5 w-5 text-slate-950" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                TenderShield AI
              </p>

              <p className="text-[10px] font-semibold tracking-widest text-slate-400">
                PROCUREMENT INTEGRITY
              </p>
            </div>
          </a>

          <a
            href="/"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Back to Home
          </a>
        </header>

        {/* Main */}
        <section className="flex flex-1 items-center justify-center py-16">
          <div className="w-full max-w-4xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                <Sparkles className="h-3.5 w-3.5" />
                Secure Procurement Workspace
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Welcome to TenderShield
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Choose your workspace to securely access procurement
                intelligence, tender compliance and bid management.
              </p>
            </div>

            {/* Role Cards */}
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {/* Officer */}
              <a
                href="/login/officer"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-950">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <h2 className="mt-7 text-xl font-bold">
                  Officer Portal
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  For authorized procurement officers to evaluate tenders,
                  verify bidder evidence and investigate procurement risks.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Tender Intelligence",
                    "Verification",
                    "Risk Monitoring",
                    "Audit Trail",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-white">
                  Continue as Officer
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>

              {/* Bidder */}
              <a
                href="/login/bidder"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-950">
                    <Building2 className="h-6 w-6" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <h2 className="mt-7 text-xl font-bold">
                  Bidder Portal
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  For registered bidders to submit documents, track bids,
                  monitor compliance and receive procurement updates.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "My Bids",
                    "Documents",
                    "Compliance",
                    "Notifications",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-white">
                  Continue as Bidder
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            </div>

            <p className="mt-8 text-center text-xs text-slate-500">
              Prototype authentication · Synthetic demonstration environment
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}