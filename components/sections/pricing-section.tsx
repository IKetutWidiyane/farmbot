"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/constants/data";
import { cn } from "@/lib/utils";

// Varian animasi untuk grid
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Varian animasi spring untuk kartu
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function PricingSection() {
  return (
    <section className="relative overflow-hidden section-padding bg-zinc-50 dark:bg-zinc-950/50" id="pricing">
      
      {/* Ornamen Latar Belakang - Glow */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-primary/10 blur-[120px] dark:bg-primary/10" />

      <div className="container-page relative z-10">
        <SectionHeading
          description="Flexible starter plans for landing-page demos, SaaS prototypes, and real IoT product positioning."
          eyebrow="Pricing"
          title="Choose the plan that fits your farm"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 pt-8 lg:grid-cols-3 lg:gap-8 lg:items-center"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.name} variants={cardVariants} className="h-full">
              <Card
                className={cn(
                  "relative h-full flex flex-col p-8 transition-all duration-300 backdrop-blur-md",
                  plan.recommended
                    ? "border-primary/50 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent shadow-[0_0_40px_rgba(34,197,94,0.15)] dark:from-primary/20 dark:via-zinc-900/90 dark:to-zinc-900/80 lg:scale-105 lg:shadow-2xl lg:z-10"
                    : "border-zinc-200/80 bg-white/60 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/60 dark:hover:bg-zinc-900/80"
                )}
              >
                {/* Floating Badge yang menembus border atas */}
                {plan.recommended ? (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent px-4 py-1.5 text-xs font-black uppercase tracking-widest text-zinc-950 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                     
                      Most Popular
                    </span>
                  </div>
                ) : null}

                <div className="mb-6">
                  <h3 className={cn(
                    "text-2xl font-black tracking-tight",
                    plan.recommended ? "text-primary dark:text-green-300" : "text-zinc-900 dark:text-white"
                  )}>
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 min-h-[3rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex items-end gap-1">
                  <span className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" ? (
                    <span className="pb-1.5 font-medium text-zinc-500 dark:text-zinc-400">
                      /month
                    </span>
                  ) : null}
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      className="group flex items-start gap-3 text-sm text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                      key={feature}
                    >
                      <CheckCircle2 className={cn(
                        "mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110",
                        plan.recommended ? "text-primary shadow-primary/20 drop-shadow-md" : "text-zinc-400 group-hover:text-accent"
                      )} />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Button
                    className={cn(
                      "w-full py-6 text-sm font-bold transition-all duration-300",
                      plan.recommended 
                        ? "hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1" 
                        : "hover:-translate-y-1"
                    )}
                    href="#cta"
                    variant={plan.recommended ? "primary" : "secondary"}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}