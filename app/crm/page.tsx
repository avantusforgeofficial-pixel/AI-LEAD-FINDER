import { Card } from "@/components/ui/card";

const stages = [
  { title: "New Leads", count: 32, description: "Fresh prospects waiting to be qualified." },
  { title: "Contacted", count: 18, description: "Leads with active outreach threads." },
  { title: "Replied", count: 9, description: "Engaged prospects ready for follow-up." },
  { title: "Closed", count: 4, description: "Won conversations moved to revenue." },
];

export default function CRMPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">CRM pipeline</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Pipeline board</h1>
          <p className="mt-3 text-slate-300">Monitor lead progress from prospect to closed deal on a single elegant board.</p>
        </div>
        <div className="grid gap-6 xl:grid-cols-4">
          {stages.map((stage) => (
            <Card key={stage.title} className="space-y-4 rounded-[2rem] border border-white/10 p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">{stage.title}</h2>
                <div className="rounded-3xl bg-slate-900/70 px-4 py-2 text-sm font-semibold text-white">{stage.count}</div>
              </div>
              <p className="text-sm leading-6 text-slate-400">{stage.description}</p>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-300">
                <p>Example lead: Nebula IT Labs</p>
                <p className="mt-2 text-slate-400">Next step: schedule discovery call</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
