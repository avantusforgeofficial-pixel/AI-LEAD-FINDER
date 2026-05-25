import Link from "next/link";
import { ChevronRight, ClipboardList, HeartPulse, Inbox, LifeBuoy, Sparkles, UserCircle2 } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Sparkles },
  { href: "/leads/1", label: "Leads", icon: Inbox },
  { href: "/outreach", label: "AI Outreach", icon: HeartPulse },
  { href: "/crm", label: "CRM", icon: ClipboardList },
  { href: "/settings", label: "Settings", icon: UserCircle2 },
];

export function Sidebar() {
  return (
    <aside className="hidden h-full w-72 flex-col gap-6 border-r border-white/10 px-6 py-8 lg:flex">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Lead Finder</p>
        <h2 className="text-2xl font-semibold text-white">SaaS control room</h2>
      </div>
      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-5 w-5 text-slate-400 transition group-hover:text-accent" />
            <span>{item.label}</span>
            <ChevronRight className="ml-auto h-4 w-4 text-slate-500 transition group-hover:text-white" />
          </Link>
        ))}
      </div>
      <div className="mt-auto rounded-3xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-sm text-slate-400">Need help with a campaign?</p>
        <p className="mt-3 text-sm font-semibold text-white">Use AI outreach to build targeted messaging faster.</p>
      </div>
    </aside>
  );
}
