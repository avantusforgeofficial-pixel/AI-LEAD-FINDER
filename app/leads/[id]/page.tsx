import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe2, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getLeadById } from "@/lib/mock-data";

export default function LeadDetailsPage({ params }: any) {
  const lead = getLeadById(params.id);

  if (!lead) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Lead details</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{lead.business_name}</h1>
          </div>
          <Link href="/dashboard" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to dashboard
          </Link>
        </div>
        <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <Card className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Company overview</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">{lead.overview}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Industry</p>
                <p className="mt-3 text-lg font-semibold text-white">{lead.industry}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Last updated</p>
                <p className="mt-3 text-lg font-semibold text-white">{lead.last_updated}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Company size</p>
                <p className="mt-3 text-lg font-semibold text-white">{lead.company_size}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Activity status</p>
                <p className="mt-3 text-lg font-semibold text-white">{lead.activity_status}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {lead.intent_signals.map((signal) => (
                <div key={signal} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200">
                  {signal}
                </div>
              ))}
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="space-y-5">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
                <div className="flex flex-col gap-4 text-slate-200">
                  <a href={lead.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-accent">
                    <Globe2 className="h-4 w-4" /> {lead.website}
                  </a>
                  <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-2 text-white hover:text-accent">
                    <Mail className="h-4 w-4" /> {lead.email}
                  </a>
                  <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-2 text-white hover:text-accent">
                    <Phone className="h-4 w-4" /> {lead.phone}
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Socials</p>
                <div className="grid gap-3">
                  <a href={lead.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm hover:bg-white/5">
                    <Linkedin className="h-4 w-4" /> LinkedIn Profile
                  </a>
                  <a href={lead.socials.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm hover:bg-white/5">
                    <MessageCircle className="h-4 w-4" /> Twitter
                  </a>
                </div>
              </div>
            </Card>
            <Card className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Suggested outreach</p>
              <p className="text-sm text-slate-300">Use our AI outreach workspace to compose a personalized message based on buying intent and lead activity.</p>
              <Link href="/outreach" className="inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                Create message
              </Link>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
