'use client';

import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import Button from './Button';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showActions?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, showActions = true }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          {title && <h1 className="text-2xl font-bold text-white">{title}</h1>}
          {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
        </div>
        {showActions && (
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Settings size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <User size={20} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;