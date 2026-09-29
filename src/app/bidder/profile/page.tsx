"use client";

import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function BidderProfilePage() {
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

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Bidder Workspace
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View your registered bidder information.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-900 px-6 py-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-900">
                AI
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  ABC Industrial Solutions
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  Verified Bidder · GeM Registered
                </p>
              </div>

              <div className="sm:ml-auto">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Organization Details
              </p>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Legal Entity
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      ABC Industrial Solutions Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Registered Address
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Udyam Registration
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      UDYAM-TN-00-1234567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Contact Information
              </p>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      procurement@abcindustrial.example
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      +91 9XXXX XXXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
            <p className="text-xs leading-5 text-slate-500">
              Profile information shown in this prototype is synthetic
              demonstration data. In a production deployment, identity and
              organization details would be retrieved from authorized
              procurement systems.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}