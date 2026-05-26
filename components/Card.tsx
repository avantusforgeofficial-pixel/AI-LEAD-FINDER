'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border',
          variant === 'default' && 'bg-gray-900 border-gray-800',
          variant === 'glass' && 'bg-gray-900/50 backdrop-blur-md border-gray-700/50',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
export default Card;