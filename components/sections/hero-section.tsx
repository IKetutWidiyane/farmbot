"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Satellite, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-radial-farm pt-28 dark:bg-radial-farm"
      id="top"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(250,250,250,0.25),rgba(250,250,250,1)_88%)] dark:bg-[linear-gradient(180deg,rgba(16,20,16,0.35),rgba(16,20,16,1)_88%)]" />
      <div className="container-page grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-sm font-semibold text-secondary shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-green-100">
            <Satellite className="h-4 w-4 text-accent" />
            Connected field operations platform
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-normal text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
            Smart Farming with IoT Automation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            FarmBot connects field sensors, live telemetry, and practical
            automation workflows to help modern farms respond faster with less
            manual checking.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#dashboard" variant="secondary">
              <PlayCircle className="h-4 w-4" />
              Live Demo
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            {["Real-time telemetry", "Sensor insights", "Automation ready"].map(
              (item) => (
                <span className="flex items-center gap-2" key={item}>
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-panel relative rounded-[2rem] p-4 shadow-glow">
            <div className="rounded-[1.5rem] border border-white/40 bg-zinc-950 p-5 text-white dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Farm health</p>
                  <p className="mt-1 text-3xl font-bold">94%</p>
                </div>
                <div className="rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
                  Optimal
                </div>
              </div>
              <div className="mt-8 grid grid-cols-7 items-end gap-2">
                {[48, 66, 54, 78, 62, 88, 72].map((height, index) => (
                  <motion.div
                    animate={{ height: `${height}%` }}
                    className="min-h-20 rounded-full bg-gradient-to-t from-accent to-primary"
                    initial={{ height: "18%" }}
                    key={index}
                    transition={{
                      delay: 0.4 + index * 0.06,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-zinc-400">Soil moisture</p>
                  <p className="mt-2 text-2xl font-bold">72%</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-zinc-400">Irrigation mode</p>
                  <p className="mt-2 text-2xl font-bold">Auto</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
