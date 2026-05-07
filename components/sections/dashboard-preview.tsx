import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { dashboardMetrics, sensorTimeline } from "@/constants/data";

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
          <div className="glass-panel overflow-hidden rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] bg-zinc-950 p-5 text-white">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-zinc-400">FarmBot Command Center</p>
                  <h3 className="mt-1 text-2xl font-bold">Greenhouse Alpha</h3>
                </div>
                <span className="w-fit rounded-full bg-accent/15 px-4 py-2 text-sm font-bold text-accent">
                  Live Sync
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {dashboardMetrics.map((metric) => (
                  <Card
                    className="border-white/10 bg-white/[0.07] text-white"
                    key={metric.label}
                  >
                    <div className="flex items-center justify-between">
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                      <span className="text-sm text-zinc-400">{metric.trend}</span>
                    </div>
                    <p className="mt-5 text-sm text-zinc-400">{metric.label}</p>
                    <p className="mt-1 text-3xl font-black">{metric.value}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="font-bold">Soil moisture trend</p>
                    <p className="text-sm text-zinc-400">Last 7 days</p>
                  </div>
                  <div className="grid h-52 grid-cols-12 items-end gap-2">
                    {[38, 44, 52, 47, 61, 68, 72, 70, 76, 74, 81, 86].map(
                      (height, index) => (
                        <div
                          className="rounded-t-xl bg-gradient-to-t from-accent to-primary"
                          key={index}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="mb-5 font-bold">Device activity</p>
                  <div className="space-y-4">
                    {sensorTimeline.map((item) => (
                      <div className="flex items-center justify-between" key={item.label}>
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                            <item.icon className="h-5 w-5 text-accent" />
                          </span>
                          <span className="text-sm text-zinc-200">{item.label}</span>
                        </div>
                        <span className="text-sm font-bold text-amber-200">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
