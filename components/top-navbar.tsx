import { Bell, ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopNavbar() {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-glow backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-1">
        <p className="text-sm text-slate-400">Active Workspace</p>
        <h1 className="text-2xl font-semibold text-white">Sales intelligence hub</h1>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <form className="relative w-full sm:w-[420px]">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input placeholder="Search leads, campaigns, or companies..." className="pl-11" />
        </form>
        <div className="flex items-center gap-3">
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-slate-200 transition hover:bg-white/5">
            <Bell className="h-5 w-5" />
          </button>
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Account
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
