import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { workSteps } from "@/constants/data";

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white/60 dark:bg-white/[0.03]">
      <div className="container-page">
        <SectionHeading
          description="From raw sensor data to automated action, FarmBot keeps every part of the growing loop connected."
          eyebrow="How it works"
          title="A simple loop with serious intelligence"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {workSteps.map((step, index) => (
            <Reveal delay={index * 0.1} key={step.title}>
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.05]">
                <span className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-black text-white shadow-green-glow">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
