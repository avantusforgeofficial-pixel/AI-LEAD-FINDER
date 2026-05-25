import { useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const suggestions = useMemo(
    () => ["Find dentists in USA", "Find IT companies in Germany", "Find SaaS startups in Canada"],
    []
  );

  return (
    <div className="glass-panel rounded-[2rem] border border-white/10 p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Global search</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Search quality business leads</h2>
        </div>
        <Button onClick={onSubmit}>Run search</Button>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Find dentists in USA" className="pl-11" />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-400">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-accent hover:text-white"
            onClick={() => onChange(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
