import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("glass-card rounded-3xl p-6 shadow-glow", className)}
      {...props}
    />
  )
);

Card.displayName = "Card";

export { Card };
