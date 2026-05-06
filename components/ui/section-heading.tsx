import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn("mx-auto mb-12 max-w-3xl text-center sm:mb-16", className)}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
