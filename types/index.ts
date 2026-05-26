// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'enterprise';
  credits: number;
  createdAt: Date;
}

// Lead Types
export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  title: string;
  phone?: string;
  website?: string;
  industry: string;
  companySize: string;
  location: string;
  linkedinUrl?: string;
  score: number;
  status: 'new' | 'contacted' | 'interested' | 'qualified' | 'lost';
  source: string;
  tags: string[];
  notes?: string;
  savedAt?: Date;
  lastContacted?: Date;
}

// Search and Filter Types
export interface SearchFilters {
  query: string;
  industry?: string[];
  companySize?: string[];
  location?: string[];
  score?: {
    min: number;
    max: number;
  };
  status?: string[];
}

export interface SearchResult {
  leads: Lead[];
  total: number;
  page: number;
  pageSize: number;
}

// Outreach Types
export interface OutreachTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  variables: string[];
  createdAt: Date;
}

export interface OutreachMessage {
  id: string;
  leadId: string;
  templateId: string;
  subject: string;
  body: string;
  status: 'draft' | 'sent' | 'failed';
  sentAt?: Date;
  response?: string;
}

// CRM Pipeline Types
export interface Pipeline {
  id: string;
  name: string;
  stages: PipelineStage[];
}

export interface PipelineStage {
  id: string;
  name: string;
  color: string;
  leads: Lead[];
  order: number;
}

// Workspace/Settings Types
export interface WorkspaceSettings {
  id: string;
  name: string;
  logo?: string;
  theme: 'light' | 'dark';
  defaultOutreachTemplate?: string;
  aiModel: 'gpt-4' | 'gpt-3.5-turbo';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalLeads: number;
  contactedLeads: number;
  interestedLeads: number;
  conversionRate: number;
  avgScore: number;
}
