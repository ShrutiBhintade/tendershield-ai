"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  Database,
  FileText,
  Lock,
  Mail,
  Save,
  Settings as SettingsIcon,
  Shield,
  SlidersHorizontal,
  UserRound,
  Zap,
} from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    criticalAlerts: true,
    highRiskAlerts: true,
    verificationAlerts: true,
    dailySummary: true,
    aiRecommendations: true,
    autoVerification: true,
    auditLogging: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((current) => ({
      ...current,
      [key]: !current[key],
    }));

    setSaved(false);
  };

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Demo Banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-2.5">
        <div className="mx-auto flex max-w-[1500px] items-center gap-2 text-sm text-amber-800">
          <Zap className="h-4 w-4" />
          <span>
            <strong>Demo Mode:</strong> Settings shown here represent the
            configuration layer of the TenderShield AI prototype.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] p-6">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Settings</span>
            <span>/</span>
            <span>System Configuration</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            TenderShield AI Settings
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Configure procurement intelligence, notifications, verification
            behaviour, security and audit controls.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Settings Navigation */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <SettingsNav
              icon={UserRound}
              label="Profile"
              active
            />

            <SettingsNav
              icon={Bell}
              label="Notifications"
            />

            <SettingsNav
              icon={SlidersHorizontal}
              label="AI Configuration"
            />

            <SettingsNav
              icon={Shield}
              label="Security"
            />

            <SettingsNav
              icon={Database}
              label="Data & Storage"
            />

            <SettingsNav
              icon={FileText}
              label="Audit & Compliance"
            />
          </aside>

          {/* Main Settings */}
          <div className="space-y-6">
            {/* Profile */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={UserRound}
                title="Officer Profile"
                description="Basic information about the current procurement officer."
              />

              <div className="grid gap-5 p-6 md:grid-cols-2">
                <InputField
                  label="Full Name"
                  value="Ananya Sharma"
                />

                <InputField
                  label="Role"
                  value="Procurement Officer"
                />

                <InputField
                  label="Department"
                  value="Infrastructure & Procurement"
                />

                <InputField
                  label="Officer ID"
                  value="OFF-2026-0142"
                />
              </div>
            </section>

            {/* Notifications */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={Bell}
                title="Notification Preferences"
                description="Control which procurement intelligence events require attention."
              />

              <div className="divide-y divide-slate-100">
                <ToggleRow
                  title="Critical Risk Alerts"
                  description="Immediately notify when a critical procurement risk is detected."
                  enabled={settings.criticalAlerts}
                  onToggle={() => toggle("criticalAlerts")}
                />

                <ToggleRow
                  title="High Risk Alerts"
                  description="Notify when a bidder or tender crosses the high-risk threshold."
                  enabled={settings.highRiskAlerts}
                  onToggle={() => toggle("highRiskAlerts")}
                />

                <ToggleRow
                  title="Verification Alerts"
                  description="Notify when automated document or identity verification requires review."
                  enabled={settings.verificationAlerts}
                  onToggle={() => toggle("verificationAlerts")}
                />

                <ToggleRow
                  title="Daily Intelligence Summary"
                  description="Receive a daily summary of procurement activity and risk findings."
                  enabled={settings.dailySummary}
                  onToggle={() => toggle("dailySummary")}
                />
              </div>
            </section>

            {/* AI Configuration */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={SlidersHorizontal}
                title="AI Configuration"
                description="Configure how TenderShield AI assists procurement officers."
              />

              <div className="divide-y divide-slate-100">
                <ToggleRow
                  title="AI Recommendations"
                  description="Generate explainable recommendations from verification and risk signals."
                  enabled={settings.aiRecommendations}
                  onToggle={() => toggle("aiRecommendations")}
                />

                <ToggleRow
                  title="Automatic Verification"
                  description="Allow the system to automatically evaluate supported procurement requirements."
                  enabled={settings.autoVerification}
                  onToggle={() => toggle("autoVerification")}
                />

                <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Risk Score Threshold
                    </p>
                    <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
                      Risk scores above this threshold are escalated for
                      officer review.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="50"
                      max="100"
                      defaultValue="75"
                      className="w-40 accent-indigo-600"
                    />

                    <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                      75
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={Lock}
                title="Security & Access"
                description="Security controls for the procurement intelligence platform."
              />

              <div className="grid gap-4 p-6 md:grid-cols-2">
                <SecurityCard
                  title="Role-Based Access"
                  value="Enabled"
                  description="Access is controlled according to officer role."
                />

                <SecurityCard
                  title="Session Security"
                  value="Protected"
                  description="Authenticated sessions are monitored by the platform."
                />

                <SecurityCard
                  title="Data Encryption"
                  value="Enabled"
                  description="Sensitive procurement data is protected in transit."
                />

                <SecurityCard
                  title="Audit Logging"
                  value={settings.auditLogging ? "Enabled" : "Disabled"}
                  description="System and officer activities are recorded for traceability."
                />
              </div>
            </section>

            {/* Data */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={Database}
                title="Data & Storage"
                description="Information about the procurement intelligence data environment."
              />

              <div className="grid gap-4 p-6 md:grid-cols-3">
                <DataCard
                  label="Documents"
                  value="438"
                  detail="Processed"
                />

                <DataCard
                  label="Audit Events"
                  value="2,847"
                  detail="Recorded"
                />

                <DataCard
                  label="Risk Findings"
                  value="241"
                  detail="Generated"
                />
              </div>
            </section>

            {/* Compliance */}
            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <SectionHeader
                icon={Shield}
                title="Audit & Compliance"
                description="Controls supporting transparent and accountable procurement decisions."
              />

              <div className="divide-y divide-slate-100">
                <ComplianceRow
                  title="Explainable AI"
                  description="AI findings include supporting evidence and risk factors."
                />

                <ComplianceRow
                  title="Human-in-the-Loop"
                  description="Final procurement decisions remain with authorized officers."
                />

                <ComplianceRow
                  title="Decision Traceability"
                  description="Investigations can be traced from source documents to final officer action."
                />

                <ComplianceRow
                  title="Audit Record"
                  description="System activities are recorded with timestamps and reference identifiers."
                />
              </div>
            </section>

            {/* Save */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Configuration changes
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Save your current TenderShield AI preferences.
                </p>
              </div>

              <button
                type="button"
                onClick={saveSettings}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {saved ? (
                  <>
                    <Check className="h-4 w-4" />
                    Settings Saved
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500">
              <strong className="text-slate-700">Prototype Notice:</strong>{" "}
              These controls demonstrate the intended configuration
              experience. Production deployment should connect them to
              authenticated user profiles, persistent configuration storage,
              role-based permissions and secure backend services.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SettingsNav({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={
        "mb-1 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition " +
        (active
          ? "bg-slate-950 text-white"
          : "text-slate-600 hover:bg-slate-50")
      }
    >
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4" />
        {label}
      </span>

      <ChevronRight className="h-4 w-4 opacity-50" />
    </button>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-slate-200 p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>

      <div>
        <h2 className="font-semibold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>

      <input
        value={value}
        readOnly
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700 outline-none"
      />
    </label>
  );
}

function ToggleRow({
  title,
  description,
  enabled,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-label={"Toggle " + title}
        className={
          "relative h-6 w-11 shrink-0 rounded-full transition " +
          (enabled ? "bg-indigo-600" : "bg-slate-300")
        }
      >
        <span
          className={
            "absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition " +
            (enabled ? "left-6" : "left-1")
          }
        />
      </button>
    </div>
  );
}

function SecurityCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
          {value}
        </span>
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function DataCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <div className="mt-2 flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-950">{value}</span>

        <span className="mb-1 text-xs text-slate-400">{detail}</span>
      </div>
    </div>
  );
}

function ComplianceRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 px-6 py-4">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-4 w-4 text-emerald-600" />
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}