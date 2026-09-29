"use client";

import {
  AlertCircle,
  ArrowLeft,
  Bell,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const notifications = [
  {
    title: "Financial Statement requires clarification",
    description:
      "Your financial evidence for GEM/2026/B/10461 requires additional clarification.",
    time: "2 hours ago",
    type: "warning",
    unread: true,
  },
  {
    title: "GST Registration verified",
    description:
      "GST Registration Certificate has successfully passed verification.",
    time: "Yesterday",
    type: "success",
    unread: false,
  },
  {
    title: "Bid submitted successfully",
    description:
      "Your bid for GEM/2026/B/10482 has been successfully recorded.",
    time: "12 Sep 2026",
    type: "success",
    unread: false,
  },
  {
    title: "Compliance verification completed",
    description:
      "Your submitted compliance evidence has been processed.",
    time: "11 Sep 2026",
    type: "info",
    unread: false,
  },
];

export default function BidderNotificationsPage() {
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

      <div className="mx-auto max-w-4xl px-5 py-8 lg:px-8">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Bidder Workspace
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Notifications
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Stay updated about your bids and verification activity.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {notifications.map((notification, index) => (
            <div
              key={notification.title}
              className={
                "flex gap-4 border-b border-slate-100 p-6 last:border-b-0 " +
                (notification.unread ? "bg-blue-50/40" : "")
              }
            >
              <div
                className={
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full " +
                  (notification.type === "warning"
                    ? "bg-amber-50 text-amber-600"
                    : notification.type === "success"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600")
                }
              >
                {notification.type === "warning" ? (
                  <AlertCircle className="h-5 w-5" />
                ) : notification.type === "success" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Bell className="h-5 w-5" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-slate-800">
                      {notification.title}
                    </h2>

                    {notification.unread && (
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock3 className="h-3.5 w-3.5" />
                    {notification.time}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-5 text-slate-500">
                  {notification.description}
                </p>
              </div>

              {index === 0 && (
                <button
                  type="button"
                  className="hidden self-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 sm:block"
                >
                  View
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}