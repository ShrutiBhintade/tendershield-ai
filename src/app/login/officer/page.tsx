"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";

const DEMO_OFFICER_ID = "officer@tendershield.ai";
const DEMO_OFFICER_PASSWORD = "Officer@123";

export default function OfficerLoginPage() {
  const [email, setEmail] = useState(DEMO_OFFICER_ID);
  const [password, setPassword] = useState(DEMO_OFFICER_PASSWORD);
  const [error, setError] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (
      email.trim().toLowerCase() !== DEMO_OFFICER_ID ||
      password !== DEMO_OFFICER_PASSWORD
    ) {
      setError("Invalid Login ID or Password.");
      return;
    }

    window.localStorage.setItem("tendershield_role", "officer");
    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <a
                href="/login"
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to portal selection
              </a>

              <div className="mt-16">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Officer Platform
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight">
                  Procurement Intelligence
                </h1>

                <p className="mt-5 max-w-md leading-7 text-slate-300">
                  Verify bidder evidence, investigate procurement risks and
                  maintain an explainable decision trail with TenderShield AI.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Prototype environment · Synthetic demonstration data
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-7 lg:hidden">
              <a
                href="/login"
                className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </a>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                <LockKeyhole className="h-6 w-6 text-white" />
              </div>

              <p className="text-sm font-semibold text-slate-600">
                TenderShield AI
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Officer Sign In
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Access the procurement intelligence workspace.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Login ID
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100"
                  required
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm font-medium text-red-700">
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
              >
                Sign In to Officer Platform
              </button>
            </form>

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />

              <p className="text-xs font-medium text-slate-600">
                Demo account · Credentials pre-filled for presentation
              </p>
            </div>

            <p className="mt-4 text-center text-[11px] text-slate-400">
              Prototype environment · Synthetic demonstration data
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}