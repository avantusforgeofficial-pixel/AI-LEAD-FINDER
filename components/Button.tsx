'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && 'bg-blue-600 hover:bg-blue-700 text-white',
          variant === 'secondary' && 'bg-gray-700 hover:bg-gray-600 text-white',
          variant === 'ghost' && 'bg-transparent hover:bg-gray-800 text-gray-300',
          variant === 'danger' && 'bg-red-600 hover:bg-red-700 text-white',
          size === 'sm' && 'px-3 py-1.5 text-sm',
          size === 'md' && 'px-4 py-2 text-base',
          size === 'lg' && 'px-6 py-3 text-lg',
          className
        )}
        {...props}
      >
        {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;