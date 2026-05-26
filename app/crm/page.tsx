'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { mockLeads } from '@/lib/leads';
import { GripHorizontal, Plus } from 'lucide-react';

const stages = [
  { id: '1', name: 'New Leads', color: 'bg-blue-600' },
  { id: '2', name: 'Contacted', color: 'bg-yellow-600' },
  { id: '3', name: 'Interested', color: 'bg-green-600' },
  { id: '4', name: 'Qualified', color: 'bg-purple-600' },
  { id: '5', name: 'Won', color: 'bg-emerald-600' },
];

const CRMPage: React.FC = () => {
  const [leads, setLeads] = useState(mockLeads);

  const getLeadsByStatus = (status: string) => {
    return leads.filter((lead) => lead.status === status);
  };

  const statusMap: Record<string, string> = {
    '1': 'new',
    '2': 'contacted',
    '3': 'interested',
    '4': 'qualified',
    '5': 'lost',
  };

  return (
    <div className="flex bg-gray-950">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Pipeline" subtitle="Manage your sales pipeline" />

        <div className="p-6 space-y-6">
          {/* Pipeline Board */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {stages.map((stage) => {
                const stageLeads = getLeadsByStatus(statusMap[stage.id]);
                return (
                  <div key={stage.id} className="w-80 flex flex-col">
                    {/* Stage Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                        <h3 className="font-bold text-white">{stage.name}</h3>
                      </div>
                      <Badge variant="default">{stageLeads.length}</Badge>
                    </div>

                    {/* Stage Cards */}
                    <div className="flex-1 space-y-3 bg-gray-800/30 rounded-lg p-4 min-h-96">
                      {stageLeads.map((lead) => (
                        <Card
                          key={lead.id}
                          variant="glass"
                          className="p-4 cursor-move hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start gap-2">
                            <GripHorizontal size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-white">{lead.name}</p>
                              <p className="text-sm text-gray-400 truncate">{lead.company}</p>
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex-1 bg-gray-700 rounded-full h-1.5 mr-2">
                                  <div
                                    className="bg-blue-600 h-1.5 rounded-full"
                                    style={{ width: `${lead.score}%` }}
                                  />
                                </div>
                                <span className="text-xs text-gray-400">{lead.score}%</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}

                      {/* Add Card Button */}
                      <Button variant="ghost" className="w-full justify-center gap-2 text-gray-400 hover:text-gray-300">
                        <Plus size={16} />
                        Add Lead
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMPage;