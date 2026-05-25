import { ParsedQuery } from "./types";

export function parseQuery(input: string): ParsedQuery {
  const normalized = input.trim();
  const filters: Record<string, string> = {};

  const parts = normalized
    .split(/\s+with\s+/i)
    .map((part) => part.trim());

  const base = parts[0];
  if (parts[1]) {
    parts[1].split(/,|and|&/i).forEach((filterValue) => {
      const trimmed = filterValue.trim();
      if (!trimmed) {
        return;
      }
      const [key, value] = trimmed.split(/\s*:\s*/);
      if (value) {
        filters[key.toLowerCase()] = value;
      } else {
        filters[trimmed.toLowerCase()] = trimmed;
      }
    });
  }

  const locationMatch = base.match(/in\s+([A-Za-z\s]+)$/i);
  const location = locationMatch ? locationMatch[1].trim() : "Global";
  const industry = locationMatch ? base.slice(0, locationMatch.index).trim() : base;

  return {
    industry: industry || "",
    location: location || "Global",
    filters,
  };
}
