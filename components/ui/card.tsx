import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35",
        className
      )}
      {...props}
    />
  );
}
