export type LeadStatus = "HOT" | "WARM" | "COLD";

export interface LeadRecord {
  id: string;
  business_name: string;
  industry: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
  company_size: string;
  activity_status: string;
  intent_signals: string[];
  lead_score: number;
  lead_status: LeadStatus;
  overview: string;
  last_updated: string;
}

export const leads: LeadRecord[] = [
  {
    id: "1",
    business_name: "Nebula IT Labs",
    industry: "IT Services",
    location: "Munich, Germany",
    website: "https://nebula-itlabs.com",
    email: "hello@nebula-itlabs.com",
    phone: "+49 89 1234 5678",
    socials: {
      linkedin: "https://linkedin.com/company/nebula-itlabs",
      instagram: "https://instagram.com/nebula_itlabs",
      twitter: "https://twitter.com/nebula_itlabs",
    },
    company_size: "Medium",
    activity_status: "Active",
    intent_signals: ["Running ads", "Hiring", "New website"],
    lead_score: 86,
    lead_status: "HOT",
    overview: "Full-stack IT services with managed cloud operations, data security, and digital transformation strategy.",
    last_updated: "2 hours ago",
  },
  {
    id: "2",
    business_name: "ClearPath Dental",
    industry: "Dentists",
    location: "Los Angeles, USA",
    website: "https://clearpathdental.com",
    email: "contact@clearpathdental.com",
    phone: "+1 323 555 0192",
    socials: {
      linkedin: "https://linkedin.com/company/clearpath-dental",
      instagram: "https://instagram.com/clearpathdental",
      twitter: "https://twitter.com/clearpathdental",
    },
    company_size: "Small",
    activity_status: "Semi-active",
    intent_signals: ["Hiring"],
    lead_score: 64,
    lead_status: "WARM",
    overview: "A modern dental practice focusing on patient experience, family dentistry, and cosmetic procedures.",
    last_updated: "1 day ago",
  },
  {
    id: "3",
    business_name: "Atlas Realty Group",
    industry: "Real Estate Agency",
    location: "Miami, USA",
    website: "https://atlasrealtygrp.com",
    email: "sales@atlasrealtygrp.com",
    phone: "+1 305 555 0124",
    socials: {
      linkedin: "https://linkedin.com/company/atlas-realty-group",
      instagram: "https://instagram.com/atlasrealtygrp",
      twitter: "https://twitter.com/atlasrealtygrp",
    },
    company_size: "Medium",
    activity_status: "Active",
    intent_signals: ["New website"],
    lead_score: 73,
    lead_status: "WARM",
    overview: "Residential and commercial real estate brokerage specializing in high-growth urban markets.",
    last_updated: "4 hours ago",
  },
  {
    id: "4",
    business_name: "Pulse Growth Labs",
    industry: "SaaS Marketing",
    location: "Toronto, Canada",
    website: "https://pulsegrowthlabs.com",
    email: "team@pulsegrowthlabs.com",
    phone: "+1 416 555 0167",
    socials: {
      linkedin: "https://linkedin.com/company/pulse-growth-labs",
      instagram: "https://instagram.com/pulsegrowthlabs",
      twitter: "https://twitter.com/pulsegrowthlabs",
    },
    company_size: "Small",
    activity_status: "Active",
    intent_signals: ["Running ads", "Hiring"],
    lead_score: 79,
    lead_status: "WARM",
    overview: "SaaS marketing agency helping product-led startups scale acquisition and retention campaigns.",
    last_updated: "3 days ago",
  },
  {
    id: "5",
    business_name: "Greenline Wellness Clinic",
    industry: "Dentists",
    location: "Houston, USA",
    website: "https://greenlinewellnessclinic.com",
    email: "info@greenlinewellnessclinic.com",
    phone: "+1 713 555 0141",
    socials: {
      linkedin: "https://linkedin.com/company/greenline-wellness-clinic",
      instagram: "https://instagram.com/greenlinewellnessclinic",
      twitter: "https://twitter.com/greenlinewellness",
    },
    company_size: "Small",
    activity_status: "Active",
    intent_signals: ["New website"],
    lead_score: 58,
    lead_status: "WARM",
    overview: "Community-focused dental clinic with a strong emphasis on patient care and wellness services.",
    last_updated: "5 hours ago",
  },
  {
    id: "6",
    business_name: "Aurora Cyber Defense",
    industry: "IT Services",
    location: "Berlin, Germany",
    website: "https://auroracyberdefense.com",
    email: "hello@auroracyberdefense.com",
    phone: "+49 30 555 0123",
    socials: {
      linkedin: "https://linkedin.com/company/aurora-cyber-defense",
      instagram: "https://instagram.com/auroracyberdefense",
      twitter: "https://twitter.com/auroracyberdefense",
    },
    company_size: "Large",
    activity_status: "Active",
    intent_signals: ["Hiring", "Running ads"],
    lead_score: 92,
    lead_status: "HOT",
    overview: "Enterprise cybersecurity firm providing managed detection, response, and compliance services.",
    last_updated: "30 minutes ago",
  },
];

export function filterLeads(query: string, filters: Record<string, string>) {
  const normalizedQuery = query.trim().toLowerCase();

  return leads.filter((lead) => {
    const matchesQuery = !normalizedQuery ||
      [lead.business_name, lead.industry, lead.location].some((value) => value.toLowerCase().includes(normalizedQuery));

    const matchesCountry = !filters.country || filters.country === "All" || lead.location.toLowerCase().includes(filters.country.toLowerCase());
    const matchesIndustry = !filters.industry || filters.industry === "All" || lead.industry === filters.industry;
    const matchesSize = !filters.size || filters.size === "All" || lead.company_size === filters.size;
    const matchesQuality = !filters.quality || filters.quality === "All" || lead.lead_status === filters.quality;
    const matchesHiring = !filters.hiring || filters.hiring === "All" || (filters.hiring === "Hiring" ? lead.intent_signals.includes("Hiring") : !lead.intent_signals.includes("Hiring"));

    return matchesQuery && matchesCountry && matchesIndustry && matchesSize && matchesQuality && matchesHiring;
  });
}

export function getLeadById(id: string) {
  return leads.find((lead) => lead.id === id);
}
