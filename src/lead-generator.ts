import { Lead, LeadSearchResult, ParsedQuery, RawLead } from "./types";
import { parseQuery } from "./parser";
import { filterLeads, sampleLeads } from "./data-source";

export async function generateLeadsForQuery(query: string): Promise<LeadSearchResult> {
  const parsed = parseQuery(query);
  const leads = await fetchLeadRecords(parsed);
  const scoredLeads = leads.map(scoreLead);

  return {
    query,
    total_leads: scoredLeads.length,
    leads: scoredLeads,
  };
}

async function fetchLeadRecords(parsed: ParsedQuery): Promise<RawLead[]> {
  return filterLeads(parsed, sampleLeads);
}

function scoreLead(lead: RawLead): Lead {
  const score = calculateScore(lead);
  const category = categorizeScore(score);

  return {
    ...lead,
    lead_score: score,
    lead_category: category,
  };
}

function calculateScore(lead: RawLead): number {
  let score = 0;

  if (lead.website) score += 20;
  if (lead.email) score += 20;
  if (lead.phone) score += 10;
  if (lead.socials.linkedin) score += 10;
  if (lead.socials.instagram) score += 5;

  switch (lead.company_size) {
    case "Large":
      score += 15;
      break;
    case "Medium":
      score += 10;
      break;
    case "Small":
      score += 5;
      break;
  }

  switch (lead.activity_status) {
    case "Active":
      score += 15;
      break;
    case "Semi-active":
      score += 8;
      break;
    case "Inactive":
      score += 0;
      break;
  }

  const signalBonus = Math.min(lead.intent_signals.length * 5, 20);
  score += signalBonus;

  return Math.min(100, Math.max(0, Math.round(score)));
}

function categorizeScore(score: number): Lead["lead_category"] {
  if (score >= 80) return "HOT";
  if (score >= 50) return "WARM";
  return "COLD";
}

export function emptyResultWithQuery(query: string): LeadSearchResult {
  return {
    query,
    total_leads: 0,
    leads: [],
  };
}
