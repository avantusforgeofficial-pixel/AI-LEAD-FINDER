import { type ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";

interface FilterPanelProps {
  filters: {
    country: string;
    industry: string;
    size: string;
    quality: string;
    hiring: string;
  };
  onChange: (name: string, value: string) => void;
}

const options = {
  country: ["All", "USA", "Germany", "Canada", "UK"],
  industry: ["All", "Dentists", "IT Services", "Real Estate", "SaaS Marketing"],
  size: ["All", "Small", "Medium", "Large"],
  quality: ["All", "HOT", "WARM", "COLD"],
  hiring: ["All", "Hiring", "Not hiring"],
};

export function FilterPanel({ filters, onChange }: FilterPanelProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.name, event.target.value);
  }

  return (
    <Card className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Filters</p>
        <h3 className="mt-2 text-xl font-semibold text-white">Refine your search</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Select name="country" value={filters.country} onChange={handleChange}>
          {options.country.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
        <Select name="industry" value={filters.industry} onChange={handleChange}>
          {options.industry.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
        <Select name="size" value={filters.size} onChange={handleChange}>
          {options.size.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
        <Select name="quality" value={filters.quality} onChange={handleChange}>
          {options.quality.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
        <Select name="hiring" value={filters.hiring} onChange={handleChange}>
          {options.hiring.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </Select>
      </div>
    </Card>
  );
}
