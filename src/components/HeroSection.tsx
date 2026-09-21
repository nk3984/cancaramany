"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { useLocale } from "@/i18n/LocaleProvider";
import { localePath } from "@/i18n/paths";
import { useState } from "react";

export function HeroSection() {
  const { locale, dict } = useLocale();
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Can Caramany private estate"
          alt="Aerial view of the Can Caramany private estate in eastern Mallorca"
          aspect="h-full w-full"
          className="h-full min-h-[100svh] w-full"
          src="/images/can-caramany/hero/hero-estate-aerial.jpg"
          priority
          sizes="100vw"
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-[var(--color-charcoal)]/30 to-[var(--color-charcoal)]/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[var(--color-white)]/70">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-[0.06em] text-[var(--color-white)]">
            {dict.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-white)]/85 sm:text-[17px]">
            {dict.hero.support}
          </p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-white)]/60 sm:text-[15px]">
            {dict.hero.facts}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={localePath(locale, "/#properties")} variant="light">
              {dict.hero.ctaPrimary}
            </Button>
            <button
              type="button"
              onClick={() => setEnquireOpen(true)}
              className="inline-flex border border-[var(--color-white)]/40 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-charcoal)]"
            >
              {dict.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-3 text-[var(--color-white)]/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.28em]">
            {dict.common.scroll}
          </span>
          <span className="relative h-10 w-px overflow-hidden bg-[var(--color-white)]/25">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-[var(--color-white)]/80"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>

      <Modal
        open={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        title={dict.nav.enquireTitle}
      >
        <EnquiryForm onSuccess={() => setEnquireOpen(false)} />
      </Modal>
    </section>
  );
}
