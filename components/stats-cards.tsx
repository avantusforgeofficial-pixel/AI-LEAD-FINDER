import { BarChart3, Flame, Mail, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const cards = [
  { label: "Total Leads", value: "1,248", icon: Search, accent: "from-cyan-500/70 to-slate-900" },
  { label: "HOT Leads", value: "324", icon: Flame, accent: "from-rose-500/70 to-slate-900" },
  { label: "Emails Found", value: "886", icon: Mail, accent: "from-indigo-500/70 to-slate-900" },
  { label: "Active Searches", value: "17", icon: BarChart3, accent: "from-violet-500/70 to-slate-900" },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label} className="overflow-hidden p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
            </div>
            <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${card.accent}`}>
              <card.icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-slate-400">Updated 2 minutes ago with live engagement metrics.</p>
        </Card>
      ))}
    </div>
  );
}
