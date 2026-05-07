import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CTASection() {
  return (
    <section className="section-padding" id="cta">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-16 text-center text-white shadow-glow sm:px-10">
            <div className="absolute inset-0 bg-radial-farm opacity-90" />
            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-black tracking-normal sm:text-5xl">
                Grow the future with intelligent farming.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Launch a polished FarmBot landing page today and turn your IoT
                farming idea into a credible product experience.
              </p>
              <Button className="mt-8" href="#pricing">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
