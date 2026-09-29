"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";

export default function OfficerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    window.localStorage.setItem("tendershield_role", "officer");

    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
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

          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mb-8 lg:hidden">
              <a
                href="/login"
                className="inline-flex items-center gap-2 text-sm text-slate-500"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </a>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
                <LockKeyhole className="h-6 w-6 text-white" />
              </div>

              <p className="text-sm font-semibold text-slate-500">
                TenderShield AI
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Officer Sign In
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Access the procurement intelligence workspace.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Official Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="officer@example.gov.in"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Sign In to Officer Platform
              </button>
            </form>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs font-semibold text-amber-800">
                Prototype Login
              </p>
              <p className="mt-1 text-xs leading-5 text-amber-700">
                This demonstration does not process or validate real
                credentials. Any email and password can be used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}