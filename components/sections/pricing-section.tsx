import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/constants/data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="section-padding bg-white/60 dark:bg-white/[0.03]" id="pricing">
      <div className="container-page">
        <SectionHeading
          description="Flexible starter plans for landing-page demos, SaaS prototypes, and real IoT product positioning."
          eyebrow="Pricing"
          title="Choose the plan that fits your farm"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal delay={index * 0.08} key={plan.name}>
              <Card
                className={cn(
                  "relative h-full",
                  plan.recommended &&
                    "border-primary/60 bg-primary/10 shadow-glow dark:bg-primary/15"
                )}
              >
                {plan.recommended ? (
                  <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">
                    Popular
                  </span>
                ) : null}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== "Custom" ? (
                    <span className="pb-1 text-zinc-500 dark:text-zinc-400">
                      /month
                    </span>
                  ) : null}
                </div>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                      key={feature}
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  href="#cta"
                  variant={plan.recommended ? "primary" : "secondary"}
                >
                  Get Started
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
