'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: number;
  subtext?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, change, subtext }) => {
  return (
    <Card variant="glass" className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
          {subtext && <p className="text-gray-500 text-xs mt-1">{subtext}</p>}
          {change !== undefined && (
            <p className={`text-sm mt-2 font-medium ${
              change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {change >= 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
          <Icon size={24} className="text-blue-400" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;