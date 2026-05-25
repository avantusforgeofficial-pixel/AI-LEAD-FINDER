export type LeadCategory = "HOT" | "WARM" | "COLD";

export interface LeadSocials {
  linkedin: string | null;
  instagram: string | null;
}

export interface Lead {
  business_name: string;
  industry: string;
  location: string;
  website: string | null;
  email: string | null;
  phone: string | null;
  socials: LeadSocials;
  company_size: "Small" | "Medium" | "Large" | "Unknown";
  activity_status: "Active" | "Semi-active" | "Inactive" | "Unknown";
  intent_signals: string[];
  lead_score: number;
  lead_category: LeadCategory;
}

export type RawLead = Omit<Lead, "lead_score" | "lead_category">;

export interface LeadSearchResult {
  query: string;
  total_leads: number;
  leads: Lead[];
}

export interface ParsedQuery {
  industry: string;
  location: string;
  filters: Record<string, string>;
}
