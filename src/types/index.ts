export type ComplianceStatus =
  | 'COMPLIANT'
  | 'PARTIALLY_COMPLIANT'
  | 'REVIEW_REQUIRED'
  | 'NON_COMPLIANT'
  | 'NOT_VERIFIED'
  | 'MISSING';

export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type VerificationStatus = 'VERIFIED' | 'FAILED' | 'PENDING' | 'NOT_APPLICABLE' | 'MANUAL_REVIEW';

export type TenderStatus = 'ACTIVE' | 'CLOSED' | 'AWARDED' | 'CANCELLED' | 'DRAFT';

export type BidderStatus = 'UNDER_REVIEW' | 'QUALIFIED' | 'DISQUALIFIED' | 'CLARIFICATION_REQUIRED' | 'SHORTLISTED';

export type DocumentType =
  | 'GST_CERTIFICATE'
  | 'PAN_CARD'
  | 'UDYAM_CERTIFICATE'
  | 'FINANCIAL_STATEMENT'
  | 'OEM_AUTHORIZATION'
  | 'EXPERIENCE_CERTIFICATE'
  | 'WORK_ORDER'
  | 'LOCAL_CONTENT_DECLARATION'
  | 'STARTUP_CERTIFICATE'
  | 'NSIC_CERTIFICATE'
  | 'EPFO_ESIC_EVIDENCE'
  | 'BLACKLISTING_DECLARATION'
  | 'INCOME_TAX_RETURN'
  | 'COMPANY_REGISTRATION'
  | 'OTHER';

export type VerificationSource =
  | 'GST_PORTAL'
  | 'UDYAM_PORTAL'
  | 'PAN_PORTAL'
  | 'INCOME_TAX_PORTAL'
  | 'EPFO_PORTAL'
  | 'ESIC_PORTAL'
  | 'STARTUP_INDIA_PORTAL'
  | 'NSIC_PORTAL'
  | 'OEM_PORTAL'
  | 'DIGILOCKER'
  | 'BLACKLIST_PORTAL'
  | 'MOCK_PROVIDER';

export type AuditAction =
  | 'TENDER_UPLOADED'
  | 'REQUIREMENTS_EXTRACTED'
  | 'BIDDER_SUBMITTED'
  | 'DOCUMENTS_PROCESSED'
  | 'VERIFICATION_COMPLETED'
  | 'DISCREPANCY_DETECTED'
  | 'OFFICER_REVIEWED'
  | 'CLARIFICATION_REQUESTED'
  | 'EVIDENCE_VERIFIED'
  | 'DECISION_RECORDED'
  | 'RISK_CALCULATED'
  | 'COMPLIANCE_EVALUATED';

export interface Tender {
  id: string;
  title: string;
  referenceNumber: string;
  department: string;
  category: string;
  description: string;
  publishedDate: string;
  deadline: string;
  estimatedValue: number;
  status: TenderStatus;
  requirements: TenderRequirement[];
  bidders: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TenderRequirement {
  id: string;
  tenderId: string;
  code: string;
  title: string;
  description: string;
  category: string;
  isMandatory: boolean;
  threshold?: string;
  evidenceRequired: DocumentType[];
  verificationSource: VerificationSource[];
  weight: number;
  order: number;
}

export interface Bidder {
  id: string;
  tenderId: string;
  name: string;
  legalName: string;
  pan: string;
  gstin: string;
  udyamNumber?: string;
  registrationNumber: string;
  address: Address;
  contactPerson: ContactPerson;
  turnover: TurnoverInfo;
  experience: ExperienceInfo;
  certifications: Certification[];
  documents: BidDocument[];
  overallCompliance: number;
  riskScore: number;
  riskLevel: RiskLevel;
  status: BidderStatus;
  complianceResults: ComplianceResult[];
  riskFindings: RiskFinding[];
  crossDocumentFindings: CrossDocumentFinding[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface ContactPerson {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

export interface TurnoverInfo {
  declared: number;
  financialYear: string;
  evidenceDocumentId?: string;
  verifiedValue?: number;
}

export interface ExperienceInfo {
  claimedYears: number;
  evidenceDocumentId?: string;
  verifiedYears?: number;
  projects: ProjectExperience[];
}

export interface ProjectExperience {
  projectName: string;
  clientName: string;
  value: number;
  duration: string;
  completionDate: string;
  evidenceDocumentId?: string;
}

export interface Certification {
  type: DocumentType;
  number: string;
  issuingAuthority: string;
  issueDate: string;
  expiryDate?: string;
  status: VerificationStatus;
  documentId?: string;
}

export interface BidDocument {
  id: string;
  bidderId: string;
  tenderId: string;
  name: string;
  type: DocumentType;
  fileSize: number;
  mimeType: string;
  uploadDate: string;
  processingStatus: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  extractionStatus: 'PENDING' | 'EXTRACTING' | 'COMPLETED' | 'FAILED';
  verificationStatus: VerificationStatus;
  extractedFields: ExtractedField[];
  confidence: number;
  pages: number;
}

export interface ExtractedField {
  key: string;
  label: string;
  value: string;
  confidence: number;
  pageNumber?: number;
  boundingBox?: BoundingBox;
  source: 'AI_EXTRACTED' | 'MANUAL_ENTRY' | 'VERIFICATION_API';
}

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface VerificationResult {
  id: string;
  bidderId: string;
  requirementId: string;
  source: VerificationSource;
  status: VerificationStatus;
  result: Record<string, unknown>;
  confidence: number;
  checkedAt: string;
  evidence: string[];
  isLive: boolean;
  providerName: string;
}

export interface ComplianceResult {
  requirementId: string;
  requirementCode: string;
  requirementTitle: string;
  isMandatory: boolean;
  status: ComplianceStatus;
  evidence: EvidenceMapping[];
  confidence: number;
  finding: string;
  riskContribution: number;
  verifiedAt: string;
}

export interface EvidenceMapping {
  requirementId: string;
  documentId: string;
  documentName: string;
  documentType: DocumentType;
  pageNumber: number;
  extractedField: string;
  extractedValue: string;
  tenderThreshold?: string;
  comparisonResult: 'MATCH' | 'MISMATCH' | 'BELOW_THRESHOLD' | 'ABOVE_THRESHOLD' | 'INCONCLUSIVE';
  confidence: number;
  notes?: string;
}

export interface RiskFinding {
  id: string;
  bidderId: string;
  category: string;
  title: string;
  description: string;
  severity: RiskLevel;
  score: number;
  evidence: EvidenceMapping[];
  relatedRequirements: string[];
  detectedAt: string;
  status: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'FALSE_POSITIVE';
  officerNotes?: string;
}

export interface CrossDocumentFinding {
  id: string;
  bidderId: string;
  type: string;
  title: string;
  description: string;
  severity: RiskLevel;
  documents: {
    documentId: string;
    documentName: string;
    field: string;
    value: string;
    pageNumber?: number;
  }[];
  detectedAt: string;
  status: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'FALSE_POSITIVE';
}

export interface EntityNode {
  id: string;
  label: string;
  type: 'BIDDER' | 'PAN' | 'GST' | 'UDYAM' | 'OEM' | 'DIRECTOR' | 'ADDRESS' | 'COMPANY';
  value: string;
  status: 'MATCH' | 'MISMATCH' | 'PARTIAL' | 'UNVERIFIED';
  confidence: number;
  connections: string[];
}

export interface EntityGraph {
  nodes: EntityNode[];
  edges: EntityEdge[];
}

export interface EntityEdge {
  source: string;
  target: string;
  relationship: string;
  confidence: number;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  actor: string;
  actorRole: string;
  action: AuditAction;
  entityType: string;
  entityId: string;
  entityName: string;
  details: Record<string, unknown>;
  result: string;
  ipAddress?: string;
}

export interface OfficerDecision {
  id: string;
  bidderId: string;
  tenderId: string;
  officerId: string;
  officerName: string;
  decision: 'QUALIFIED' | 'DISQUALIFIED' | 'CLARIFICATION_REQUIRED' | 'UNDER_REVIEW';
  reasoning: string;
  reviewedFindings: string[];
  acknowledgedRisks: string[];
  createdAt: string;
  aiRecommendation?: AIRecommendation;
}

export interface AIRecommendation {
  summary: string;
  recommendation: 'QUALIFY' | 'DISQUALIFY' | 'REQUEST_CLARIFICATION' | 'ESCALATE';
  confidence: number;
  keyFactors: string[];
  supportingEvidence: string[];
  disclaimer: string;
}

export interface CopilotMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  citations?: Citation[];
  context?: {
    tenderId?: string;
    bidderId?: string;
    requirementId?: string;
  };
}

export interface Citation {
  documentId: string;
  documentName: string;
  pageNumber?: number;
  field?: string;
  value?: string;
}

export interface WhatIfScenario {
  id: string;
  tenderId: string;
  name: string;
  description: string;
  modifiedRequirements: {
    requirementId: string;
    originalThreshold: string;
    modifiedThreshold: string;
  }[];
  results: BidderScenarioResult[];
  createdAt: string;
}

export interface BidderScenarioResult {
  bidderId: string;
  bidderName: string;
  originalCompliance: number;
  originalRiskLevel: RiskLevel;
  newCompliance: number;
  newRiskLevel: RiskLevel;
  eligibilityChange: 'IMPROVED' | 'DEGRADED' | 'UNCHANGED';
}

export interface KPIData {
  activeTenders: number;
  bidsUnderReview: number;
  documentsProcessed: number;
  highRiskBids: number;
  potentialDiscrepancies: number;
  verificationCompletion: number;
  averageVerificationTime: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  label?: string;
}

export interface DashboardPriorityItem {
  bidderId: string;
  bidderName: string;
  tenderId: string;
  tenderTitle: string;
  compliance: number;
  riskLevel: RiskLevel;
  keyFinding: string;
  lastUpdated: string;
  action: 'REVIEW' | 'INVESTIGATE' | 'VIEW_EVIDENCE';
}