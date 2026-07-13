"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { dashboardMetrics, sensorTimeline } from "@/constants/data";

// Varian animasi untuk efek kemunculan berurutan (staggered)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

export function DashboardPreview() {
  return (
    <section className="section-padding" id="dashboard">
      <div className="container-page">
        <SectionHeading
          description="A polished SaaS-style dashboard preview with dummy IoT data for pitch decks, portfolios, and startup templates."
          eyebrow="Dashboard"
          title="Field intelligence at a glance"
        />
        
        <Reveal>
          <div className="glass-panel relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-4 shadow-2xl shadow-primary/10">
            {/* Latar belakang dashboard dengan gradien halus */}
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-6 text-white shadow-inner sm:p-8">
              
              {/* Header Dashboard */}
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent/80">
                    FarmBot Command Center
                  </p>
                  <h3 className="mt-1 text-3xl font-black tracking-tight text-white">
                    Greenhouse Alpha
                  </h3>
                </div>
                
                {/* Badge "Live Sync" dengan titik berdenyut (Pulse) */}
                <div className="flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-bold text-accent backdrop-blur-md">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                  />
                  Live Sync
                </div>
              </div>

              {/* Grid Konten Utama */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-8 grid gap-6"
              >
                
                {/* Baris Atas: Metrics Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                  {dashboardMetrics.map((metric) => (
                    <motion.div key={metric.label} variants={itemVariants}>
                      <Card className="group relative overflow-hidden border-white/5 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
                        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-accent/20" />
                        <div className="relative z-10 flex items-center justify-between">
                          <div className={`rounded-xl bg-white/5 p-2.5 backdrop-blur-sm ${metric.color}`}>
                            <metric.icon className="h-6 w-6" />
                          </div>
                          <span className="flex items-center gap-1 text-sm font-medium text-emerald-400">
                            {metric.trend}
                          </span>
                        </div>
                        <p className="relative z-10 mt-5 text-sm font-medium text-zinc-400">
                          {metric.label}
                        </p>
                        <p className="relative z-10 mt-1 text-4xl font-black tracking-tight text-white">
                          {metric.value}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Baris Bawah: Grafik & Timeline */}
                <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                  
                  {/* Grafik Chart Interaktif */}
                  <motion.div variants={itemVariants} className="group rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.05]">
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">Soil Moisture Trend</p>
                        <p className="text-sm text-zinc-400">7-day aggregate data</p>
                      </div>
                      <select className="rounded-lg border border-white/10 bg-transparent px-3 py-1.5 text-sm text-zinc-300 outline-none focus:border-accent">
                        <option className="bg-zinc-900">This Week</option>
                        <option className="bg-zinc-900">Last Week</option>
                      </select>
                    </div>
                    
                    {/* Bar Chart */}
                    <div className="relative grid h-56 grid-cols-12 items-end gap-2 sm:gap-3">
                      {/* Garis bantu horizontal (Grid lines) */}
                      <div className="absolute inset-0 flex flex-col justify-between border-b border-white/10 pb-0">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-full border-t border-white/5 border-dashed" />
                        ))}
                      </div>

                      {[38, 44, 52, 47, 61, 68, 72, 70, 76, 74, 81, 86].map(
                        (height, index) => (
                          <div key={index} className="relative z-10 flex h-full items-end">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${height}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                              whileHover={{ scaleY: 1.1, filter: "brightness(1.2)" }}
                              style={{ originY: 1 }}
                              className="w-full cursor-pointer rounded-t-md bg-gradient-to-t from-accent/60 to-primary sm:rounded-t-lg"
                            >
                              {/* Tooltip on Hover */}
                              <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-zinc-800 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                                {height}%
                              </div>
                            </motion.div>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>

                  {/* Device Activity List */}
                  <motion.div variants={itemVariants} className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm">
                    <div className="mb-6 flex items-center justify-between">
                      <p className="font-bold text-white">Device Activity</p>
                      <button className="text-sm font-medium text-accent hover:underline">
                        View All
                      </button>
                    </div>
                    <div className="space-y-1">
                      {sensorTimeline.map((item, i) => (
                        <motion.div 
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="group flex cursor-pointer items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-white/5"
                        >
                          <div className="flex items-center gap-4">
                            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/5 bg-white/5 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                              <item.icon className="h-5 w-5 text-zinc-400 group-hover:text-accent" />
                            </span>
                            <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                              {item.label}
                            </span>
                          </div>
                          <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-bold text-zinc-400 transition-colors group-hover:bg-white/10 group-hover:text-white">
                            {item.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}