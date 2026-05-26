'use client';

import React from 'react';
import { Lead } from '@/types/index';
import { Eye, Trash2 } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import { formatDate } from '@/lib/utils';

interface LeadTableProps {
  leads: Lead[];
  onViewLead?: (lead: Lead) => void;
  onDeleteLead?: (leadId: string) => void;
}

const LeadTable: React.FC<LeadTableProps> = ({ leads, onViewLead, onDeleteLead }) => {
  const statusColors: Record<string, 'success' | 'warning' | 'danger' | 'info'> = {
    new: 'info',
    contacted: 'warning',
    interested: 'success',
    qualified: 'success',
    lost: 'danger',
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Name</th>
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Company</th>
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Industry</th>
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Score</th>
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Status</th>
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Saved</th>
            <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
              <td className="py-4 px-6">
                <div>
                  <p className="text-white font-medium">{lead.name}</p>
                  <p className="text-gray-400 text-sm">{lead.email}</p>
                </div>
              </td>
              <td className="py-4 px-6">
                <p className="text-white">{lead.company}</p>
                <p className="text-gray-400 text-sm">{lead.title}</p>
              </td>
              <td className="py-4 px-6 text-gray-300">{lead.industry}</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${lead.score}%` }}
                    />
                  </div>
                  <span className="text-white font-medium text-sm">{lead.score}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <Badge variant={statusColors[lead.status]}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </Badge>
              </td>
              <td className="py-4 px-6 text-gray-400 text-sm">
                {lead.savedAt ? formatDate(lead.savedAt) : '-'}
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewLead?.(lead)}
                    className="p-1"
                  >
                    <Eye size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDeleteLead?.(lead.id)}
                    className="p-1 text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;