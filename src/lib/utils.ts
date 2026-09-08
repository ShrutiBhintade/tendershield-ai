import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`;
  }
  return `₹${value.toLocaleString('en-IN')}`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-IN');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    COMPLIANT: 'bg-green-100 text-green-800 border-green-200',
    PARTIALLY_COMPLIANT: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    REVIEW_REQUIRED: 'bg-amber-100 text-amber-800 border-amber-200',
    NON_COMPLIANT: 'bg-red-100 text-red-800 border-red-200',
    NOT_VERIFIED: 'bg-gray-100 text-gray-800 border-gray-200',
    MISSING: 'bg-red-100 text-red-800 border-red-200',
    VERIFIED: 'bg-green-100 text-green-800 border-green-200',
    FAILED: 'bg-red-100 text-red-800 border-red-200',
    PENDING: 'bg-blue-100 text-blue-800 border-blue-200',
    NOT_APPLICABLE: 'bg-gray-100 text-gray-600 border-gray-200',
    MANUAL_REVIEW: 'bg-amber-100 text-amber-800 border-amber-200',
    ACTIVE: 'bg-green-100 text-green-800 border-green-200',
    CLOSED: 'bg-blue-100 text-blue-800 border-blue-200',
    AWARDED: 'bg-purple-100 text-purple-800 border-purple-200',
    CANCELLED: 'bg-red-100 text-red-800 border-red-200',
    DRAFT: 'bg-gray-100 text-gray-800 border-gray-200',
    UNDER_REVIEW: 'bg-blue-100 text-blue-800 border-blue-200',
    QUALIFIED: 'bg-green-100 text-green-800 border-green-200',
    DISQUALIFIED: 'bg-red-100 text-red-800 border-red-200',
    CLARIFICATION_REQUIRED: 'bg-amber-100 text-amber-800 border-amber-200',
    SHORTLISTED: 'bg-purple-100 text-purple-800 border-purple-200',
    CRITICAL: 'bg-red-100 text-red-800 border-red-200',
    HIGH: 'bg-orange-100 text-orange-800 border-orange-200',
    MEDIUM: 'bg-amber-100 text-amber-800 border-amber-200',
    LOW: 'bg-green-100 text-green-800 border-green-200',
    OPEN: 'bg-red-100 text-red-800 border-red-200',
    ACKNOWLEDGED: 'bg-blue-100 text-blue-800 border-blue-200',
    RESOLVED: 'bg-green-100 text-green-800 border-green-200',
    FALSE_POSITIVE: 'bg-gray-100 text-gray-800 border-gray-200',
  };
  return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
}

export function getRiskColor(level: string): string {
  const colors: Record<string, string> = {
    CRITICAL: 'text-red-600 bg-red-50 border-red-200',
    HIGH: 'text-orange-600 bg-orange-50 border-orange-200',
    MEDIUM: 'text-amber-600 bg-amber-50 border-amber-200',
    LOW: 'text-green-600 bg-green-50 border-green-200',
  };
  return colors[level] || 'text-gray-600 bg-gray-50 border-gray-200';
}

export function getConfidenceColor(confidence: number): string {
  if (confidence >= 90) return 'text-green-600';
  if (confidence >= 70) return 'text-amber-600';
  return 'text-red-600';
}

export function getConfidenceBadgeColor(confidence: number): string {
  if (confidence >= 90) return 'bg-green-100 text-green-800';
  if (confidence >= 70) return 'bg-amber-100 text-amber-800';
  return 'bg-red-100 text-red-800';
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function generateId(prefix: string = ''): string {
  return `${prefix}${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function calculateComplianceScore(results: { status: string; isMandatory: boolean; weight: number }[]): number {
  if (results.length === 0) return 0;
  let totalWeight = 0;
  let earnedWeight = 0;
  for (const result of results) {
    totalWeight += result.weight;
    if (result.status === 'COMPLIANT') {
      earnedWeight += result.weight;
    } else if (result.status === 'PARTIALLY_COMPLIANT') {
      earnedWeight += result.weight * 0.5;
    }
  }
  return Math.round((earnedWeight / totalWeight) * 100);
}

export function calculateRiskScore(findings: { severity: string; score: number }[]): number {
  const severityWeights: Record<string, number> = {
    CRITICAL: 1.0,
    HIGH: 0.7,
    MEDIUM: 0.4,
    LOW: 0.1,
  };
  let totalScore = 0;
  for (const finding of findings) {
    totalScore += finding.score * (severityWeights[finding.severity] || 0.4);
  }
  return Math.min(100, Math.round(totalScore));
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}