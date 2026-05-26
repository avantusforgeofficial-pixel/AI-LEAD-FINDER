'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import LeadTable from '@/components/LeadTable';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { mockLeads, filterLeads, calculateStats, getIndustries, getCompanySizes, getLocations } from '@/lib/leads';
import { Lead } from '@/types/index';
import { Users, TrendingUp, MessageSquare, Target, Search, Filter } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [minScore, setMinScore] = useState(0);
  const [maxScore, setMaxScore] = useState(100);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filteredLeads = filterLeads(mockLeads, {
    query: searchQuery,
    industry: selectedIndustries.length > 0 ? selectedIndustries : undefined,
    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
    minScore,
    maxScore,
  });

  const stats = calculateStats(filteredLeads);
  const industries = getIndustries(mockLeads);
  const statuses = ['new', 'contacted', 'interested', 'qualified', 'lost'];

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
  };

  return (
    <div className="flex bg-gray-950">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Dashboard" subtitle="Manage and discover new leads" />

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <StatCard icon={Users} label="Total Leads" value={stats.totalLeads} />
            <StatCard icon={Target} label="Contacted" value={stats.contactedLeads} />
            <StatCard icon={TrendingUp} label="Interested" value={stats.interestedLeads} />
            <StatCard icon={MessageSquare} label="Avg. Score" value={`${stats.avgScore}%`} />
          </div>

          {/* Search and Filters */}
          <Card variant="glass" className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={20} />
              <h2 className="text-lg font-bold">Filters & Search</h2>
            </div>

            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                <Input
                  type="text"
                  placeholder="Search by name, email, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Score Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Score Range</label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={minScore}
                    onChange={(e) => setMinScore(Number(e.target.value))}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxScore}
                    onChange={(e) => setMaxScore(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-gray-300 text-sm w-24">({minScore} - {maxScore})</span>
                </div>
              </div>

              {/* Industries */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Industries</label>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Badge
                      key={industry}
                      variant={selectedIndustries.includes(industry) ? 'info' : 'default'}
                      className="cursor-pointer"
                      onClick={() => toggleIndustry(industry)}
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <Badge
                      key={status}
                      variant={selectedStatuses.includes(status) ? 'info' : 'default'}
                      className="cursor-pointer capitalize"
                      onClick={() => toggleStatus(status)}
                    >
                      {status}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustries([]);
                  setSelectedStatuses([]);
                  setMinScore(0);
                  setMaxScore(100);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Card>

          {/* Leads Table */}
          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Leads ({filteredLeads.length})</h2>
              <Button variant="primary">Export</Button>
            </div>
            <LeadTable leads={filteredLeads} onViewLead={handleViewLead} />
          </Card>

          {/* Lead Detail Modal (simple) */}
          {selectedLead && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <Card variant="glass" className="w-full max-w-2xl p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedLead.name}</h2>
                    <p className="text-gray-400">{selectedLead.email}</p>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedLead(null)} className="text-2xl">
                    ×
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Company</p>
                    <p className="text-white font-medium">{selectedLead.company}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Title</p>
                    <p className="text-white font-medium">{selectedLead.title}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Industry</p>
                    <p className="text-white font-medium">{selectedLead.industry}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Score</p>
                    <p className="text-white font-medium">{selectedLead.score}/100</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedLead.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="primary" className="flex-1">Send Outreach</Button>
                  <Button variant="secondary" className="flex-1" onClick={() => setSelectedLead(null)}>
                    Close
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;