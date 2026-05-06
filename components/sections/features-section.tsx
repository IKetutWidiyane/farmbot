import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/constants/data";

export function FeaturesSection() {
  return (
    <section className="section-padding" id="features">
      <div className="container-page">
        <SectionHeading
          description="Everything your IoT startup landing page needs to communicate trust, intelligence, and operational clarity."
          eyebrow="Features"
          title="One platform for smarter farms"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal delay={index * 0.08} key={feature.title}>
              <Card className="h-full">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-violet-200">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
