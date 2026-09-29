'use client';
import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, FileSearch, Eye, AlertTriangle } from 'lucide-react';

interface ForensicAnalysisProps {
  documentName?: string;
  elaScore?: number; // 0 to 100
  isTampered?: boolean;
}

export default function ForensicAnalysisCard({
  documentName = "Financial_Statement_FY2024-25.pdf",
  elaScore = 98.4,
  isTampered = false
}: ForensicAnalysisProps) {
  const [showElaHeatmap, setShowElaHeatmap] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <FileSearch className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
            Forensic PDF & ELA Tamper Analysis
          </h3>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
          isTampered 
            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-800' 
            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
        }`}>
          {isTampered ? <ShieldAlert className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
          {isTampered ? 'Potential Tampering Detected' : 'Authenticity Verified'}
        </span>
      </div>

      {/* Target Document */}
      <div className="text-xs text-slate-500 dark:text-slate-400">
        Analyzing: <span className="font-mono text-slate-700 dark:text-slate-300">{documentName}</span>
      </div>

      {/* Forensic Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Metric 1: ELA Score */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400">Error Level Analysis (ELA)</div>
          <div className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
            {elaScore}%
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5">
            Compression Uniformity Normal
          </div>
        </div>

        {/* Metric 2: Metadata & Font Anomaly */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400">Font & Metadata Check</div>
          <div className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
            0 Anomalies
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Original PDF structure intact
          </div>
        </div>

        {/* Metric 3: CA Stamp Verification */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400">Digital CA Stamp Integrity</div>
          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            Verified
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Pixel grid matches authentic seal
          </div>
        </div>
      </div>

      {/* Heatmap Toggle & Live Preview */}
      <div className="pt-2">
        <button
          onClick={() => setShowElaHeatmap(!showElaHeatmap)}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-md transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          {showElaHeatmap ? 'Hide ELA Compression Heatmap' : 'Toggle Visual ELA Heatmap Overlay'}
        </button>

        {showElaHeatmap && (
          <div className="mt-3 p-3 bg-slate-950 rounded-lg text-slate-200 text-xs space-y-2 border border-slate-800">
            <div className="flex justify-between items-center text-slate-400">
              <span>Pixel Variance Heatmap Representation</span>
              <span className="font-mono text-[10px]">Algorithm: Multi-Scale ELA</span>
            </div>
            <div className="h-24 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 rounded border border-slate-800 flex items-center justify-center text-slate-500 font-mono text-[11px]">
              [ Heatmap Preview Layer: No high-contrast pixel modifications detected ]
            </div>
          </div>
        )}
      </div>
    </div>
  );
}