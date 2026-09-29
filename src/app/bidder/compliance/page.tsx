"use client";

import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

const requirements = [
  {
    name: "GST Registration",
    description: "Valid GST registration evidence",
    status: "Verified",
    confidence: 98,
  },
  {
    name: "PAN Verification",
    description: "PAN details matched against submitted evidence",
    status: "Verified",
    confidence: 99,
  },
  {
    name: "Udyam / MSME Registration",
    description: "Valid Udyam registration",
    status: "Verified",
    confidence: 96,
  },
  {
    name: "Financial Capacity",
    description: "Required financial threshold evidence",
    status: "Review Required",
    confidence: 78,
  },
  {
    name: "OEM Authorization",
    description: "Authorization letter and product scope",
    status: "Verified",
    confidence: 94,
  },
  {
    name: "Previous Experience",
    description: "Required prior project experience",
    status: "Verified",
    confidence: 91,
  },
];

export default function BidderCompliancePage() {
  const verified = requirements.filter(
    (item) => item.status === "Verified"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="/bidder"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Bidder Dashboard
          </a>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-slate-800" />
            <span className="font-bold text-slate-900">
              TenderShield AI
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Bidder Workspace
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Compliance Status
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Review the verification status of your procurement requirements.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Overall Compliance
            </p>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-5xl font-bold text-slate-900">
                86%
              </span>

              <span className="mb-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Mostly Verified
              </span>
            </div>

            <div className="mt-6 h-3 rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-emerald-500"
                style={{ width: "86%" }}
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-emerald-50 p-4">
                <p className="text-xs text-emerald-700">
                  Verified
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-800">
                  {verified}
                </p>
              </div>

              <div className="rounded-lg bg-amber-50 p-4">
                <p className="text-xs text-amber-700">
                  Review Required
                </p>
                <p className="mt-1 text-2xl font-bold text-amber-800">
                  {requirements.length - verified}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5">
              <h2 className="font-semibold text-slate-900">
                Requirement Verification
              </h2>
            </div>

            <div className="divide-y divide-slate-100">
              {requirements.map((requirement) => (
                <div
                  key={requirement.name}
                  className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    {requirement.status === "Verified" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    )}

                    <div>
                      <p className="font-semibold text-slate-800">
                        {requirement.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {requirement.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-500">
                      {requirement.confidence}%
                    </span>

                    <span
                      className={
                        "rounded-full border px-3 py-1.5 text-xs font-semibold " +
                        (requirement.status === "Verified"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-amber-200 bg-amber-50 text-amber-700")
                      }
                    >
                      {requirement.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex items-start gap-3">
            <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

            <div>
              <p className="text-sm font-semibold text-blue-900">
                What does this mean?
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-800">
                Verified requirements indicate that the submitted evidence
                has passed the current verification checks. Review Required
                means additional clarification or evidence may be needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}