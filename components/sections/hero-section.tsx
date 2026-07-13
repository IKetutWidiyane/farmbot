"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, PlayCircle, Satellite, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  // Setup untuk efek 3D Card Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-radial-farm pt-28 dark:bg-radial-farm"
      id="top"
    >
      {/* Background Gradient & Floating IoT Orbs */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(250,250,250,0.25),rgba(250,250,250,1)_88%)] dark:bg-[linear-gradient(180deg,rgba(16,20,16,0.35),rgba(16,20,16,1)_88%)]" />
      
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] -z-10 h-32 w-32 rounded-full bg-primary/20 blur-[60px]"
      />
      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[20%] top-[40%] -z-10 h-48 w-48 rounded-full bg-accent/20 blur-[80px]"
      />

      <div className="container-page grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-sm font-semibold text-secondary shadow-sm backdrop-blur transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/10 dark:text-green-100"
          >
            <Satellite className="h-4 w-4 text-accent" />
            Connected field operations platform
          </motion.div>
          
          <motion.h1 
            whileHover={{ scale: 1.01 }}
            className="max-w-4xl text-5xl font-black tracking-normal text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 to-zinc-600 transition-all duration-300 hover:from-primary hover:to-accent dark:from-white dark:to-zinc-400 dark:hover:from-primary dark:hover:to-green-300 sm:text-6xl lg:text-7xl"
          >
            Smart Farming with IoT Automation
          </motion.h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            FarmBot connects field sensors, live telemetry, and practical
            automation workflows to help modern farms respond faster with less
            manual checking.
          </p>
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#pricing" className="w-full sm:w-auto group">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#dashboard" variant="secondary" className="w-full sm:w-auto group">
                <PlayCircle className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                Live Demo
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            {["Real-time telemetry", "Sensor insights", "Automation ready"].map(
              (item, idx) => (
                <motion.span 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, color: "#10b981" }} // Ganti warna hex sesuai accent Anda
                  className="flex cursor-pointer items-center gap-2 transition-colors"
                >
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  {item}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* Kolom Kanan: 3D Interaktif Card */}
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center perspective-[1000px]"
          style={{ perspective: 1000 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="glass-panel relative w-full max-w-md rounded-[2rem] p-4 shadow-glow transition-shadow hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
          >
            {/* Inner Content yang sedikit menonjol ke depan (translateZ) */}
            <div 
              style={{ transform: "translateZ(40px)" }}
              className="rounded-[1.5rem] border border-white/40 bg-zinc-950 p-6 text-white dark:border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Farm health</p>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-1 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400"
                  >
                    94%
                  </motion.p>
                </div>
                {/* Badge Berdenyut */}
                <motion.div 
                  animate={{ boxShadow: ["0px 0px 0px rgba(34,197,94,0)", "0px 0px 15px rgba(34,197,94,0.5)", "0px 0px 0px rgba(34,197,94,0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-sm font-semibold text-accent"
                >
                  Optimal
                </motion.div>
              </div>
              
              {/* Grafik Bar Interaktif */}
              <div className="mt-8 grid grid-cols-7 items-end gap-3 h-28">
                {[48, 66, 54, 78, 62, 88, 72].map((height, index) => (
                  <div key={index} className="group relative h-full flex items-end">
                    <motion.div
                      animate={{ height: `${height}%` }}
                      initial={{ height: "0%" }}
                      whileHover={{ scaleY: 1.15, filter: "brightness(1.3)" }}
                      style={{ originY: 1 }}
                      transition={{
                        delay: 0.4 + index * 0.06,
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                      className="w-full cursor-pointer rounded-t-sm rounded-b-sm bg-gradient-to-t from-accent to-primary"
                    />
                    {/* Tooltip Hover (opsional) */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {height}%
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <p className="text-sm text-zinc-400">Soil moisture</p>
                  <p className="mt-2 text-2xl font-bold">72%</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <p className="text-sm text-zinc-400">Irrigation mode</p>
                  <p className="mt-2 text-2xl font-bold text-accent">Auto</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}