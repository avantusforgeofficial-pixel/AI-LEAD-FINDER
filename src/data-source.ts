import { ParsedQuery, RawLead } from "./types";

export const sampleLeads: RawLead[] = [
  {
    business_name: "NorthStar Digital",
    industry: "Marketing Agency",
    location: "Berlin, Germany",
    website: null,
    email: null,
    phone: null,
    socials: {
      linkedin: null,
      instagram: null,
    },
    company_size: "Medium",
    activity_status: "Active",
    intent_signals: ["New website", "Hiring"],
  },
  {
    business_name: "Maple Dental Partners",
    industry: "Dentists",
    location: "Toronto, Canada",
    website: null,
    email: null,
    phone: null,
    socials: {
      linkedin: null,
      instagram: null,
    },
    company_size: "Small",
    activity_status: "Semi-active",
    intent_signals: ["Hiring"],
  },
  {
    business_name: "SilverLine IT Services",
    industry: "IT Services",
    location: "Munich, Germany",
    website: null,
    email: null,
    phone: null,
    socials: {
      linkedin: null,
      instagram: null,
    },
    company_size: "Medium",
    activity_status: "Active",
    intent_signals: ["Running ads", "Hiring"],
  },
  {
    business_name: "Oceanview Real Estate",
    industry: "Real Estate Agency",
    location: "Miami, USA",
    website: null,
    email: null,
    phone: null,
    socials: {
      linkedin: null,
      instagram: null,
    },
    company_size: "Medium",
    activity_status: "Active",
    intent_signals: ["New website"],
  },
  {
    business_name: "Pulse Growth Labs",
    industry: "SaaS Marketing",
    location: "New York, USA",
    website: null,
    email: null,
    phone: null,
    socials: {
      linkedin: null,
      instagram: null,
    },
    company_size: "Small",
    activity_status: "Active",
    intent_signals: ["Hiring", "Running ads"],
  },
  {
    business_name: "Greenline Wellness Clinic",
    industry: "Dentists",
    location: "Houston, USA",
    website: null,
    email: null,
    phone: null,
    socials: {
      linkedin: null,
      instagram: null,
    },
    company_size: "Small",
    activity_status: "Active",
    intent_signals: ["New website"],
  },
];

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function matchesText(value: string, term: string): boolean {
  return normalize(value).includes(normalize(term));
}

export function filterLeads(parsed: ParsedQuery, leads: RawLead[]): RawLead[] {
  return leads.filter((lead) => {
    if (parsed.industry && !matchesText(lead.industry, parsed.industry)) {
      return false;
    }

    if (
      parsed.location &&
      parsed.location.toLowerCase() !== "global" &&
      !matchesText(lead.location, parsed.location)
    ) {
      return false;
    }

    for (const [key, value] of Object.entries(parsed.filters)) {
      const filterText = normalize(value);

      if (key === "size" || key === "company size") {
        if (!matchesText(lead.company_size, filterText)) {
          return false;
        }
      } else if (filterText.includes("website")) {
        if (!lead.website) {
          return false;
        }
      } else if (filterText.includes("hiring")) {
        if (!lead.intent_signals.some((signal) => normalize(signal).includes("hiring"))) {
          return false;
        }
      } else if (filterText.includes("ads")) {
        if (!lead.intent_signals.some((signal) => normalize(signal).includes("ads"))) {
          return false;
        }
      } else if (filterText.includes("active")) {
        if (lead.activity_status !== "Active") {
          return false;
        }
      } else {
        if (
          !matchesText(lead.business_name, value) &&
          !matchesText(lead.industry, value) &&
          !matchesText(lead.location, value)
        ) {
          return false;
        }
      }
    }

    return true;
  });
}
