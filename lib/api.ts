import type { LeadRecord } from "./mock-data";

export async function fetchLeads(query: string, filters: Record<string, string>): Promise<LeadRecord[]> {
  const params = new URLSearchParams({ query, ...filters });
  const response = await fetch(`/api/search?${params.toString()}`);
  return response.json();
}

export async function fetchAllLeads(): Promise<LeadRecord[]> {
  const response = await fetch("/api/leads");
  return response.json();
}

export async function saveLead(leadId: string) {
  const response = await fetch("/api/save-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ leadId }),
  });
  return response.json();
}

export async function generateOutreach(payload: { leadId: string; channel: string; tone: string }) {
  const response = await fetch("/api/outreach", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.json();
}
