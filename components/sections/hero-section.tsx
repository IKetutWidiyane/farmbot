"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- KOMPONEN EFEK BINARY (HANYA UNTUK JUDUL) ---
const ScrambleText = ({ text, as: Component = "span", className }: { text: string; as?: React.ElementType; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const triggerScramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return Math.random() > 0.5 ? "1" : "0"; 
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1.5; 
    }, 40);
  };

  useEffect(() => {
    triggerScramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Component onMouseEnter={triggerScramble} className={className}>
      {displayText}
    </Component>
  );
};

// --- HERO SECTION UTAMA ---
export function HeroSection() {
  // Setup untuk efek 3D Card Parallax yang mulus
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      
      {/* Grid Pattern overlay halus */}
      <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]" />
      
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[15%] -z-10 h-40 w-40 rounded-full bg-primary/20 blur-[70px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] top-[35%] -z-10 h-56 w-56 rounded-full bg-accent/20 blur-[90px]"
      />

      <div className="container-page grid min-h-[calc(100vh-7rem)] items-center gap-16 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-4 py-2 text-sm font-semibold text-secondary shadow-sm backdrop-blur transition-all hover:border-primary hover:bg-white dark:border-white/10 dark:bg-zinc-900/50 dark:text-green-100 dark:hover:border-primary/50"
          >
            <Cpu className="h-4 w-4 text-accent animate-pulse" />
            Connected field operations platform
          </motion.div>
          
          <h1 className="max-w-4xl cursor-default text-5xl font-black tracking-normal text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 to-zinc-600 dark:from-white dark:to-zinc-400 sm:text-6xl lg:text-7xl">
            {/* ScrambleText HANYA DITERAPKAN DI SINI */}
            <ScrambleText text="Smart Farming with IoT Automation" className="transition-colors duration-300" />
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            FarmBot connects field sensors, live telemetry, and practical automation workflows to help modern farms respond faster with less manual checking.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button href="#pricing" className="w-full sm:w-auto group shadow-lg shadow-primary/20">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button href="#dashboard" variant="secondary" className="w-full sm:w-auto group border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5">
                <PlayCircle className="h-4 w-4 mr-2 text-accent transition-transform group-hover:scale-110" />
                Live Demo
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {["Real-time telemetry", "Sensor insights", "Automation ready"].map(
              (item, idx) => (
                <motion.span 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.15 }}
                  whileHover={{ scale: 1.05, color: "#22c55e" }}
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
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center perspective-[1200px]"
          style={{ perspective: 1200 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="group relative w-full max-w-md rounded-[2.5rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.2)] dark:border-white/10 dark:bg-black/20"
          >
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="relative rounded-[2rem] border border-white/40 bg-zinc-950 p-7 text-white shadow-inner dark:border-white/10"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-400">Farm health</p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-1 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
                  >
                    94%
                  </motion.p>
                </div>
                
                <motion.div 
                  animate={{ boxShadow: ["0px 0px 0px rgba(34,197,94,0)", "0px 0px 20px rgba(34,197,94,0.4)", "0px 0px 0px rgba(34,197,94,0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-bold tracking-wide text-accent backdrop-blur-md"
                >
                  Optimal
                </motion.div>
              </div>
              
              <div className="mt-10 grid grid-cols-7 items-end gap-3 h-32">
                {[48, 66, 54, 78, 62, 88, 72].map((height, index) => (
                  <div key={index} className="group/bar relative h-full flex items-end">
                    <motion.div
                      animate={{ height: `${height}%` }}
                      initial={{ height: "0%" }}
                      whileHover={{ scaleY: 1.1, filter: "brightness(1.4)" }}
                      style={{ originY: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.08,
                        duration: 0.7,
                        type: "spring", stiffness: 100
                      }}
                      className="w-full cursor-pointer rounded-t-md rounded-b-sm bg-gradient-to-t from-accent/80 to-primary"
                    />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-white px-2 py-1 text-xs font-bold text-zinc-950 opacity-0 transition-all duration-200 group-hover/bar:scale-100 group-hover/bar:opacity-100">
                      {height}%
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="cursor-pointer rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.08]"
                >
                  <p className="text-sm font-medium text-zinc-400">Soil moisture</p>
                  <p className="mt-2 text-2xl font-bold">72%</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="cursor-pointer rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.08]"
                >
                  <p className="text-sm font-medium text-zinc-400">Irrigation mode</p>
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