import { type LeadRecord } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Globe2, Mail, Smartphone, Sparkles } from "lucide-react";
import Link from "next/link";

export function LeadCard({ lead }: { lead: LeadRecord }) {
  return (
    <Card className="grid gap-5 md:grid-cols-[1.8fr_1fr] lg:grid-cols-[2fr_1fr]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-3xl bg-slate-900/70 p-3 text-cyan-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{lead.business_name}</h3>
            <p className="text-sm text-slate-400">{lead.industry} · {lead.location}</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Website</p>
            <a href={lead.website} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-slate-200 hover:text-accent">
              <Globe2 className="h-4 w-4" />
              {new URL(lead.website).hostname}
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-2 inline-flex items-center gap-2 text-slate-200"><Mail className="h-4 w-4" />{lead.email}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-slate-200"><Smartphone className="h-4 w-4" />{lead.phone}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Lead Score</p>
          <p className="text-4xl font-semibold text-white">{lead.lead_score}</p>
          <p className="text-sm text-slate-300">Status: {lead.lead_status}</p>
        </div>
        <Link href={`/outreach`} className="inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
          Generate outreach
        </Link>
      </div>
    </Card>
  );
}
