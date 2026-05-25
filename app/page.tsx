import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intelligent lead discovery",
    description: "Find relevant prospects using advanced filters and AI-driven scoring.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-ready insights",
    description: "Surface buying intent, company size, and outbound priority automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-quality UI",
    description: "Premium dark SaaS experience with responsive dashboards and workflows.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="glass-card rounded-3xl border border-white/10 p-10 shadow-glow backdrop-blur-2xl">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
                <Sparkles className="h-4 w-4" />
                Launch-ready SaaS dashboard for AI Lead Finder
              </div>
              <div className="space-y-5">
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Modern lead generation, powered by AI and premium UX.
                </h1>
                <p className="max-w-2xl text-slate-300 sm:text-lg">
                  Build trust with prospects, track pipeline activity, and convert more opportunities from a unified dashboard.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/auth/login" className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                  Start demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/dashboard" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10">
                  View dashboard
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-slate-900/50 p-1">
              <div className="h-full rounded-[1.75rem] bg-slate-950/80 p-8 text-white shadow-2xl shadow-slate-950/40">
                <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-400">Live preview</p>
                <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-xl shadow-violet-500/5">
                  <div className="space-y-3">
                    <div className="h-2.5 w-16 rounded-full bg-slate-700" />
                    <div className="h-4 w-3/5 rounded-full bg-slate-700" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {features.map((feature) => (
                      <div key={feature.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                        <feature.icon className="mb-3 h-5 w-5 text-cyan-300" />
                        <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                        <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
