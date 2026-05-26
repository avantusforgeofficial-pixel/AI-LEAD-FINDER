'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          variant === 'default' && 'bg-gray-700 text-gray-200',
          variant === 'success' && 'bg-green-900/30 text-green-400',
          variant === 'warning' && 'bg-yellow-900/30 text-yellow-400',
          variant === 'danger' && 'bg-red-900/30 text-red-400',
          variant === 'info' && 'bg-blue-900/30 text-blue-400',
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;