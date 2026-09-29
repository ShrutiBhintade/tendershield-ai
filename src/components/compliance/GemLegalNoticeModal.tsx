'use client';
import React, { useState } from 'react';
import { FileText, Send, Check, X, Copy } from 'lucide-react';

interface LegalNoticeProps {
  isOpen: boolean;
  onClose: () => void;
  bidderName?: string;
  tenderId?: string;
  discrepancyType?: string;
}

export default function GeMLegalNoticeModal({
  isOpen,
  onClose,
  bidderName = "ABC Industrial Solutions",
  tenderId = "GEM/2026/B/10482",
  discrepancyType = "Annual Turnover Shortfall"
}: LegalNoticeProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const noticeText = `OFFICIAL COMMUNICATION - GOVERNMENT e-MARKETPLACE (GeM)
Ref Tender ID: ${tenderId}
Recipient: ${bidderName}
Subject: Clarification Required Regarding Document Discrepancy (${discrepancyType})

Dear Bidder,

During automated technical screening for Tender ID ${tenderId}, the following discrepancy was identified:

1. Rule/Clause Ref: GeM General Terms & Conditions (GTC) Clause 4.2 & Section III Eligibility Criteria.
2. Requirement: Minimum average annual turnover of ₹10.00 Cr for the past 3 financial years.
3. Submitted Evidence: Audited Financial Statements indicate ₹8.40 Cr.

You are requested to submit valid documentary proof or CA-certified UDIN justification within 48 hours via the GeM Bidder Portal. Failure to respond within the stipulated timeline may result in disqualification under Clause 8.1.

Issued by:
Procurement Officer - Evaluation Cell
Tender Integrity Platform (TenderShield AI)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(noticeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
              Auto-Drafted GeM Formal Notice
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Content */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800 max-h-80 overflow-y-auto">
            {noticeText}
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            * This notice is automatically constructed using GeM GTC regulatory clauses and extracted bid metadata.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-xs font-medium transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied to Clipboard' : 'Copy Text'}
          </button>
          <button
            onClick={() => {
              alert("Notice dispatched directly to Bidder Portal!");
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
            Dispatch Formal GeM Notice
          </button>
        </div>
      </div>
    </div>
  );
}