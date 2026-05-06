"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/constants/data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-white/60 dark:bg-white/[0.03]" id="faq">
      <div className="container-page">
        <SectionHeading
          description="Answers to common implementation and product questions for teams evaluating the FarmBot template."
          eyebrow="FAQ"
          title="Questions before you launch"
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <Reveal delay={index * 0.05} key={faq.question}>
                <div className="glass-panel rounded-2xl">
                  <button
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-7 text-slate-600 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
