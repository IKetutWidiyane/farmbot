"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/constants/data";

// Varian animasi untuk grid (mengontrol delay antar kartu)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jarak waktu muncul antar kartu
      delayChildren: 0.1,
    },
  },
};

// Varian animasi untuk masing-masing kartu
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="features">
      
      {/* Ornamen Background Tambahan (Glow Halus) */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10" />

      <div className="container-page">
        <SectionHeading
          description="Everything your IoT startup landing page needs to communicate trust, intelligence, and operational clarity."
          eyebrow="Features"
          title="One platform for smarter farms"
        />
        
        {/* Kontainer Grid dengan animasi scroll (whileInView) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }} // Animasi mulai saat elemen masuk 100px ke dalam layar
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card className="group relative h-full overflow-hidden border border-zinc-200 bg-white/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-primary/40 dark:hover:shadow-primary/20">
                
                {/* Efek gradien background saat hover (mengikuti kursor/statis) */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:opacity-100 dark:group-hover:from-primary/10" />
                
                {/* Ikon Box dengan micro-interaction */}
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white dark:bg-primary/20 dark:text-green-100 dark:group-hover:bg-primary dark:group-hover:text-white">
                  <feature.icon className="h-7 w-7 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-green-300">
                  {feature.title}
                </h3>
                
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
                
                {/* Garis aksen kecil di bawah yang muncul saat hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}