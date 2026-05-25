import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Settings</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Workspace preferences</h1>
          <p className="mt-3 text-slate-300">Manage API keys, billing, profile details, and your team settings in one place.</p>
        </div>
        <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <section className="glass-panel rounded-[2rem] border border-white/10 p-6">
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">API keys</p>
                <p className="mt-2 text-slate-300">Create a secure key to connect AI Lead Finder to your own integration workflows.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input readOnly value="sk_live_****************" />
                <Button className="w-full">Regenerate key</Button>
              </div>
            </div>
          </section>
          <section className="glass-panel rounded-[2rem] border border-white/10 p-6">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Billing</p>
              <p className="text-slate-300">Your current plan is Premium with unlimited outreach campaigns and lead enrichment.</p>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Next invoice</p>
                  <p className="mt-2 font-semibold text-white">May 28, 2026</p>
                </div>
                <Button className="w-full">Update billing info</Button>
              </div>
            </div>
          </section>
        </div>
        <section className="glass-panel rounded-[2rem] border border-white/10 p-6">
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">User profile</p>
              <Input placeholder="Full name" value="Sophie Chang" readOnly />
              <Input placeholder="Team email" value="sophie@aileadfinder.com" readOnly />
              <Textarea value="Product leader with a focus on sales automation and lead intelligence." readOnly />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Team members</p>
              <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="font-semibold text-white">Ari Johnson</p>
                <p className="text-sm text-slate-400">Head of Growth</p>
              </div>
              <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="font-semibold text-white">Mia Patel</p>
                <p className="text-sm text-slate-400">Sales Ops Lead</p>
              </div>
              <Button className="w-full">Invite team member</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
