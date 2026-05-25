import Link from "next/link";
import { type LeadRecord } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Mail, Save, ShieldCheck, Smartphone } from "lucide-react";

interface LeadTableProps {
  leads: LeadRecord[];
}

const statusStyles: Record<string, string> = {
  HOT: "bg-rose-500/10 text-rose-300",
  WARM: "bg-amber-500/10 text-amber-300",
  COLD: "bg-slate-700 text-slate-200",
};

export function LeadTable({ leads }: LeadTableProps) {
  if (!leads.length) {
    return (
      <Card className="py-16 text-center text-slate-400">
        <h3 className="text-xl font-semibold text-white">No leads found yet</h3>
        <p className="mt-3">Adjust your filters or search query to discover more prospects.</p>
      </Card>
    );
  }

  return (
    <Card className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
        <thead>
          <tr className="text-slate-400">
            <th className="px-4 py-3">Business Name</th>
            <th className="px-4 py-3">Website</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Country</th>
            <th className="px-4 py-3">Score</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border border-white/10 bg-slate-950/70 transition hover:bg-white/5">
              <td className="px-4 py-4 font-semibold text-white">{lead.business_name}</td>
              <td className="px-4 py-4 text-slate-300">
                <a href={lead.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-200 hover:text-accent">
                  <ExternalLink className="h-4 w-4" />
                  Visit
                </a>
              </td>
              <td className="px-4 py-4 text-slate-300">
                <a href={`mailto:${lead.email}`} className="text-slate-200 hover:text-accent">{lead.email}</a>
              </td>
              <td className="px-4 py-4 text-slate-300 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-slate-400" />
                {lead.phone}
              </td>
              <td className="px-4 py-4 text-slate-300">{lead.location}</td>
              <td className="px-4 py-4 text-white">{lead.lead_score}</td>
              <td className="px-4 py-4">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[lead.lead_status]}`}>
                  {lead.lead_status}
                </span>
              </td>
              <td className="px-4 py-4 space-x-2">
                <Button variant="ghost" className="rounded-xl px-3 py-2 text-xs">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="ghost" className="rounded-xl px-3 py-2 text-xs">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Link href={`/leads/${lead.id}`} className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:bg-white/10">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
