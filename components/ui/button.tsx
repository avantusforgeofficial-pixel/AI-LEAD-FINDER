import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-accent text-white hover:bg-violet-400",
  outline: "border border-white/15 bg-transparent text-white hover:bg-white/5",
  ghost: "bg-transparent text-slate-200 hover:bg-white/5",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button };
