import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="glass-card flex flex-col items-center justify-center rounded-3xl border border-white/10 p-12 text-center text-slate-300">
      <Search className="mb-5 h-10 w-10 text-accent" />
      <h3 className="text-2xl font-semibold text-white">No results found</h3>
      <p className="mt-3 max-w-lg text-sm text-slate-400">{message}</p>
      <Link
        href="/dashboard"
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
      >
        Back to dashboard
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
