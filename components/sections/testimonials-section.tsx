import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/constants/data";

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionHeading
          description="Dummy testimonials that make the template feel complete while staying easy to customize for a real product."
          eyebrow="Testimonials"
          title="Built for teams growing with data"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal delay={index * 0.08} key={testimonial.name}>
              <Card className="h-full">
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-black text-white">
                    {testimonial.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
