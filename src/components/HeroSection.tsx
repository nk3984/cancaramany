"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ESTATE_TOTAL } from "@/data/properties";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="IMAGE REQUIRED — ESTATE AERIAL"
          alt="Open countryside across the Can Caramany private estate in eastern Mallorca"
          aspect="h-full w-full"
          className="h-full min-h-[100svh] w-full"
          src="/images/can-caramany/hero/hero-estate-aerial.jpg"
          priority
          sizes="100vw"
          objectPosition="center 45%"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/75 via-[var(--color-charcoal)]/25 to-[var(--color-charcoal)]/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--color-white)]/70">
            Private Estate · Mallorca
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-[0.06em] text-[var(--color-white)]">
            CAN CARAMANY
          </h1>
          <p className="mt-5 font-[family-name:var(--font-serif)] text-[clamp(1.25rem,2.8vw,2rem)] leading-snug text-[var(--color-white)]/90">
            Space. Privacy. Heritage. Mallorca.
          </p>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--color-white)]/70 sm:text-[15px]">
            Four private properties · {ESTATE_TOTAL.display} · Historic finca
          </p>
          <div className="mt-10">
            <Button href="#estate" variant="light">
              Explore the Estate
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-3 text-[var(--color-white)]/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-[var(--color-white)]/25">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-[var(--color-white)]/80"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
