"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/sidebar";
import { TopNavbar } from "@/components/top-navbar";
import { StatsCards } from "@/components/stats-cards";
import { SearchBar } from "@/components/search-bar";
import { FilterPanel } from "@/components/filter-panel";
import { LeadTable } from "@/components/lead-table";
import { leads as sampleLeads } from "@/lib/mock-data";

export default function DashboardShell() {
  const [query, setQuery] = useState("Find IT companies in Germany");
  const [filters, setFilters] = useState({
    country: "All",
    industry: "All",
    size: "All",
    quality: "All",
    hiring: "All",
  });

  const filteredLeads = useMemo(() => {
    return sampleLeads.filter((lead) => {
      const matchesQuery = !query || [lead.business_name, lead.industry, lead.location].some((value) =>
        value.toLowerCase().includes(query.toLowerCase())
      );
      const matchesCountry = filters.country === "All" || lead.location.includes(filters.country);
      const matchesIndustry = filters.industry === "All" || lead.industry === filters.industry;
      const matchesSize = filters.size === "All" || lead.company_size === filters.size;
      const matchesQuality = filters.quality === "All" || lead.lead_status === filters.quality;
      const matchesHiring =
        filters.hiring === "All" ||
        (filters.hiring === "Hiring" ? lead.intent_signals.includes("Hiring") : !lead.intent_signals.includes("Hiring"));

      return matchesQuery && matchesCountry && matchesIndustry && matchesSize && matchesQuality && matchesHiring;
    });
  }, [filters, query]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.1),_transparent_28%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.08),_transparent_25%),#060b16] text-slate-100">
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <TopNavbar />
          <StatsCards />
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]"
          >
            <div className="space-y-6">
              <SearchBar value={query} onChange={setQuery} onSubmit={() => undefined} />
              <FilterPanel filters={filters} onChange={(name, value) => setFilters((prev) => ({ ...prev, [name]: value }))} />
              <LeadTable leads={filteredLeads} />
            </div>
            <div className="space-y-6">
              <div className="glass-panel rounded-[2rem] border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Campaign health</p>
                <h2 className="mt-3 text-xl font-semibold text-white">Priority lead signals</h2>
                <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                    <p className="font-semibold text-white">Recent intent</p>
                    <p className="mt-2">High buying signals from businesses actively advertising and hiring.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                    <p className="font-semibold text-white">Team activity</p>
                    <p className="mt-2">7 outreach campaigns running, 12 saved leads, 3 new replies today.</p>
                  </div>
                </div>
              </div>
              <div className="glass-panel rounded-[2rem] border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick actions</p>
                <div className="mt-5 grid gap-3">
                  <button className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-left text-sm text-white transition hover:bg-white/5">Export selected leads to CSV</button>
                  <button className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-left text-sm text-white transition hover:bg-white/5">Sync CRM pipeline</button>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
