import { Sparkles, TrendingUp, UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";

const insights = [
  {
    icon: TrendingUp,
    title: "Growth signal",
    text: "This lead has a high activity score and recent digital marketing updates.",
  },
  {
    icon: UserPlus,
    title: "Hiring intent",
    text: "Jobs posted in the last 30 days indicate active hiring and expansion opportunities.",
  },
  {
    icon: Sparkles,
    title: "New website",
    text: "Fresh website launch suggests renewed marketing investment and lead readiness.",
  },
];

export function AIInsightsPanel() {
  return (
    <Card className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI insights</p>
        <h3 className="mt-2 text-xl font-semibold text-white">Buying intent & campaign signals</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <insight.icon className="mb-4 h-6 w-6 text-accent" />
            <h4 className="text-lg font-semibold text-white">{insight.title}</h4>
            <p className="mt-3 text-sm leading-6 text-slate-400">{insight.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
